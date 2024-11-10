import { m } from "framer-motion";
import { memo } from "react";
import { cn } from "../../common/utils";

const BoxesBackground = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <m.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative z-[1]"
        >
          {cols.map((_, j) => (
            <m.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-gray-500/20 relative z-[1]"
            >
         
            </m.div>
          ))}
        </m.div>
      ))}
    </div>
  );
};

export default memo(BoxesBackground);
