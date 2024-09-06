interface IChartTabs {
  activeTab: number;
  tabs: string[];
  onTabChange: (tab: number) => void;
}

const ChartTabs = ({ activeTab, tabs, onTabChange }: IChartTabs) => {
  return (
    <div className="mx-auto my-10 w-[500px] h-full">
      <ul className="flex justify-between items-center gap-1">
        {tabs.map((el, index) => (
          <li
            key={index}
            onClick={() => onTabChange(index)}
            className={`border-b-[2px] cursor-pointer text-[14px] py-[1rem] flex-grow text-center ${
              activeTab === index
                ? "text-blue-400 border-primary border-b-[2px]"
                : "border-gray-400 hover:border-blue-300 text-gray-400 "
            }`}
          >
            <span
              className={` ${
                activeTab === index ? "opacity-100" : "text-light_light"
              }`}
            >
              {el}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartTabs;
