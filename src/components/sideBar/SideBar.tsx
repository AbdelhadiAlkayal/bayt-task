import DashboardTabs from "../dashboardTabs/DashboardTabs";
import { ArrowRightIcon, ArrowLeftIcon } from "@iconicicons/react";

import Logo from "../../assets/logo/bayt-logo.png";
import { Button } from "@lemonsqueezy/wedges";
import useBoolean from "../../hooks/useBoolean";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";

export interface ITabs {
  router: string;
  title: string;
}

const tabs: ITabs[] = [
  {
    router: "/",
    title: "Task one",
  },
  {
    router: "/task-two",
    title: "Task two",
  },
  {
    router: "/task-three",
    title: "Task three",
  },
];

const SideBar = () => {
  const { boolean, toggleHandler, setBoolean } = useBoolean();
  const isMediumDevice = useMediaQuery("only screen and  (max-width : 992px)");

  useEffect(() => {
    if (isMediumDevice) {
      setBoolean(true);
    }
  }, [isMediumDevice]);

  return (
    <div className="relative px-[14px] bg-primary_active">
      <div
        className={`${
          boolean ? `min-w-[30px]` : `min-w-[240px]`
        } bg-[#fff]  h-[100vh] flex flex-col px-4 border-e border-[#e9e9e9] transition-all duration-700 ease-in-out overflow-hidden`}
      >
        <div className="flex items-center justify-center my-12">
          <img
            src={Logo}
            alt="logo-bayt"
            className={`${
              boolean ? "w-[50px] h-[50px]" : "w-[80px] h-[80px]"
            } `}
          />

          {!isMediumDevice && (
            <Button
              onClick={toggleHandler}
              before={boolean ? <ArrowRightIcon /> : <ArrowLeftIcon />}
              variant="primary"
              className="absolute right-0 hover:bg-[#2783fcd8] p-[2px] "
            />
          )}
        </div>
        <DashboardTabs TABS={tabs} isClose={boolean} />
      </div>
    </div>
  );
};

export default SideBar;
