import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="bg-[#fff] w-[400px] h-auto rounded-lg shadow-lg shadow-black/30">
      <div className="h-full p-5 flex flex-col  gap-4">{children}</div>
    </div>
  );
};

export default Card;
