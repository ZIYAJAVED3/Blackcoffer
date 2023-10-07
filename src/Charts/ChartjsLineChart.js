// ** Third Party Components
import { Line } from "react-chartjs-2";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ChartjsLineChart = ({
  labelColor,
  gridLineColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary,
  dataset,
  dataset2
}) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      },
      y: {
        min: 0,
        max: 20,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      }
    },
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          boxWidth: 10,
          marginBottom: 25,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  };

  // ** Chart Data
  const data = {
    labels: Object.keys(dataset),
    datasets: [
      {
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.intensity),
            0
          );
          return sumOfAges / innerArray.length;
        }),
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "Intensity",
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: lineChartDanger,
        pointBorderColor: "transparent",
        backgroundColor: lineChartDanger,
        pointHoverBackgroundColor: lineChartDanger
      },
      {
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.relevance),
            0
          );
          return sumOfAges / innerArray.length;
        }),
        fill: false,
        tension: 0.5,
        label: "Relevance",
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: "transparent",
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary
      },
      {
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.likelihood),
            0
          );
          return sumOfAges / innerArray.length;
        }),
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "Likelihood",
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: warningColorShade,
        backgroundColor: warningColorShade,
        pointBorderColor: warningColorShade,
        pointHoverBackgroundColor: warningColorShade
      }
    ]
  };

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      }
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <div>
          <CardTitle className="mb-75" tag="h4">
            Country Wise Intensity, Relevance & Likelihood
          </CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: "450px" }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsLineChart;
