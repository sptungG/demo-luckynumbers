import NumberFlow from "@number-flow/react";
import { cn, getRandomInt } from "../../common/utils";
import { useInterval } from "../../hooks/useInterval";
import { useState } from "react";

type TRandomNumberProps = { className?: string };

const RandomNumber = ({ className }: TRandomNumberProps) => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(getRandomInt(0, 1000));
  }, 1000);
  return (
    <NumberFlow
      value={getRandomInt(0, 1000)}
      isolate
      className={cn("px-6 bg-white rounded border h-14 flex-center z-10 text-2xl", className)}
    ></NumberFlow>
  );
};

export default RandomNumber;
