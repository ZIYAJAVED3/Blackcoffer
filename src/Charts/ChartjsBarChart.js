// ** Third Party Components
import { Bar } from "react-chartjs-2";
import lodash from "lodash";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ChartjsBarChart = ({
  heading,
  success,
  gridLineColor,
  labelColor,
  dataset
}) => {
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor
        },
        ticks: { color: labelColor }
      },
      y: {
        min: 0,
        max: 200,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };
  // ** Chart data
  const data = {
    labels: lodash.compact(Object.keys(dataset)),
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: success,
        borderColor: "transparent",
        borderRadius: { topRight: 15, topLeft: 15 },
        data: Object.values(dataset)
      }
    ]
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">{heading}</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "400px" }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsBarChart;
