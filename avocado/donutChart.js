var totals = [
    {
        title: "Proteine",
        value: 5,
        all: 100
    },
    {
        title: "Kohlenhydrate",
        value: 35,
        all: 100
    },
    {
        title: "Fett",
        value: 60,
        all: 100
    }
];

//female
var femaleData = [
    {
        title: "Proteine",
        value: 40,
        all: 100
    },
    {
        title: "Kohlenhydrate",
        value: 10,
        all: 100
    },
    {
        title: "Fett",
        value: 50,
        all: 100
    }
];

//male
var maleData = [
    {
        title: "Proteine",
        value: 5,
        all: 100
    },
    {
        title: "Kohlenhydrate",
        value: 20,
        all: 100
    },
    {
        title: "Fett",
        value: 75,
        all: 100
    }
];

var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;
var donutWidth = 75;
var color = d3.scaleOrdinal()
    .range(["#53783b", "#b3c656", "#fce198"]);

var svg = d3.select('#donut')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

var pie = d3.pie()
    .value(function (d) {
        return d.value;
    })
    .sort(null);

var legendRectSize = 13;
var legendSpacing = 7;

var donutTip = d3.select("body").append("div")
    .attr("class", "donut-tip")
    .style("opacity", 0);

var path = svg.selectAll('path')
    .data(pie(totals))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function (d, i) {
        return color(d.data.title);
    })
    .attr('transform', 'translate(0, 0)')
    .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85');
        donutTip.transition()
            .duration(50)
            .style("opacity", 1);
        let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
        donutTip.html(num)
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");

    })
    .on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1');
        donutTip.transition()
            .duration('50')
            .style("opacity", 0);
    });


var legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'circle-legend')
    .attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing;
        var offset = height * color.domain().length / 2;
        var horz = -2 * legendRectSize - 13;
        var vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
    });

legend.append('circle')
    .style('fill', color)
    .style('stroke', color)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', '.5rem');

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function (d) {
        return d;
    });

function change(data) {
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        }).sort(null)(data);

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;

    path = d3.select("#donut")
        .selectAll("path")
        .data(pie); // Compute the new angles
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
    path.transition().duration(500).attr("d", arc); // redrawing the path with a smooth transition
}

d3.select("button#everyone")
    .on("click", function () {
        change(totals);
    })
d3.select("button#women")
    .on("click", function () {
        change(femaleData);
    })
d3.select("button#men")
    .on("click", function () {
        change(maleData)
    })