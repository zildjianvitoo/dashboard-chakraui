import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My Balance",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#db86b2",
      borderColor: "#B57295",
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "#B57295",
      pointBorderColor: "#B57295",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#B57295",
      pointHoverBorderColor: "#B57295",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        2500, 2000, 4000, 3700, 7000, 6500, 9780, 6900, 10000, 11000, 10500,
        9999,
      ],
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      // beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MyChart = () => <Line data={data} options={options} />;

export default MyChart;
