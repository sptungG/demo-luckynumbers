import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setParticipantsCount } from "../redux/reducers/config-reducer";

const HomePage = () => {
  const configState = useAppSelector((s) => s.config);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(setParticipantsCount(5));
        }}
      >
        Add Participants
      </button>
      <pre>{JSON.stringify(configState, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
