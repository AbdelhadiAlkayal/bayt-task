import {
  TagIcon,
  EditIcon,
  LinkIcon,
  RowsIcon,
  FolderIcon,
  BoxIcon,
} from "@iconicicons/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@lemonsqueezy/wedges";

interface IconObject {
  icon: JSX.Element;
}

interface ITools {
  title: string;
  icons: IconObject[];
}

const tools: ITools[] = [
  {
    title: "Annotate",
    icons: [
      { icon: <TagIcon className="text-[13px] text-primary" /> },
      { icon: <EditIcon className="text-[13px] text-primary" /> },
      { icon: <LinkIcon className="text-[13px] text-primary" /> },
      { icon: <RowsIcon className="text-[13px] text-primary" /> },
    ],
  },
  {
    title: "Manage",
    icons: [
      { icon: <FolderIcon className="text-[13px] text-primary" /> },
      { icon: <BoxIcon className="text-[13px] text-primary" /> },
    ],
  },
];

const Header = () => {
  return (
    <div className="w-full bg-white ">
      <div
        className={`flex flex-col md:flex-row md:px-20 lg:px-28 md:justify-between md:items-center`}
      >
        <div className="flex flex-col md:flex-row gap-2 border-s border-gray-300">
          {tools.map((el, index) => (
            <div
              key={index}
              className="p-4 flex flex-col border-e gap-2 border-gray-300"
            >
              <h4 className="text-[14px] font-semibold ml-[7px]">{el.title}</h4>
              <div className="flex gap-4 mr-2">
                {el.icons.map((icon, index) => (
                  <span key={index}>{icon.icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 border-s border-gray-300">
          <div className="flex flex-col w-[200px] gap-2 p-4">
            <span className="text-gray-500 text-[14px]">{`Set Hiring Stage`}</span>
            <Select>
              <SelectTrigger />
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="item-1">Item 1</SelectItem>
                  <SelectItem value="item-2">Item 2</SelectItem>
                  <SelectItem value="item-3">Item 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
