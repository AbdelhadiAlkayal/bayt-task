import { useState } from "react";
import ChartTabs from "../../chartTabs/ChartTabs";
import Card from "../../card/Card";
import LineChartType from "../../chartType/LineChartType";
import BarChartType from "../../chartType/BarChartType";
import PieChartType from "../../chartType/PieChartType";

const TaskThree = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const typeChart = [
    {
      name: "line chart",
      component: <LineChartType />,
    },
    {
      name: "bar chart",
      component: <BarChartType />,
    },
    {
      name: "pie chart",
      component: <PieChartType />,
    },
  ];

  const tabs = typeChart.map((el) => el.name);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ChartTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <Card customClass="w-[440px]" center={true}>
        {typeChart[activeTab].component}
      </Card>
    </div>
  );
};

export default TaskThree;
