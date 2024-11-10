import { useId, useState } from "react";
import { Tab, TabList, Tabs } from "react-aria-components";
import Prize01Svg from "../assets/prize-01.svg";
import Prize02Svg from "../assets/prize-02.svg";
import Prize03Svg from "../assets/prize-03.svg";
import { cn } from "../common/utils";
import { useAppSelector } from "../redux/store";

const PlayPage = () => {
  const uid = useId();
  const configState = useAppSelector((s) => s.config);
  const [selectedTab, setSelectedTab] = useState<{ prize?: string }>({ prize: "3RD" });

  return (
    <div className="w-dvw h-dvh overflow-hidden">
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
                  index === 2 && "bg-amber-200/10",
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
    </div>
  );
};

export default PlayPage;
