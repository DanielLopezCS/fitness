import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { useInView } from "react-intersection-observer";
import { Chart, ArcElement } from "chart.js";

const AnimatedPieChart = () => {
  Chart.register(ArcElement);

  const [isChartVisible, setIsChartVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("\n IN VIEW");
      setIsChartVisible(true);
    }
  }, [inView]);

  const data = {
    labels: ["Red", "Green", "Blue", "Purple"],
    legend: {
      display: true,
      position: "right",
    },
    datasets: [
      {
        data: [80, 40, 30, 40],
        backgroundColor: ["#97E5AC", "#D2FFDE", "#FFCACA", "#F4FFB1"],
        hoverBackgroundColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
      },
    ],
  };

  const options = {
    animation: {
      duration: 2500,
    },
    plugins: {
      legend: {
        display: true, // Display legend (labels)
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };

  return (
    <div ref={ref} className="animated-pie-chart">
      {isChartVisible && <Pie data={data} options={options} />}
    </div>
  );
};

export default AnimatedPieChart;
