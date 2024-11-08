import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setParticipantsCount } from "../redux/reducers/config-reducer";
import { useEffect, useState } from "react";
import { BgCustomize } from "../components/Background";

const HomePage = () => {
  const configState = useAppSelector((s) => s.config);
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setParticipantsCount(count + 1));
  }, [count]);

  return (
    <BgCustomize>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-40 items-center justify-center px-4"
      >
      <div className="text-2xl z-20 md:text-4xl lg:text-7xl font-bold bg-clip-text bg-no-repeat text-transparent py-4 animate-gradient">
        Vui lòng nhập thông tin vòng quay
        </div>
        <div className=" text-base md:text-4xl dark:text-neutral-200 py-4">
        Nhâp số
        </div>
      
      </motion.div>
    </BgCustomize>
  );
}
export default HomePage;
