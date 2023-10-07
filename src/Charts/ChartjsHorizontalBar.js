// ** Third Party Components
import { Bar } from "react-chartjs-2";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle
} from "reactstrap";

const ChartjsHorizontalBarChart = ({
  warning,
  gridLineColor,
  labelColor,
  info,
  dataset
}) => {
  // ** Chart Options
  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15
        }
      }
    },
    layout: {
      padding: { top: -4 }
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: gridLineColor,
          borderColor: "transparent"
        },
        ticks: { color: labelColor }
      },
      y: {
        grid: {
          display: false,
          borderColor: gridLineColor
        },
        ticks: { color: labelColor }
      }
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: { color: labelColor }
      }
    }
  };

  // ** Chart Data
  const data = {
    labels: Object.keys(dataset),
    datasets: [
      {
        maxBarThickness: 15,
        label: "Intensity",
        backgroundColor: warning,
        borderColor: "transparent",
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.intensity),
            0
          );
          return sumOfAges / innerArray.length;
        })
      },
      {
        maxBarThickness: 15,
        backgroundColor: "red",
        label: "Relevance",
        borderColor: "transparent",
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.relevance),
            0
          );
          return sumOfAges / innerArray.length;
        })
      },
      {
        maxBarThickness: 15,
        backgroundColor: "blue",
        label: "Likelihood",
        borderColor: "transparent",
        data: Object.values(dataset).map((innerArray) => {
          const sumOfAges = innerArray.reduce(
            (sum, object) => sum + Number(object.likelihood),
            0
          );
          return sumOfAges / innerArray.length;
        })
      }
    ]
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <div>
          <CardTitle tag="h4">
            Topics with intensity, relevance & likelihood
          </CardTitle>
          <CardSubtitle className="text-muted mb-25">
            With Intensity, Relevance & Likelihood Filter
          </CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: "655px" }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsHorizontalBarChart;
