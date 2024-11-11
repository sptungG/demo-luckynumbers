import { useId, useState } from "react";
import { Button } from "react-aria-components";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ParticipantsCountInputForm from "../components/forms/ParticipantsCountInputForm";
import PrizeConfigCountInputForm from "../components/forms/PrizeConfigCountInputForm";
import RandomNumberMarquee from "../components/list/RandomNumberMarquee";
import { useAppDispatch, useAppSelector } from "../redux/store";
import ShinyButton from "../components/button/ShinyButton";
import { cn } from "../common/utils";
import { setParticipantsCount, setPrizeConfig } from "../redux/reducers/config-reducer";
import GamblingChipsSvg from "../assets/gambling-chips.svg";
import SlotMachineSvg from "../assets/slot-machine.svg";
import Prize01Svg from "../assets/prize-01.svg";
import Prize02Svg from "../assets/prize-02.svg";
import Prize03Svg from "../assets/prize-03.svg";

const HomePage = () => {
  const uid = useId();
  const configState = useAppSelector((s) => s.config);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formMethods = useForm({
    defaultValues: {
      participantsCount: 1000,
      prizeConfig: [
        {
          type: "2ND",
          total: 50,
        },
        {
          type: "1ST",
          total: 10,
        },
        {
          type: "3RD",
          total: 150,
        },
      ],
    },
  });
  const prizeConfigMethods = useFieldArray({
    control: formMethods.control,
    name: "prizeConfig",
    keyName: "uid",
  });

  // const participantsCountWatch = formMethods.watch("participantsCount");

  const handleSubmitForm = formMethods.handleSubmit((formData) => {
    try {
      const mappedPrizeConfig = formData.prizeConfig.sort((a, b) => {
        if (a.type === "3RD") {
          return -1;
        } else if (b.type === "3RD") {
          return 1;
        } else if (a.type === "1ST") {
          return 1;
        } else if (b.type === "1ST") {
          return -1;
        } else {
          return 0;
        }
      });
      dispatch(setParticipantsCount(formData.participantsCount));
      dispatch(setPrizeConfig(mappedPrizeConfig));
      toast.success(`Let's start the game 🎉`);
      navigate("/play");
    } catch (error) {
      console.log("error:", error);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center h-dvh relative overflow-hidden w-dvw">
      <form id={uid + "form"} onSubmit={handleSubmitForm} className="flex flex-col justify-center items-center z-10">
        <div className="flex items-end justify-center mb-5">
          {prizeConfigMethods.fields.map((field, index) => {
            return (
              <div key={uid + field.uid + index} className="flex flex-col items-center justify-end w-1/3 min-w-[300px]">
                <div className="flex flex-col items-center">
                  {index === 0 && <Prize02Svg className="size-32" />}
                  {index === 1 && <Prize01Svg className="size-56" />}
                  {index === 2 && <Prize03Svg className="size-20" />}
                  <Controller
                    control={formMethods.control}
                    name={`prizeConfig.${index}.total`}
                    render={({ field }) => (
                      <PrizeConfigCountInputForm
                        value={field.value}
                        onChange={field.onChange}
                        classNameNumber={cn(index === 0 && "text-[#CACCCE]", index === 1 && "text-amber-200", index === 2 && "text-[#F48634]")}
                      />
                    )}
                  />
                  <div
                    className={cn(
                      "h-20 w-[300px] bg-gray-100",
                      index === 0 && "bg-[#CACCCE] h-24 rounded-l-lg",
                      index === 1 && "bg-amber-200 h-40 rounded-t-lg",
                      index === 2 && "bg-[#F48634] h-20 rounded-r-lg"
                    )}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <Controller
            control={formMethods.control}
            name="participantsCount"
            render={({ field }) => <ParticipantsCountInputForm value={field.value} onChange={field.onChange} />}
          />
          <div className="flex items-center -mt-2 gap-1">
            <span className="text-2xl text-amber-600">Người tham gia </span>
            <span className="text-2xl text-amber-600 font-[600]">giải thưởng</span>
          </div>
        </div>
      </form>

      <div className="relative flex min-h-[164px] w-full flex-col items-center justify-end overflow-hidden pb-5 z-0">
        <div className="absolute bottom-11 inline-flex w-fit flex-col items-center justify-center bg-white rounded-full z-20">
          <Button form={uid + "form"} type="submit" className="">
            <ShinyButton className="group relative font-mono font-[600] inline-flex min-h-24 items-center justify-center text-5xl">
              <div className="flex-center">
                <div className="text-white leading-[2] -mb-2 mr-5 uppercase">Bắt đầu ngay</div>
                <SlotMachineSvg className="size-20" />
              </div>
            </ShinyButton>
          </Button>
        </div>
        <RandomNumberMarquee />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>

      <div className="absolute flex h-full w-full overflow-hidden flex-center -z-10">
        <GamblingChipsSvg className="w-[200%] h-[200%] animate-[bounceY_5s_linear_infinite]" />
      </div>

      {/* <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
      {/* <BoxesBackground className="" /> */}
    </div>
  );
};

export default HomePage;
