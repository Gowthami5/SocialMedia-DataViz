// Global advertising expenditure 2021 in billion USD
// https://www.statista.com/topics/990/global-advertising-market/#topicOverview
var data1_totalspending = 657
var data1 = [
    {name: "Magazines", value: 17, share: 18.58},
    {name: "Newspaper", value: 25, share: 30.92},
    {name: "TV", value: (160-29.7), share: 15.42},
    {name: "Radio", value: 29.7, share: 15.42},
    {name: "Digital and Mobile", value: 455, share: 19.31}];

var sel_share = 455/data1_totalspending;

var data2 = [
    {name: "", value: 202, share: (1-sel_share).toFixed(2)},
    {name: "Google", value: 209.5, share: (0.2070*sel_share).toFixed(2)},
    {name: "Meta", value: 114.93, share: (0.3092*sel_share).toFixed(2)},
    {name: "Twitter", value: 4.51, share: (0.1542*sel_share).toFixed(2)},
    {name: "others", value: 126.06, share: (0.1365*sel_share).toFixed(2)}];

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

// Step 3
var svg = d3.select("#svg_OnlineAdMarket"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    radius0 = 80, radius = 150,
    radius2_0 = 180, radius2= 250;

var g = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Step 4
var ordScale = d3.scaleOrdinal()
    .domain(data1.map(d => d.value))
    .range(["#52498F", "#7963AB", "#E07998", "#FFA85C", "#FAEFDE"]);
var ordScale2 = d3.scaleOrdinal()
    .domain(data2.map(d => d.value))
    .range(['#ffd384','rgba(213,147,231,0.71)','rgba(133,243,233,0.99)','#d3e0ea','#fa7f72', "none"]);



// Step 5
var pie = d3.pie().value(function(d) {
    return d.value;
});

var pie2 = d3.pie().value(function(d) {
    return d.value;
})
    .sort((a,b) => a > b ? 1 : -1)

var arc = g.selectAll("arc")
    .data(pie(data1))
    .enter();

var arc2 = g.selectAll("arc")
    .data(pie2(data2))
    .enter();

// Step 6
var path1 = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius0);

var path2 = d3.arc()
    .outerRadius(radius2)
    .innerRadius(radius2_0);

arc.append("path")
    .attr("d", path1)
    .attr("fill", function(d) { return ordScale(d.data.name); })
    .on('mouseover', function(d, i){

        toolTip.transition()
            .style('opacity', .9)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px')
        tempColor = this.style.fill; //store current color

        if(d.data.name != null || d.data.name != undefined){

            if (d.data.share != undefined) {
                toolTip.html(d.data.name + ": " + d.data.value + "b USD")
            }else {
                toolTip.html(d.data.name + ": Not Available")
            }
        } else {
            toolTip.html("")
            toolTip.transition()
                .style('opacity', 0)
        }
    })
    .on('mouseout',  function(d, i){
        toolTip.transition()
            .style('opacity', 0)
    })

arc2.append("path")
    .attr("d", path2)
    .attr("fill", function(d) { return ordScale2(d.data.name); })
    // .attr("class","pathpie")
    .on('mouseover', function(d, i){

        toolTip.transition()
            .style('opacity', .9)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px')
        tempColor = this.style.fill; //store current color

        console.log(label.centroid(d));

        if(d.data.name != null && d.data.name != undefined && d.data.name != ""){

            if (d.data.share != undefined) {
                toolTip.html(d.data.name + ": " + d.data.value + "b USD")
            }else {
                toolTip.html(d.data.name + ": Not Available")
            }
        } else {
            toolTip.html("")
            toolTip.transition()
                .style('opacity', 0)
        }
    })
    .on('mouseout',  function(d, i){
        toolTip.transition()
            .style('opacity', 0)
    })

// Step 7
var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius0);

var label2 = d3.arc()
    .outerRadius(radius2)
    .innerRadius(radius2_0);

// arc.append("text")
//     .attr("x", function(d) { return label.centroid(d)[0]*1.5; })
//     .attr("y", function(d) { return label.centroid(d)[1]*1.5; })
//     // .attr("transform", function(d) {
//     //     return "translate(" + label.centroid(d) + ")";
//     // })
//     .text(function(d) { return d.data.name; })
//     .style("font-family", "arial")
//     .style("font-size", 24);

arc.append("text")
    .attr("x", "-6%")
    .attr("y", "-3%")
    .text("Worldwide")
    .style("font-family", "arial")
    .style("font-size", 24);
arc.append("text")
    .attr("x", "-7%")
    .attr("y", "3%")
    .text("Ad Spend")
    .style("font-family", "arial")
    .style("font-size", 28);
arc.append("text")
    .attr("x", "-5%")
    .attr("y", "8%")
    .text("USD " + data1_totalspending + "b.")
    .style("font-family", "arial")
    .style("font-size", 20);


arc.append("text")
    .attr("x", "-10%")
    .attr("y", "18%")
    .text("Digital and Mobile")
    .style("font-family", "arial")
    .style("font-size", 20);
arc.append("text")
    .attr("x", "-20%")
    .attr("y", "-5%")
    .text("TV")
    .style("font-family", "arial")
    .style("font-size", 20);
arc.append("text")
    .attr("x", "-16%")
    .attr("y", "-20%")
    .text("Radio")
    .style("font-family", "arial")
    .style("font-size", 20);
arc.append("text")
    .attr("x", "-16%")
    .attr("y", "-24%")
    .text("Newspaper")
    .style("font-family", "arial")
    .style("font-size", 20);
arc.append("text")
    .attr("x", "-5%")
    .attr("y", "-27%")
    .text("Magazine")
    .style("font-family", "arial")
    .style("font-size", 20);



arc2.append("text")
    .attr("x", function(d) { return label.centroid(d)[0]*1.7; })
    .attr("y", function(d) { return label.centroid(d)[1]*1.8; })
    // .attr("transform", function(d) {
    //     return "translate(" + label2.centroid(d) + ")";
    // })
    .text(function(d) { return d.data.name; })
    .style("font-family", "arial")
    .style("font-size", 24);





// only for svg
function getBoundingBoxCenter (element) {
    // get the DOM element from a D3 selection
    // you could also use "this" inside .each()
    var element = selection.node();
    // use the native SVG interface to get the bounding box
    var bbox = element.getBBox();
    // return the center of the bounding box
    return [bbox.x + bbox.width/2, bbox.y + bbox.height/2];
}