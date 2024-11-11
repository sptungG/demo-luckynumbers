import NumberFlow from "@number-flow/react";
import { MinusIcon, PencilIcon, PlusIcon, XIcon } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";
import { cn } from "../../common/utils";
import { useState } from "react";

type TParticipantsCountInputFormProps = { value?: number; onChange?: (value: number) => void; classNameNumber?: string, classNameActions?: string };

const ParticipantsCountInputForm = ({ value, onChange, classNameNumber, classNameActions }: TParticipantsCountInputFormProps) => {
  const [openEditInput, setOpenEditInput] = useState(false);
  return (
    <NumberField value={value} onChange={onChange} minValue={0} step={10} isWheelDisabled className={cn("inline-flex relative items-center w-fit")}>
      <NumberFlow value={value} className={cn("h-full text-8xl text-center w-full text-amber-600", classNameNumber)} />

      <Group className={cn("flex flex-col absolute -right-10 top-1/2 -translate-y-1/2 translate-x-full", classNameActions)}>
        <Label className="hidden"></Label>
        <Button slot="increment">
          <PlusIcon />
        </Button>
        <Button slot="decrement">
          <MinusIcon />
        </Button>

        <div className="relative">
          <Button slot={null} onPress={() => setOpenEditInput(true)} className={cn(openEditInput && "text-amber-600 fill-amber-300")}>
            <PencilIcon className="size-5" />
          </Button>

          <div
            className={cn(
              "flex items-center justify-center absolute right-0 -bottom-4 bg-white outline outline-1 outline-amber-500/50 rounded-full overflow-hidden text-amber-500 shadow-md",
              !openEditInput && "hidden"
            )}
          >
            <Input className="w-[100px] text-center px-1 py-1 pr-4" />
            <Button slot={null} onPress={() => setOpenEditInput(false)} className="flex-center size-8 absolute right-0 inset-center-y">
              <XIcon className="size-6" />
            </Button>
          </div>
        </div>
      </Group>
    </NumberField>
  );
};

export default ParticipantsCountInputForm;
