var skills_dataset = {
    "Developer":[
        {"Python":4},
        {"SQL":4},
        {"Java":4},
        {"Javascript":4},
        {"HTML":3},
        {"CSS":3},
        {"Bootstrap":4}
    ],
    "Security Analyst skills":[
        {"Python":4},
        {"Web VA/PT":4},
        {"Data Carving":3},
        {"WebScraping":3},
        {"SocialAnalytics":4},
        {"D3.js":4},
    ]
};

var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

var radiusScale = d3.scaleSqrt();

var dev_simulation = d3.forceSimulation()
.force("x",d3.forceX(width/3).strength(0.05))
.force("y",d3.forceY(height/2).strength(0.15))
;

var data_simulation = d3.forceSimulation()
.force("x",d3.forceX(2*width/3).strength(0.05))
.force("y",d3.forceY(height/2).strength(0.15))
;

var rMin;
var rMax;
// create a function to identify min, max values of a column in data.csv which in turn
// assigns the results to the variables created above

function findMinAndMax(dataColumn) {
    rMin = d3.min(dataset, function (d) { return (d[dataColumn]) });
    rMax = d3.max(dataset, function (d) { return (d[dataColumn]) });
};

radiusScale.range(10,50);

radiusScale.domain(0,5);

var circles_selection = svg.selectAll(".dev_skill")
                        .data(skills_dataset["Development"])
                        .enter()


var circles = circles_selection.append("circle")
                .attr("class","dev_skill")
                .attr("r",function(d){
                    // console.log(d[feature],radiusScale(d[feature]))
                    var keys = Object.keys(d);
                    var k = keys[0];
                    return radiusScale(d[feature]);
                })
                .attr("fill",d=>`url(#${d['state_name']})`)
                .attr("fillOpacity","0.5")
                .attr("stroke","lightblue")
                .attr("stroke-width","2")
