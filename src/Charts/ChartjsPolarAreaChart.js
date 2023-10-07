// ** Third Party Components
import { PolarArea } from "react-chartjs-2";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardBody
} from "reactstrap";

const ChartjsPolarAreaChart = (props) => {
  // ** Props
  const { labelColor } = props;

  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: 45
      }
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  };

  function generateRandomColor() {
    // Generate three random numbers between 0 and 255.
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Combine the three numbers into a hexadecimal string.
    const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return hexColor;
  }

  function generateRandomColorArray(numberOfColors) {
    // Create an empty array.
    const randomColors = [];

    // Generate a random color and push it to the array.
    for (let i = 0; i < numberOfColors; i++) {
      const randomColor = generateRandomColor();
      randomColors.push(randomColor);
    }

    // Return the array of random colors.
    return randomColors;
  }
  // ** Chart Data
  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        borderWidth: 0,
        label: "Posts",
        data: Object.values(props.data),
        backgroundColor: generateRandomColorArray(
          Object.keys(props.data).length
        )
      }
    ]
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">No of posts region wise</CardTitle>
        <CardSubtitle>With Region Wise Filter</CardSubtitle>
      </CardHeader>
      <CardBody>
        <PolarArea data={data} options={options} height={350} />
      </CardBody>
    </Card>
  );
};

export default ChartjsPolarAreaChart;
