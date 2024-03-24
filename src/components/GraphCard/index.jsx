import React from "react";

import "./index.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5.0",
    uv: 4000,
    pv: 12,
    amt: 2400,
    yname: "16 feb",
  },
  {
    name: "6.0",
    uv: 3000,
    pv: 28,
    amt: 2210,
    yname: "17 feb",
  },
  {
    name: "6.5",
    uv: 2000,
    pv: 43,
    amt: 2290,
    yname: "18 feb",
  },
  {
    name: "7.0",
    uv: 2780,
    pv: 60,
    amt: 2000,
    yname: "19 feb",
  },
  {
    name: "7.5",
    uv: 1890,
    pv: 61,
    amt: 2181,
    yname: "20 feb",
  },
  {
    name: "8.0",
    uv: 2390,
    pv: 78,
    amt: 2500,
    yname: "21 feb",
  },
  {
    name: "8.5",

    pv: 92,
    amt: 2100,
    yname: "22 feb",
  },
];

function GraphCard() {
  return (
    <>
      <ResponsiveContainer
        className="hide-mobile"
        aspect={2 / 1.2}
        minWidth={300}
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: -15, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        className="hide-laptop"
        aspect={3 / 1.2}
        minWidth={300}
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: -15, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default GraphCard;
