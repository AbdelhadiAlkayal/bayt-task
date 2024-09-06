import { AtSignIcon, EditIcon } from "@iconicicons/react";

const infos = [
  {
    title: "Division",
    info: "Technology",
  },
  {
    title: "Reporting to",
    info: "Yousef Sawalha",
  },
  {
    title: "Joining Date",
    info: "25/09/2015",
  },
  {
    title: "Offered Salary",
    info: "740 JD",
  },
];

const InfoWork = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center gap-2">
        <AtSignIcon className="w-[40px] h-[40px] text-green-500" />
        <span className="text-black font-bold">{`Hired`}</span>
      </div>
      <div className="flex-grow flex items-center gap-3">
        {infos.map((info, index) => (
          <div key={index} className="flex items-center flex-col gap-2">
            <span className="text-[13px] text-gray-500">{info.title}</span>
            <span className="text-[14px] text-black">{info.info}</span>
          </div>
        ))}
      </div>
      <EditIcon className="w-[30px] h-[30px] text-gray-500" />
    </div>
  );
};

export default InfoWork;
