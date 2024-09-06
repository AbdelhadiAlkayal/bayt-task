import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  customClass?: string;
  center?: boolean;
  grow?: boolean;
}

const Card = ({ children, customClass, center, grow }: ICard) => {
  return (
    <div
      className={`${customClass}  ${
        grow ? "flex-grow" : ""
      } bg-[#fff]  h-auto rounded-lg shadow-lg shadow-black/30`}
    >
      <div
        className={`h-full p-5 flex flex-col ${
          center ? "justify-center items-center" : ""
        }  gap-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
