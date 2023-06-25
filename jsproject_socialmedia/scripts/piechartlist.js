var data_all = [
    {name: "Facebook", OVERALL:548, share: 20.70, genre:"OVERALL"},
    {name: "Instagram", OVERALL:916, share: 30.92, genre:"OVERALL"},
    {name: "Snapchat", OVERALL:86, share: 15.42, genre:"OVERALL"},
    {name: "Twitter", OVERALL:179, share: 13.65, genre:"OVERALL"},
    {name: "None", OVERALL:947, share: 19.31, genre:"OVERALL"},
    {name: "Facebook", FEMALE:222, share: 20.70, genre:"FEMALE"},
    {name: "Instagram", FEMALE:535, share: 30.92, genre:"FEMALE"},
    {name: "Snapchat", FEMALE:29, share: 15.42, genre:"FEMALE"},
    {name: "Twitter", FEMALE:57, share: 13.65, genre:"FEMALE"},
    {name: "None", FEMALE:271, share: 19.31, genre:"FEMALE"},
    {name: "Facebook", MALE:326, share: 20.70, genre:"MALE"},
    {name: "Instagram", MALE:380, share: 30.92, genre:"MALE"},
    {name: "Snapchat", MALE:56, share: 15.42, genre:"MALE"},
    {name: "Twitter", MALE:122, share: 13.65, genre:"MALE"},
    {name: "None", MALE:678, share: 19.31, genre:"MALE"},
    {name: "Facebook", UNIVERSITY:486, share: 20.70, genre:"UNIVERSITY"},
    {name: "Instagram", UNIVERSITY:729, share: 30.92, genre:"UNIVERSITY"},
    {name: "Snapchat", UNIVERSITY:68, share: 15.42, genre:"UNIVERSITY"},
    {name: "Twitter", UNIVERSITY:131, share: 13.65, genre:"UNIVERSITY"},
    {name: "None", UNIVERSITY:761, share: 19.31, genre:"UNIVERSITY"},
    {name: "Facebook", SINGLE:128, share: 20.70, genre:"SINGLE"},
    {name: "Instagram", SINGLE:245, share: 30.92, genre:"SINGLE"},
    {name: "Snapchat", SINGLE:25, share: 15.42, genre:"SINGLE"},
    {name: "Twitter", SINGLE:57, share: 13.65, genre:"SINGLE"},
    {name: "None", SINGLE:325, share: 19.31, genre:"SINGLE"},
    {name: "Facebook", NOT_SINGLE:53, share: 20.70, genre:"NOT_SINGLE"},
    {name: "Instagram", NOT_SINGLE:105, share: 30.92, genre:"NOT_SINGLE"},
    {name: "Snapchat", NOT_SINGLE:8, share: 15.42, genre:"NOT_SINGLE"},
    {name: "Twitter", NOT_SINGLE:22, share: 13.65, genre:"NOT_SINGLE"},
    {name: "None", NOT_SINGLE:124, share: 19.31, genre:"NOT_SINGLE"},

    // {name: "Facebook", NOT_SINGLE:53, share: 20.70, genre:"NOT_SINGLE"},
    // {name: "Instagram", NOT_SINGLE:105, share: 30.92, genre:"NOT_SINGLE"},
    // {name: "Snapchat", NOT_SINGLE:8, share: 15.42, genre:"NOT_SINGLE"},
    // {name: "Twitter", NOT_SINGLE:22, share: 13.65, genre:"NOT_SINGLE"},
    // {name: "None", NOT_SINGLE:124, share: 19.31, genre:"NOT_SINGLE"},

    {name: "None", NONE:12, share: 19.31, genre:"NONE"}];

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

var margin = {top: 50, right: 0, bottom: 30, left: 30},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Create data = list of groups
var allGroup = ["yellow", "blue", "red", "green", "purple", "black"]
var allGroup = ["OVERALL", "GENDER", "UNIVERSITY", "SOCIALSTATUS", "MALE", "FEMALE", "SINGLE", "NOT_SINGLE"]

// Initialize the button
var dropdownButton = d3v4.select("#div_SocialMediaShare")
    // .append('select')

// add the options to the button
dropdownButton // Add a button
    .selectAll('myOptions') // Next 4 lines add 6 options = 6 colors
    .data(allGroup)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button


var zeCircle_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", margin.right)
    .attr("y", margin.top-25)
    .attr("font-family", "Saira ExtraBold")
    .style("fill", "#222")
    .text("X Axis")

var zeCircle_TXT2= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", margin.right+300)
    .attr("y", margin.top+30)
    .attr("font-family", "Saira ExtraBold")
    .style("fill", "#222")
    .text("X Axis")
var zeCircle_TXT2X= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", margin.right+300)
    .attr("y", margin.top+50)
    .attr("font-family", "Saira ExtraBold")
    .style("fill", "#222")
    .text("X Axis")
var zeCircle_TXT2Y= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", margin.right+300)
    .attr("y", margin.top+70)
    .attr("font-family", "Saira ExtraBold")
    .style("fill", "#222")
    .text("Y Axis")

var zeSocial_Logos= d3v4.select("#social_logos")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://dlvrit.com/wp-content/uploads/2022/08/output-email-gif.gif')
    .attr('width', 300)
    .attr('height', 300)

// var zeSocial_Logos2= d3v4.select("#social_logos2")
//     // .append("svg")
//     .append('image')
//     .attr('xlink:href', 'https://www.ismartcom.com/hs-fs/hubfs/overengagement.gif?width=522&name=overengagement.gif')
//     .attr('width', 350)
//     .attr('height', 350)

var zeSocial_Logos2= d3v4.select("#social_logos2")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'downloads.png')  //https://thumbs.gfycat.com/CookedSparseFlickertailsquirrel-max-1mb.gif
    .attr('width', 250)
    .attr('height', 250)



// Initialize a circle
// var zeCircle_NONE= d3v4.select("#socialspace")
//     .append("svg")
//     .append("circle")
//     .attr("cx", 80)
//     .attr("cy", 30)
//     .attr("stroke", "black")
//     .style("fill", "yellow")
//     .attr("r", 10)
var zeCircle_NONE_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", 80-10)
    .attr("y", 30-10)
    .style("fill", "#222")
    .text("")

var zeCircle_NONE= d3v4.select("#socialspace")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://snobmonkey.com/wp-content/uploads/2019/04/no-social-media-01-300x300.png')
    .attr('width', 100)
    .attr('height', 100)

// var zeCircle_FB = d3v4.select("#socialspace")
//     .append("svg")
//     .append("circle")
//     .attr("cx", 100)
//     .attr("cy", 70)
//     .attr("stroke", "black")
//     .style("fill", "yellow")
//     .attr("r", 10)

var zeCircle_FB_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", 80-10)
    .attr("y", 30-10)
    .style("fill", "#222")
    .text("")

var zeCircle_FB= d3v4.select("#socialspace")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png')
    .attr('width', 100)
    .attr('height', 100)

// var zeCircle_INSTA = d3v4.select("#socialspace")
//     .append("svg")
//     .append("circle")
//     .attr("cx", 120)
//     .attr("cy", 70)
//     .attr("stroke", "black")
//     .style("fill", "yellow")
//     .attr("r", 30)

var zeCircle_INSTA_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", 80-10)
    .attr("y", 30-10)
    .style("fill", "#222")
    .text("")

var zeCircle_INSTA= d3v4.select("#socialspace")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png')
    .attr('width', 100)
    .attr('height', 100)

// var zeCircle_SNAP= d3v4.select("#socialspace")
//     .append("svg")
//     .append("circle")
//     .attr("cx", 110)
//     .attr("cy", 50)
//     .attr("stroke", "black")
//     .style("fill", "yellow")
//     .attr("r", 10)

var zeCircle_SNAP_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", 80-10)
    .attr("y", 30-10)
    .style("fill", "#222")
    .text("")

var zeCircle_SNAP= d3v4.select("#socialspace")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://www.pngall.com/wp-content/uploads/13/Snapchat-Logo-Transparent.png')
    .attr('width', 100)
    .attr('height', 100)

// var zeCircle_TWIT= d3v4.select("#socialspace")
//     .append("svg")
//     .append("circle")
//     .attr("cx", 80)
//     .attr("cy", 30)
//     .attr("stroke", "black")
//     .style("fill", "#1f9cf0")
//     .attr("r", 20)
//
var zeCircle_TWIT_TXT= d3v4.select("#socialspace")
    // .append("svg")
    .append("text")
    .attr("x", 80-10)
    .attr("y", 30-10)
    .style("fill", "#222")
    .text("tw")

var zeCircle_TWIT= d3v4.select("#socialspace")
    // .append("svg")
    .append('image')
    .attr('xlink:href', 'https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image')
    .attr('width', 100)
    .attr('height', 100)

// let scale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
//
// let axis = d3.axisBottom(scale);
//
// d3.select('#socialspace')
//     .call(axis);
// recover the option that has been chosen
var selectedOption = "OVERALL",
    selectedOption0 =  "OVERALL",
    selectedOptionx =  "MALE",
    selectedOptiony =  "FEMALE";
initupdate(selectedOption, selectedOption0, selectedOptionx, selectedOptiony)

// A function that update the color of the circle
function updateChart(mycolor, data0, datax, datay, selectedOption0, selectedOptionx, selectedOptiony) {
    var divratio= 0.1,
        divratiox = 2,
        divratioy = 2;//1000;

    let scale = d3.scaleLinear().domain([
        Math.min(datax["none"], datax["facebook"], datax["instagram"], datax["snapchat"], datax["twitter"])/divratiox,
        Math.max(datax["none"], datax["facebook"], datax["instagram"], datax["snapchat"], datax["twitter"])/divratiox
        ]).range([0, width*0.62]);
    let axis = d3.axisBottom(scale);

    let scaleY = d3.scaleLinear().domain([
        Math.min(datay["none"], datay["facebook"], datay["instagram"], datay["snapchat"], datay["twitter"])/divratioy,
        Math.max(datay["none"], datay["facebook"], datay["instagram"], datay["snapchat"], datay["twitter"])/divratioy
    ]).range([0, height*0.62]);
    let axisY = d3v4.axisLeft(scaleY);

    d3v4.select('#socialspaceaxis')
        .call(axis)
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Y Axis Label');


    console.log([Math.min(datax["none"], datax["facebook"], datax["instagram"], datax["snapchat"], datax["twitter"]),
                Math.max(datax["none"], datax["facebook"], datax["instagram"], datax["snapchat"], datax["twitter"]),
                Math.min(datay["none"], datay["facebook"], datay["instagram"], datay["snapchat"], datay["twitter"]),
                Math.max(datay["none"], datay["facebook"], datay["instagram"], datay["snapchat"], datay["twitter"]),
                ]);



    zeCircle_TXT
        .transition()
        .duration(1000)
        .attr("font-family", "Saira ExtraBold")
        // .attr("x", (width*0.50))
        // .attr("y", (margin.top))
        .text(selectedOptionx.toString())
    // .text(selectedOption0.toString() + "\n Xaxis:" + selectedOptionx.toString() + " Yaxis: " + selectedOptiony.toString())

    zeCircle_TXT2
        .transition()
        .duration(1000)
        .attr("font-family", "Saira ExtraBold")
        // .attr("x", (width*0.50))
        // .attr("y", (margin.top))
        .text("\n Bubble Size:" + selectedOption0.toString())
    zeCircle_TXT2X
        .transition()
        .duration(1000)
        .attr("font-family", "Saira ExtraBold")
        // .attr("x", (width*0.50))
        // .attr("y", (margin.top))
        .text("\n Xaxis:" + selectedOptionx.toString())
    zeCircle_TXT2Y
        .transition()
        .duration(1000)
        .attr("font-family", "Saira ExtraBold")
        // .attr("x", (width*0.50))
        // .attr("y", (margin.top))
        .text(" Yaxis: " + selectedOptiony.toString())

    zeCircle_NONE
        .transition()
        .duration(1000)
        .attr("x", (margin.right +datax["none"]/divratiox))
        .attr("y", (margin.top +datay["none"]/divratioy))
        .attr("width", Math.sqrt(data0["none"]/divratio))
        .attr("height", Math.sqrt(data0["none"]/divratio))
        // .style("fill", "#9d9d9d")

    zeCircle_NONE_TXT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["none"]/divratiox))
        .attr("y", (margin.top + datay["none"]/divratioy))
        .text(data0["none"])


    zeCircle_FB
        .transition()
        .duration(1000)
        .attr("x", (margin.right +datax["facebook"]/divratiox))
        .attr("y", (margin.top +datay["facebook"]/divratioy))
        .attr('width', Math.sqrt(data0["facebook"]/divratio))
        .attr('height', Math.sqrt(data0["facebook"]/divratio))
        // .style("fill", mycolor)

    zeCircle_FB_TXT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["facebook"]/divratiox))
        .attr("y", (margin.top + datay["facebook"]/divratioy))
        .text(data0["facebook"])

    zeCircle_INSTA
        .transition()
        .duration(1000)
        .attr("x", (margin.right +datax["instagram"]/divratiox))
        .attr("y", (margin.top +datay["instagram"]/divratioy))
        .attr("width", Math.sqrt(data0["instagram"]/divratio))
        .attr("height", Math.sqrt(data0["instagram"]/divratio))
        // .style("fill", mycolor)

    zeCircle_INSTA_TXT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["instagram"]/divratiox))
        .attr("y", (margin.top + datay["instagram"]/divratioy))
        .text(data0["instagram"])

    zeCircle_SNAP
        .transition()
        .duration(1000)
        .attr("x", (margin.right +datax["snapchat"]/divratiox))
        .attr("y", (margin.top +datay["snapchat"]/divratioy))
        .attr("width", Math.sqrt(data0["snapchat"]/divratio))
        .attr("height", Math.sqrt(data0["snapchat"]/divratio))
        // .style("fill", mycolor)

    zeCircle_SNAP_TXT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["snapchat"]/divratiox))
        .attr("y", (margin.top + datay["snapchat"]/divratioy))
        .text(data0["snapchat"])

    zeCircle_TWIT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["twitter"]/divratiox))
        .attr("y", (margin.top + datay["twitter"]/divratioy))
        .attr("width", Math.sqrt(data0["twitter"]/divratio))
        .attr("height", Math.sqrt(data0["twitter"]/divratio))
        // .style("fill", mycolor)

    zeCircle_TWIT_TXT
        .transition()
        .duration(1000)
        .attr("x", (margin.right + datax["twitter"]/divratiox))
        .attr("y", (margin.top + datay["twitter"]/divratioy))
        .text(data0["twitter"])
}






// When the button is changed, run the updateChart function
dropdownButton.on("change", function(d) {

    // recover the option that has been chosen
    var selectedOption = d3v4.select(this).property("value"),
        selectedOption0 = d3v4.select(this).property("value"),
        selectedOptionx = d3v4.select(this).property("value"),
        selectedOptiony = d3v4.select(this).property("value");

    initupdate(selectedOption, selectedOption0, selectedOptionx, selectedOptiony)
})


function initupdate(selectedOption, selectedOption0, selectedOptionx, selectedOptiony) {

    if (selectedOption == "OVERALL"){
        selectedOption0 = "OVERALL";
        selectedOptionx = "MALE";
        selectedOptiony = "FEMALE";
    }else if(selectedOption == "GENDER"){
        selectedOption0 = "OVERALL";
        selectedOptionx = "MALE";
        selectedOptiony = "FEMALE";
    }else if (selectedOption == "UNIVERSITY"){
        selectedOption0 = "UNIVERSITY";
        selectedOptionx = "MALE";
        selectedOptiony = "FEMALE";
    }else if (selectedOption == "SOCIALSTATUS"){
        selectedOption0 = "OVERALL";
        selectedOptionx = "SINGLE";
        selectedOptiony = "NOT_SINGLE";
    }else if (selectedOption == "MALE"){
        selectedOption0 = "MALE";
        selectedOptionx = "SINGLE";
        selectedOptiony = "NOT_SINGLE";
    }else if (selectedOption == "FEMALE"){
        selectedOption0 = "FEMALE";
        selectedOptionx = "SINGLE";
        selectedOptiony = "NOT_SINGLE";
    }else if (selectedOption == "SINGLE"){
        selectedOption0 = "SINGLE";
        selectedOptionx = "MALE";
        selectedOptiony = "FEMALE";
    }else if (selectedOption == "NOT_SINGLE"){
        selectedOption0 = "NOT_SINGLE";
        selectedOptionx = "MALE";
        selectedOptiony = "FEMALE";
    }

    console.log([selectedOption, selectedOption0, selectedOptionx, selectedOptiony])

    var data0 = {},
        datax = {},
        datay = {};
    data_all.forEach(function(item){
        // if (item.OVERALL in data) {
        //     // data[item.OVERALL].push(item.NONE);
        //     // if (item.name == "Facebook") {
        //     //     data["facebook"] = item.OVERALL;
        //     // } else {
        //     //     data["none"] = item.NONE;
        //     // }
        // } else
        // if (item.selectedOption) {
        if (item.name == "Facebook" && item.genre == selectedOption0) {  //Snapchat, Twitter, None
            data0["facebook"] = item[selectedOption0];
        } else if (item.name == "Instagram" && item.genre == selectedOption0) {
            data0["instagram"] = item[selectedOption0];
        } else if (item.name == "Snapchat" && item.genre == selectedOption0) {
            data0["snapchat"] = item[selectedOption0];
        } else if (item.name == "Twitter" && item.genre == selectedOption0) {
            data0["twitter"] = item[selectedOption0];
        } else if (item.name == "None" && item.genre == selectedOption0) {
            data0["none"] = item[selectedOption0];
        }

        if (item.name == "Facebook" && item.genre == selectedOptionx) {  //Snapchat, Twitter, None
            datax["facebook"] =  item[selectedOptionx];
        } else if (item.name == "Instagram" && item.genre == selectedOptionx) {
            datax["instagram"] =item[selectedOptionx];
        } else if (item.name == "Snapchat" && item.genre == selectedOptionx) {
            datax["snapchat"] = item[selectedOptionx];
        } else if (item.name == "Twitter" && item.genre == selectedOptionx) {
            datax["twitter"] = item[selectedOptionx];
        } else if (item.name == "None" && item.genre == selectedOptionx) {
            datax["none"] = item[selectedOptionx];
        }

        if (item.name == "Facebook" && item.genre == selectedOptiony) {  //Snapchat, Twitter, None
            datay["facebook"] =  item[selectedOptiony];
        } else if (item.name == "Instagram" && item.genre == selectedOptiony) {
            datay["instagram"] =item[selectedOptiony];
        } else if (item.name == "Snapchat" && item.genre == selectedOptiony) {
            datay["snapchat"] = item[selectedOptiony];
        } else if (item.name == "Twitter" && item.genre == selectedOptiony) {
            datay["twitter"] = item[selectedOptiony];
        } else if (item.name == "None" && item.genre == selectedOptiony) {
            datay["none"] = item[selectedOptiony];
        }
        // }
    });

    console.log(data0);
    console.log(datax);
    console.log(datay);
    // run the updateChart function with this selected option
    updateChart(selectedOption, data0, datax, datay, selectedOption0, selectedOptionx, selectedOptiony)
}