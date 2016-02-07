//First up, constructor function for a chart: 

var piechart = function(){
  var container = document.getElementById("piechart");
  var chart = new Highcharts.Chart({
    chart: {
      plotBackgroundColor: null, 
      plotBorderWidth: null,
      plotShawdow: false,
      type: 'pie',
    },
    title: {
      text: "Pokemon types I've caught"
    },
    legend: {
      enabled: true, 
      
    }
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
      },
      series: [{
        showInLegend: true,
        name: "Type", 
        data: [
        {
          name: "Fire",
          y: 74,
          color: "#ffac33"
        },
        {
          name: "Water",
          y: 25,
          color: "#73b7ff",
          sliced: true
        },
        {
          name: "Grass",
          y: 1,
          color: "#00ba2f"
        }
        ]
      }],
  });
}
}