import checkers from "./checkers";
export default {
  mixins: [checkers],
  data(){
    return {
      hideChart: [],
      chartAnimation: true,
      chartOptions: {},
      chartData: [],
      chartLoaded: false
    }
  },
  methods: {
    initChart(name){
      let that = this;
      let timerId = setInterval(() => {
        if (this.isset(google)) {
          google.charts.load("visualization", "current", {
            packages: ["corechart", "controls"],
          });
          google.charts.setOnLoadCallback(this.drawCharts);
          clearInterval(timerId);
        }
      }, 100);

      this.chartData = [];

      if(name == 'calltracker') {
        let total_elements = this.sources.length * 2;

        $.each(this.totalArray, function (index, element) {
          let arr_to_push;
          if (index == 0) {
            arr_to_push = [];
  
            for (let i = 0; i <= total_elements; i++) {
              arr_to_push.push(element[i]);
            }
          } else {
            let dateArr = element[0].split("-");
            let month = dateArr[1] - 1;
  
            let dateObj = new Date(dateArr[0], month, dateArr[2]);
  
            arr_to_push = [dateObj];
  
            for (let z = 0; z <= total_elements; z++) {
              if (z != 0) {
                arr_to_push.push(element[z]);
              }
            }
          }
  
          that.chartData.push(arr_to_push);
        });
      } else if (name == 'videowidget') {

          this.chartData = this.chartRows;
          this.sources = this.chartRows[0];

      }
    },
    drawCharts() {

      let dashboardCallback = new google.visualization.Dashboard(
        document.getElementById("dashboardCallback")
      );

      google.visualization.events.addListener(dashboardCallback, 'ready', () => {
          this.chartLoaded = true;
      });

      let pointShapes = [
        "circle",
        "triangle",
        "square",
        "diamond",
        "star",
        "polygon",
      ];

      let seriesObj = {};
      let seriesObjForControlWrapper = {};

      for (let i = 0; i <= this.sources.length; i++) {
        if (i > 5) {
          seriesObj[i] = {
            pointShape: pointShapes[this.randomInteger(0, 5)],
          };
        } else {
          seriesObj[i] = { pointShape: pointShapes[i] };
        }

        if (this.hideChart.includes(i)) {
          seriesObjForControlWrapper[i] = { lineWidth: 0 };
          seriesObj[i].lineWidth = 0;
          seriesObj[i].pointsVisible = false;
          seriesObj[i].pointSize = 0;
          seriesObj[i].tooltip = false;
        } else {
          seriesObj[i].pointSize = 15;
        }
      }
      let controlCallback = new google.visualization.ControlWrapper({
        controlType: "ChartRangeFilter",
        containerId: "controlDashboardCallback",
        options: {
          // Filter by the date axis.
          filterColumnIndex: 0,
          ui: {
            chartType: "Line",
            chartOptions: {
              series: seriesObjForControlWrapper,
              backgroundColor: "#fff",
              chartArea: { width: "99%" },
              hAxis: {
                baselineColor: "none",
                format: "dd.MM.yyyy",
              },
            },
            // 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
            minRangeSize: 86400000,
          },
        },
        //   'state': {'range': {'start': from, 'end': endDay}}
      });
      let chartDashboardCallback = new google.visualization.ChartWrapper({
        chartType: "LineChart",
        containerId: "chartDashboardCallback",
        options: {
          backgroundColor: "#fff",
          // Use the same chart area width as the control for axis alignment.
          legend: "top",
          curveType: "function",
          chartArea: { width: "95%", height: 390 },
          hAxis: {
            format: "dd.MM.y",

            gridlines: {
              color: "#f0f5f9",
            },
          },
          vAxis: {
            format: "#",
            viewWindow: {
              min: 0,
            },
          },
          series: seriesObj,

          tooltip: { isHtml: true },
          animation: {
            startup: this.chartAnimation,
            duration: 1000,
            easing: "out",
          },
        },
      });

      dashboardCallback.bind(controlCallback, chartDashboardCallback);
      dashboardCallback.draw(this.chartData);
    },
    bindChartBlock(id){
      let that = this;
      let chartBlock = document.querySelector(id);
      if (chartBlock) {
        chartBlock.addEventListener("click", function (e) {
          if (e.target) {
            e.preventDefault();
          }
          
          let target = e.target;
          let parent = target.closest("svg");
          let childrens = parent.querySelectorAll(":scope > g");
          let text = target.closest("g").querySelector("text").innerHTML;

          let blockWithButtons = childrens[0];
          let buttons = blockWithButtons.querySelectorAll(":scope > g");

          if (buttons) {
            buttons.forEach((element, index) => {
              if (text == element.querySelector("text").innerHTML) {
                let arrIndex = that.hideChart.indexOf(index);
                that.chartAnimation = false;

                if (arrIndex > -1) {
                  that.hideChart.splice(arrIndex, 1);
                } else {
                  that.hideChart.push(index);
                }
                that.drawCharts();
              }
            });
          }
        });
      }
    }
  }
};