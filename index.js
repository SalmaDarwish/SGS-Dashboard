var options = {
  series: [5180, 2220],
  chart: {
    type: "donut",
  },
  colors: ["#5c5173","#ffc404"],

  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          enabled: false,
        },
      },
    },
  ],
  plotOptions: {
    pie: {
        customScale: 0.8,
        donut: {
            size: '88%',
            labels:{
                show:true,
                name:{
                    show:true
                },
                total:{
                    show:true,
                    showAlways: true,
                    label:"Total Cashflow",
                    fontSize: '12px',
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontWeight: 600,
                    color: 'grey',
                },
                value: {
                    show: true,
                    fontSize: '2rem',
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontWeight: 800,
                    color: undefined,
                    offsetY: 16,
                  
                  },
            }
        },


    },
  },
    
     
    
  
  dataLabels:{
    enabled:false
  },
  
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
