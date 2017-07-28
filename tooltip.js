var cont;
  function onMouseOver(d) {

    var childPath= document.getElementById('flights').childNodes;
    for(cont = 0; cont < childPath.length; cont++){
      if(childPath[cont].getAttribute('origin') != d.state && childPath[cont].getAttribute('destination') != d.state )
        childPath[cont].style.visibility = "hidden";
      if(childPath[cont].getAttribute('origin') == d.state || childPath[cont].getAttribute('destination') == d.state ){
        childPath[cont].style.stroke = "black";
        childPath[cont].style.strokeOpacity = "1";
      }
    };
   
  //-----------------------------------------------------------------------------


  
  var tooltip = d3.select("text#tooltip");
  var tooltip2 = d3.select("text#tooltip2");
  var tooltip3 = d3.select("text#tooltip3");

  // inizializza se mancante
  if (tooltip.size() < 1) {
    tooltip = d3.select("g#plot").append("text").attr("id", "tooltip");
    tooltip2 = d3.select("g#plot").append("text").attr("id", "tooltip2");
    tooltip3 = d3.select("g#plot").append("text").attr("id", "tooltip3");
  }

  tooltip.style("display", "none");
  onMouseMove(d);

  var bbox = {
    plot: d3.select("g#plot").node().getBBox()
  }

  tooltip.style("display", null);
  tooltip.style("visibility", "hidden");

  tooltip2.style("display", null);
  tooltip2.style("visibility", "hidden");

  tooltip3.style("display", null);
  tooltip3.style("visibility", "hidden");

  // set testo ed attributi del tooltip
  tooltip.text("state: "+d.name+" ("+d.state+")");
  tooltip2.text("flights in - flights out = "+d.total);

  tooltip.attr("text-anchor", "end");
  tooltip.attr("dx", -5);
  tooltip.attr("dy", -5);

  tooltip2.attr("text-anchor", "end");
  tooltip2.attr("dx", -5);
  tooltip2.attr("dy", 23);

  tooltip3.attr("text-anchor", "end");
  tooltip3.attr("dx", -5);
  tooltip3.attr("dy", 50);

  bbox.text = tooltip.node().getBBox();
  console.log(bbox.text.x);
  console.log(bbox.plot.x);

  if (bbox.text.x < 119 /*bbox.plot.x*/) {
    tooltip.attr("text-anchor", "start");
    tooltip.attr("dx", 5);

    tooltip2.attr("text-anchor", "start");
    tooltip2.attr("dx", 5);

    tooltip3.attr("text-anchor", "start");
    tooltip3.attr("dx", 5);
  }

  if (bbox.text.y < bbox.plot.y) {
    tooltip.attr("dy", bbox.text.height / 2);
    tooltip2.attr("dy", bbox.text.height / 2 + 26.5);
    tooltip3.attr("dy", bbox.text.height / 2 + 52.5);

    if (bbox.text.x < bbox.plot.x) {
      tooltip.attr("dx", 15);
      tooltip2.attr("dx", 15);
      tooltip3.attr("dx", 15);
    }
  }

  tooltip.style("visibility", "visible");
  tooltip2.style("visibility", "visible");
  tooltip3.style("visibility", "visible");
  d3.select(this).classed("selected", true);
}

function onMouseMove(d) {
  var coords = d3.mouse(d3.select("g#plot").node());

  d3.select("text#tooltip")
    .attr("x", coords[0])
    .attr("y", coords[1]);

  d3.select("text#tooltip2")
    .attr("x", coords[0])
    .attr("y", coords[1]);

  d3.select("text#tooltip3")
    .attr("x", coords[0])
    .attr("y", coords[1]);
}

function onMouseOut(d) {

  var pathVisible = document.getElementById('flights').childNodes;
  for(a=0; a<pathVisible.length; a++){
    pathVisible[a].style.visibility = "visible";
        pathVisible[a].style.stroke = "#252525";
        pathVisible[a].style.strokeOpacity = "0.4";
  }

  d3.select(this).classed("selected", false);
  d3.select("text#tooltip").style("visibility", "hidden");
  d3.select("text#tooltip2").style("visibility", "hidden");
  d3.select("text#tooltip3").style("visibility", "hidden");
}
