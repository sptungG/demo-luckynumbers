import { useAppDispatch, useAppSelector } from "../redux/store";
import { setParticipantsCount } from "../redux/reducers/config-reducer";
import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "../components/Background";

const HomePage = () => {
  const configState = useAppSelector((s) => s.config);
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setParticipantsCount(count + 1));
  }, [count]);

  return (
    <BackgroundBeamsWithCollision>
      <div className="text-2xl z-20 md:text-4xl lg:text-7xl font-bold bg-clip-text bg-no-repeat text-transparent py-4 animate-gradient">
        <span>Vui lòng nhập thông tin vòng quay</span>
      </div>
      <div>Nhap số</div>
    </BackgroundBeamsWithCollision>
  );
};

export default HomePage;
