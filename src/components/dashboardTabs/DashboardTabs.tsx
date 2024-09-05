import { type FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ITabs } from "../sideBar/SideBar";

import { GridIcon } from "@iconicicons/react";

export interface IDashboardTabs {
  TABS: ITabs[];
  isClose: boolean;
}

const DashboardTabs: FC<IDashboardTabs> = ({ TABS, isClose }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activeTabHandler = (index: number, path: string) => {
    navigate(path);

    setActiveIndex(index);
  };

  useEffect(() => {
    const currentPath = pathname;

    const prevSelectedTabIndex = TABS.findIndex(
      (el) => el.router === currentPath
    );

    if (prevSelectedTabIndex !== -1) {
      setActiveIndex(prevSelectedTabIndex);
    }
  }, [pathname, TABS]);

  return (
    <div className="flex flex-col justify-center gap-4">
      {TABS.map((el, index) => (
        <div
          onClick={() => activeTabHandler(index, el.router)}
          key={el.router}
          className={`cursor-pointer flex items-center gap-1 text-[14px] rounded-md p-3
            ${
              activeIndex === index ? "bg-[#2784fc45] " : "text-[#afafaf]"
            } hover:bg-[#2784fc45]`}
        >
          <GridIcon
            className={
              activeIndex === index ? " text-primary" : "text-[#afafaf]"
            }
          />
          {!isClose && (
            <span
              className={
                activeIndex === index ? " text-primary" : "text-[#afafaf]"
              }
            >
              {el.title}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardTabs;
