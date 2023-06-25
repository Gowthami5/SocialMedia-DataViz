// set the dimensions and margins of the graph
var margin = {top: 0, right: 0, bottom: 30, left: 30},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3v4.select("#svg_linechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
// d3v4.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {
d3v4.csv("data/yearly_linedata.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = ["GlobalAdSpend","MagazineAdSpend","NewspaperAdSpend","RadioAdSpend","MobileAdSpend"]

    // add the options to the button
    d3v4.select("#selectButton")
        .selectAll('myOptions')
        .data(allGroup)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    // var x = d3v4.scaleLinear()
    //     .domain([2000,2024])
    //     .range([ 0, width ]);
    var x = d3v4.scaleBand().range([0, width*0.97]).padding(0.4)
                .domain(data.map(function(d) { return d.time; }));
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3v4.axisBottom(x))
        .append("text")
        .attr("y", height - 290)
        .attr("x", width*0.6)
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Year");

    // Add Y axis
    var y = d3v4.scaleLinear()
        .domain( [0,850])
        .range([ height, 0 ]);
        svg.append("g")
        .call(d3v4.axisLeft(y))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0)
            .attr("x", -100)
            // .attr("y", height - 280)
            // .attr("x", width*0.6)
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .text("Billion USD");

    // var circle = svg.selectAll("circle")
    //     .data(data)
    //     .enter().append("circle")
    //     .style("stroke", "gray")
    //     .style("fill", "white")
    //     .attr("r", 40)
    //     .attr("cx", function(d, i){return x(+d.time)})
    //     .attr("cy", function(d) { return y(+d.valueA) });

    // Initialize line with group a
    var lineGlobalAdSpend = svg
        .append('g')
        .append("path")
        .datum(data)
        .attr("d", d3v4.line()
            .x(function(d) { return x(+d.time) })
            .y(function(d) { return y(+d.GlobalAdSpend) })
        )
        .attr("stroke", function(d){ return myColor("GlobalAdSpend") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // Initialize line with group a
    var line = svg
        .append('g')
        .append("path")
        .datum(data)
        .attr("d", d3v4.line()
            .x(function(d) { return x(+d.time) })
            .y(function(d) { return y(+d.GlobalAdSpend) })
        )
        .attr("stroke", function(d){ return myColor("GlobalAdSpend") })
        .style("stroke-width", 4)
        .style("fill", "none")

    var myCircles = d3.select("#linechart_legend").selectAll("myCircles")
        // .append("svg")
        .enter()
        .append("circle")
        .attr("fill", "steelblue")
        .attr("transform", [0,0])
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 50)
        .attr("stroke-width", 1)
        .attr("fill-opacity", 1)

    var zeSocial_Logos= d3v4.select("#svg_linechart_legend")
        // .append("svg")
        .append('image')
        .attr('xlink:href', 'legend_lines.png')
        .attr('width', 150)
        .attr('height', 150)

    // A function that update the chart
    function update(selectedGroup) {

        // Create new data with the selection?
        var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
        var dataFilterGlobalAdSpend  = data.map(function(d){return {time: d.time, value:d["GlobalAdSpend"]} })

        console.log(dataFilter)


        // Give these new data to update line
        line
            .datum(dataFilter)
            .transition()
            .duration(1000)
            .attr("d", d3v4.line()
                .x(function(d) { return x(+d.time) })
                .y(function(d) { return y(+d.value) })
            )
            .attr("stroke", function(d){ return myColor(selectedGroup) })

        lineGlobalAdSpend
            .datum(dataFilter2)
            .transition()
            .duration(1000)
            .attr("d", d3v4.line()
                .x(function(d) { return x(+d.time) })
                .y(function(d) { return y(+d.value) })
            )
            .attr("stroke", function(d){ return myColor("GlobalAdSpend ") })


    }

    // When the button is changed, run the updateChart function
    d3v4.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3v4.select(this).property("value")
        // console.log(selectedOption)

        // run the updateChart function with this selected option
        update(selectedOption)
    })

})