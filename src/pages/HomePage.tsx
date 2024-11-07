import { useAppDispatch, useAppSelector } from "../redux/store";
import { setParticipantsCount } from "../redux/reducers/config-reducer";
import { useEffect, useState } from "react";

const HomePage = () => {
  const configState = useAppSelector((s) => s.config);
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setParticipantsCount(count + 1));
  }, [count]);

  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Participants
      </button>
      <pre>{JSON.stringify(configState, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
