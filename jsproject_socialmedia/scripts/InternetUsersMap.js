async function InternetUsersMap() {
    var toolTip = d3.select('body')
        .append('div')
        .style('position', 'absolute')
        .style('padding', '10px 10px')
        .style('background', '#ffff')
        .style('opacity', 0)
        .style('font-family', 'Open Sans')
        .style('z-index', 1000)
        .style('font-weight', 'bold')
        .style('font-size', '150%');

    let svg = d3.select("#svgMapInternetUsers");
    let width = parseInt(svg.attr("width"));
    let height = parseInt(svg.attr("height"));

    let projection = d3.geoMercator()
        .translate([width / 2, height / 2])
        .scale([width/8]);

    let path = d3.geoPath()
        .projection(projection);

    // Define a quantized scale to sort data values into buckets of color
    // let color = d3.scaleQuantize()
    let color = d3.scaleSqrt()
        .range(["#ffffff", "#000000"]);
       // .range(["#ffffff", "#36c3ea", "#b2c3e2", "#66a6c2", "#2c71a2", "#06416b"]);
    // let color = d3.scaleSequential(d3.interpolateOrRd);     //https://github.com/d3/d3-scale-chromatic

    // Load in GeoJSON data
    let json = await d3.json("world-geo.json");


    // Load in the agriculture data;
    let stateData = await d3.csv("data/world-internetusers-2020.csv");
    // let stateDataTxt = await d3.csv("world-internetusers-2020_3.csv");
    let adMarket = await d3.csv("data/world-admarket-2022.csv")

    // Set input domain for color scale based on the min and max
    color.domain([
        d3.min(stateData, function (d) {
            return 1;
        }),
        d3.max(stateData, function (d) {
            return 469988646;
        })
    ]);

    // Convert the data array to an object, so that it's easy to look up
    // data values by state names
    let dataLookup = {};
    stateData.forEach(function (stateRow) {
        // d3.csv will read the values as strings; we need to convert them to floats
        dataLookup[stateRow.worldmap] = parseFloat(stateRow.internetusers);
    });

    let dataLookupAdMarket = {};
    adMarket.forEach(function (stateRow) {
        // d3.csv will read the values as strings; we need to convert them to floats
        dataLookupAdMarket[stateRow.worldmap] = parseFloat(stateRow.adMarket);
    });

    // Now we add the data values to the geometry for every state

    json.features.forEach(function (feature) {
        feature.properties.value = [dataLookup[feature.properties.name], dataLookupAdMarket[feature.properties.name]];

        // console.log( feature.properties.value)

    });

    //States
    var myCircles = d3.select("#cityLayerAdMarket").selectAll("myCircles")
        // .append("svg")
        .data(json.features)
        .enter()
        .append("circle")
        .attr("fill", "steelblue")
        .attr("transform", (d) => { return "translate(" + path.centroid(d) + ")"; })
        // .attr("cx", (d) => { return projection([+d.homelon, +d.homelat])[0] })
        // .attr("cy", (d) => { return projection([+d.homelon, +d.homelat])[1] })
        .attr("r", (d) => { return (Math.sqrt(dataLookupAdMarket[d.properties.name]/Math.PI)*0.2) })
        .attr("stroke-width", 1)
        .attr("fill-opacity", 0.5)
        // .attr("text-anchor", "middle")
        // .attr("dy", ".35em")

    myCircles  // click the circle to set it properties at random
        .on("mouseover",function(){
            d3.select(this)
                .transition()
                .duration(2000)
                // .attr("cx",50)
                // .attr("cy",50)
                .style("fill",d3.rgb( Math.random()*255,Math.random()*255,Math.random()*255))
                .attr("r",(d) => { return (Math.sqrt(dataLookupAdMarket[d.properties.name]/Math.PI)) })

            toolTip.transition()
                .style('opacity', .9)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY) + 'px')
            tempColor = this.style.fill; //store current color

            if(d.properties.name != null || d.properties.name != undefined){
                if (d.properties.value[0] != undefined && d.properties.value[1] != undefined) {
                    toolTip.html(d.properties.name + ": " + d.properties.value[0] + "\n" + ", " + d.properties.value[1]+ "m USD")
                }else if (d.properties.value[0] != undefined) {
                    if (d.properties.value[0] == 0){
                        toolTip.html(d.properties.name + ": Not Available")
                    }else {
                        toolTip.html(d.properties.name + ": " + d.properties.value[0])
                    }
                }else {
                    toolTip.html(d.properties.name + ": Not Available")
                }
            } else {
                toolTip.html("")
            }
        })
        .on('mouseout',  function(d, i){
            d3.select(this)
                .transition()
                .duration(2000)
                // .attr("cx",50)
                // .attr("cy",50)
                .style("fill","steelblue")
                .attr("r",(d) => { return (Math.sqrt(dataLookupAdMarket[d.properties.name]/Math.PI)*0.2) })

            toolTip.transition()
                .style('opacity', 0)
        });


    d3.select("#cityLayer").selectAll("path")
        .data(json.features)
        .join("path")
        // here we use the familiar d attribute again to define the path
        .attr("d", path)
        .style("stroke", "#858585")
        .style("fill", function (d) {
            return color(d.properties.value[0], 0.1);
        })
        .on('mouseover', function(d, i){

            toolTip.transition()
                .style('opacity', .9)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY) + 'px')
            tempColor = this.style.fill; //store current color

            if(d.properties.name != null || d.properties.name != undefined){
                if (d.properties.value[0] != undefined && d.properties.value[1] != undefined) {
                    toolTip.html(d.properties.name + ": " + d.properties.value[0] + "\n" + ", " + d.properties.value[1]+ "m USD")
                }else if (d.properties.value[0] != undefined) {
                    if (d.properties.value[0] == 0){
                        toolTip.html(d.properties.name + ": Not Available")
                    }else {
                        toolTip.html(d.properties.name + ": " + d.properties.value[0])
                    }
                }else {
                    toolTip.html(d.properties.name + ": Not Available")
                }
            } else {
                toolTip.html("")
            }
        })
        .on('mouseout',  function(d, i){
            toolTip.transition()
                .style('opacity', 0)
        })



    // Bind data and create one path per GeoJSON feature
    d3.select("#mapLayer").selectAll("path")
        .data(json.features)
        .join("path")
        // here we use the familiar d attribute again to define the path
        .attr("d", path)
        .style("stroke", "#858585")
        .style("fill", function (d) {
            return color(d.properties.value[0], 0.1);
        })

}