var svg = d3v4.select("#svg_barchart"),
    margin = 300,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin;

// svg.append("text")
//     .attr("transform", "translate(100,0)")
//     .attr("x", 50)
//     .attr("y", 50)
//     .attr("font-size", "24px")
//     .text("XYZ Foods Stock Price")

var x = d3v4.scaleBand().range([0, width]).padding(0.4),
    y = d3v4.scaleLinear().range([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");



//https://www.statista.com/statistics/205352/digital-advertising-revenue-of-leading-online-companies/
d3v4.csv("data/global_ad_revenues.csv", function(error, data) {
    if (error) {
        throw error;
    }

    x.domain(data.map(function(d) { return d.year; }));
    y.domain([0, d3v4.max(data, function(d) { return d.value; })]);

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3v4.axisBottom(x))
        .append("text")
        .attr("y", height - 280)
        .attr("x", width/2)
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Year");

    g.selectAll(".bar2")
        .enter().append("rect")
        .attr("class", "bar2")
        .attr("x", 100)
        .attr("y", 100)
        .attr("width", 1000)
        .attr("height", 1000);

    g.selectAll(".bar2")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar2")
        .on("mouseover", onMouseOver2) //Add listener for the mouseover event
        .on("mouseout", onMouseOut2)   //Add listener for the mouseout event
        .attr("x", function(d) { return x(d.year) + 10; })
        .attr("y", function(d) { return y(d.google); })
        .attr("width", x.bandwidth()/2)
        .transition()
        .ease(d3v4.easeLinear)
        .duration(400)
        .delay(function (d, i) {
            return i * 50;
        })
        .attr("height", function(d) { return height - y(d.google); });

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .on("mouseover", onMouseOver) //Add listener for the mouseover event
        .on("mouseout", onMouseOut)   //Add listener for the mouseout event
        .attr("x", function(d) { return x(d.year)-10; })
        .attr("y", function(d) { return y(d.meta); })
        .attr("width", x.bandwidth()/2)
        .transition()
        .ease(d3v4.easeLinear)
        .duration(400)
        .delay(function (d, i) {
            return i * 50;
        })
        .attr("height", function(d) { return height - y(d.meta); });

    g.selectAll(".bar3")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar3")
        .on("mouseover", onMouseOver3) //Add listener for the mouseover event
        .on("mouseout", onMouseOut3)   //Add listener for the mouseout event
        .attr("x", function(d) { return x(d.year)+30; })
        .attr("y", function(d) { return y(d.twitt); })
        .attr("width", x.bandwidth()/2)
        .transition()
        .ease(d3v4.easeLinear)
        .duration(400)
        .delay(function (d, i) {
            return i * 50;
        })
        .attr("height", function(d) { return height - y(d.twitt); });

});

// d3v4.csv("global_ad_revenue.csv", function(error, data) {
//     if (error) {
//         throw error;
//     }
//
//     x.domain(data.map(function(d) { return d.year; }));
//     y.domain([0, d3v4.max(data, function(d) { return d.value; })]);
//
//     g.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3v4.axisBottom(x))
//         .append("text")
//         .attr("y", height - 280)
//         .attr("x", width/2)
//         .attr("text-anchor", "end")
//         .attr("stroke", "black")
//         .text("Year");
//
//     // g.append("g")
//     //     .call(d3v4.axisLeft(y).tickFormat(function(d){
//     //         return "$" + d;
//     //     }).ticks(10))
//     //     .append("text")
//     //     .attr("transform", "rotate(-90)")
//     //     .attr("y", 6)
//     //     .attr("dy", "-5.1em")
//     //     .attr("text-anchor", "end")
//     //     .attr("stroke", "black")
//     //     .text("Stock Price");
//
//     g.selectAll(".bar")
//         .data(data)
//         .enter().append("rect")
//         .attr("class", "bar")
//         .on("mouseover", onMouseOver2) //Add listener for the mouseover event
//         .on("mouseout", onMouseOut2)   //Add listener for the mouseout event
//         .attr("x", function(d) { return x(d.year)-10; })
//         .attr("y", function(d) { return y(d.value); })
//         .attr("width", x.bandwidth()/2)
//         .transition()
//         .ease(d3v4.easeLinear)
//         .duration(400)
//         .delay(function (d, i) {
//             return i * 50;
//         })
//         .attr("height", function(d) { return height - y(d.value); });
//
// });




//mouseover event handler function
function onMouseOver(d, i) {
    d3v4.select(this).attr('class', 'highlight');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2 + 5)
        .attr("y", function(d) { return y(d.meta)-10; })
        .attr("height", function(d) { return height - y(d.meta) + 10; });

    g.append("text")
        .attr('class', 'val')
        .attr('x', function() {
            return x(d.year);
        })
        .attr('y', function() {
            return y(d.meta) - 15;
        })
        .text(function() {
            return [ 'Meta: $' +d.meta + 'b'];  // Value of the text
        });
}

//mouseout event handler function
function onMouseOut(d, i) {
    // use the text label class to remove label on mouseout
    d3v4.select(this).attr('class', 'bar');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2)
        .attr("y", function(d) { return y(d.meta); })
        .attr("height", function(d) { return height - y(d.meta); });

    d3v4.selectAll('.val')
        .remove()
}

function onMouseOver2(d, i) {
    d3v4.select(this).attr('class', 'highlight');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2 + 5)
        .attr("y", function(d) { return y(d.google) - 10; })
        .attr("height", function(d) { return height - y(d.google) + 10; });

    g.append("text")
        .attr('class', 'val')
        .attr('x', function() {
            return x(d.year);
        })
        .attr('y', function() {
            return y(d.google) - 15;
        })
        .text(function() {
            return [ 'Google: $' +d.google + 'b'];  // Value of the text
        });
}

//mouseout event handler function
function onMouseOut2(d, i) {
    // use the text label class to remove label on mouseout
    d3v4.select(this).attr('class', 'bar2');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2)
        .attr("y", function(d) { return y(d.google); })
        .attr("height", function(d) { return height - y(d.google); });

    d3v4.selectAll('.val')
        .remove()
}


function onMouseOver3(d, i) {
    d3v4.select(this).attr('class', 'highlight');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2 + 5)
        .attr("y", function(d) { return y(d.twitt) - 10; })
        .attr("height", function(d) { return height - y(d.twitt) + 10; });

    g.append("text")
        .attr('class', 'val')
        .attr('x', function() {
            return x(d.year);
        })
        .attr('y', function() {
            return y(d.twitt) - 15;
        })
        .text(function() {
            return [ 'Twitter: $' +d.twitt + 'b'];  // Value of the text
        });
}

//mouseout event handler function
function onMouseOut3(d, i) {
    // use the text label class to remove label on mouseout
    d3v4.select(this).attr('class', 'bar3');
    d3v4.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth()/2)
        .attr("y", function(d) { return y(d.twitt); })
        .attr("height", function(d) { return height - y(d.twitt); });

    d3v4.selectAll('.val')
        .remove()
}


// document.getElementById("d3v4v4VarVer").innerText = d3v4v4.version;

// var svg = d3v4v4.select("#svg_barchart"),
//     margin = 200,
//     width = svg.attr("width") - margin,
//     height = svg.attr("height") - margin;
//
// var xScale = d3v4v4.scaleBand().range ([0, width]).padding(0.4),
//     yScale = d3v4v4.scaleLinear().range ([height, 0]);
//
// var g = svg.append("g")
//     .attr("transform", "translate(" + 100 + "," + 100 + ")");
//
// d3v4v4.csv("XYZ.csv", function(error, data) {
//     if (error) {
//         throw error;
//     }
//
//     xScale.domain(data.map(function(d) { return d.year; }));
//     yScale.domain([0, d3v4v4.max(data, function(d) { return d.value; })]);
//
//     g.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3v4v4.axisBottom(xScale));
//
//     g.append("g")
//         .call(d3v4v4.axisLeft(yScale).tickFormat(function(d){
//             return "$" + d;
//         }).ticks(10))
//         .append("text")
//         .attr("y", 6)
//         .attr("dy", "0.71em")
//         .attr("text-anchor", "end")
//         .text("value");
//
//     g.selectAll(".bar")
//         .data(data)
//         .enter().append("rect")
//         .attr("class", "bar")
//         .attr("x", function(d) { return xScale(d.year); })
//         .attr("y", function(d) { return yScale(d.value); })
//         .attr("width", xScale.bandwidth())
//         .attr("height", function(d) { return height - yScale(d.value); });
//
//     svg.append("text")
//         .attr("transform", "translate(100,0)")
//         .attr("x", 50)
//         .attr("y", 50)
//         .attr("font-size", "24px")
//         .text("XYZ Foods Stock Price")
//
//     g.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3v4v4.axisBottom(xScale))
//         .append("text")
//         .attr("y", height - 250)
//         .attr("x", width - 100)
//         .attr("text-anchor", "end")
//         .attr("stroke", "black")
//         .text("Year");
//
//     g.append("g")
//         .call(d3v4v4.axisLeft(yScale)
//             .tickFormat(function(d){
//                 return "$" + d;
//             }).ticks(10))
//         .append("text")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", "-5.1em")
//         .attr("text-anchor", "end")
//         .attr("stroke", "black")
//         .text("Stock Price");
// });