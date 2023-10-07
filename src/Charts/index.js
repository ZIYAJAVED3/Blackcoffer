// ** React Imports
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Deom Charts
import BarChart from "./ChartjsBarChart";
import LineChart from "./ChartjsLineChart";
import PolarAreaChart from "./ChartjsPolarAreaChart";
import HorizontalBarChart from "./ChartjsHorizontalBar";

// ** Third Party Components
import "chart.js/auto";

const ChartJS = () => {
  const [data, setData] = useState();
  // ** Context, Hooks & Vars
  const labelColor = "#b4b7bd",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    successColorShade = "#28dac6";

  useEffect(() => {
    axios
      .get("https://t272xg-3001.csb.app/api/blogs")
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  return (
    <Fragment>
      <Row className="match-height">
        <Col xl="6" sm="12">
          <BarChart
            heading="Number of posts year wise"
            success={lineChartPrimary}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            dataset={data ? lodash.countBy(data, "start_year") : []}
          />
        </Col>
        <Col xl="6" sm="12">
          <BarChart
            heading="Number of posts region wise"
            success={successColorShade}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            dataset={
              data
                ? lodash.countBy(
                    data.filter((obj) => obj.region),
                    "region"
                  )
                : []
            }
          />
        </Col>
        <Col xl="6" sm="12">
          <HorizontalBarChart
            info={"#b4b7bd"}
            labelColor={labelColor}
            warning={"#FDAC34"}
            gridLineColor={gridLineColor}
            dataset={
              data
                ? lodash.groupBy(
                    data.filter((obj) => obj.topic),
                    "topic"
                  )
                : {}
            }
          />
        </Col>
        <Col xl="6" sm="12">
          <PolarAreaChart
            labelColor={labelColor}
            data={
              data
                ? lodash.countBy(
                    data.filter((obj) => obj.region),
                    "region"
                  )
                : {}
            }
          />
        </Col>
        <Col sm="12">
          <LineChart
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
            warningColorShade={warningColorShade}
            dataset={
              data
                ? lodash.groupBy(
                    data.filter((obj) => obj.country),
                    "country"
                  )
                : {}
            }
            dataset2={data ? data : []}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ChartJS;
