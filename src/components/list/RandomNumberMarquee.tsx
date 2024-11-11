import { range } from "rambda";
import React, { useId, useState } from "react";
import { cn, getRandoms, pad } from "../../common/utils";
import { useInterval } from "../../hooks/useInterval";
import Marquee from "./Marquee";

type TRandomNumberMarqueeProps = { children?: React.ReactNode };

const RandomNumberMarquee = ({ children }: TRandomNumberMarqueeProps) => {
  const uid = useId();

  const [list01, setList01] = useState<number[]>(getRandoms(range(0, 500), 20));
  const [list02, setList02] = useState<number[]>(getRandoms(range(500, 1000), 20));
  useInterval(() => {
    setList01(getRandoms(range(0, 500), 20));
    setList02(getRandoms(range(500, 1000), 20));
  }, 2000);

  return (
    <>
      <Marquee pauseOnHover={false} className="[--duration:100s]">
        {list01?.map((item, index) => (
          <div key={uid + "Marquee" + index} className={cn("px-6 bg-white text-amber-500/80 rounded shadow h-14 flex-center z-10 text-2xl")}>
            {pad(item, 4)}
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover={false} className="[--duration:100s]">
        {list02?.map((item, index) => (
          <div key={uid + "Marquee:reverse" + index} className={cn("px-6 bg-white text-amber-500/80 rounded shadow h-14 flex-center z-10 text-2xl")}>
            {pad(item, 4)}
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default RandomNumberMarquee;
