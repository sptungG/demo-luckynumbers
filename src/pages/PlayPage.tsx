import { useId, useState } from "react";
import { Button, Tab, TabList, Tabs } from "react-aria-components";
import Prize01Svg from "../assets/prize-01.svg";
import Prize02Svg from "../assets/prize-02.svg";
import Prize03Svg from "../assets/prize-03.svg";
import WheelOnlineSvg from "../assets/wheel-online.svg";
import SlotMachineSvg from "../assets/slot-machine.svg";
import { cn } from "../common/utils";
import { useAppSelector } from "../redux/store";
import ShinyButton from "../components/button/ShinyButton";

const PlayPage = () => {
  const uid = useId();
  const configState = useAppSelector((s) => s.config);
  const [selectedTab, setSelectedTab] = useState<{ prize?: string }>({ prize: "3RD" });

  return (
    <div className="w-dvw h-dvh overflow-hidden flex-col flex relative">
      <Tabs selectedKey={selectedTab.prize} onSelectionChange={(value) => setSelectedTab({ prize: value as string })}>
        <TabList aria-label="Prize" className="flex flex-nowrap items-stretch">
          {configState.prizeConfig.map((item, index) => {
            const isSelected = item.type === selectedTab.prize;
            return (
              <Tab
                key={uid + "Tab" + index}
                id={item.type}
                className={cn(
                  "outline-none cursor-pointer",
                  isSelected ? "p-5 flex-[1_1_auto] min-w-0" : "w-28 shrink-0 p-5",
                  index === 0 && "bg-[#F48634]/10",
                  index === 1 && "bg-[#CACCCE]/10",
                  index === 2 && "bg-amber-200/10"
                )}
              >
                {index === 0 && <Prize03Svg className={cn("shrink-0", isSelected ? "size-20" : "size-16")} />}
                {index === 1 && <Prize02Svg className={cn("shrink-0", isSelected ? "size-20" : "size-16")} />}
                {index === 2 && <Prize01Svg className={cn("shrink-0", isSelected ? "size-20" : "size-16")} />}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>

      <div className="flex absolute w-full bottom-0 h-[calc(100%-120px)] -z-10">
        {configState.prizeConfig.map((item, index) => {
          const isSelected = item.type === selectedTab.prize;
          return (
            <div
              key={uid + "Prize" + index}
              className={cn(
                "",
                isSelected ? "p-5 flex-[1_1_auto] min-w-0" : "w-28 shrink-0 p-5",
                index === 0 && "bg-[#F48634]/10",
                index === 1 && "bg-[#CACCCE]/10",
                index === 2 && "bg-amber-200/10"
              )}
            ></div>
          );
        })}
      </div>

      <div
        className={cn(
          "absolute size-full flex flex-col items-center justify-center pr-56 -z-10",
          selectedTab.prize === "2ND" && "px-28",
          selectedTab.prize === "1ST" && "pl-56 pr-0"
        )}
      >
        <WheelOnlineSvg className="shrink-0 size-[1000px] -mr-10 opacity-25 animate-[bounceY_5s_linear_infinite]" />
      </div>

      <div
        className={cn(
          "absolute bottom-11 w-full flex items-center justify-center z-10 pr-56",
          selectedTab.prize === "2ND" && "px-28",
          selectedTab.prize === "1ST" && "pl-56 pr-0"
        )}
      >
        <Button form={uid + "form"} type="submit" className="bg-white rounded-full">
          <ShinyButton className="group relative font-mono font-[600] inline-flex min-h-24 items-center justify-center text-5xl">
            <div className="flex-center">
              <div className="text-white leading-[2] -mb-2 mr-5 uppercase">Bắt đầu ngay</div>
              <SlotMachineSvg className="size-20" />
            </div>
          </ShinyButton>
        </Button>
      </div>
    </div>
  );
};

export default PlayPage;
