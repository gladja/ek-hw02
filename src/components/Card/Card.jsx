import { Footer } from "../Footer";
import { CardLeft } from "./CardLeft";
import { CardRight } from "./CardRight";

export const Card = () => {
  return (
    <>
      <div className="flex bg-white rounded-3xl shadow-lg overflow-hidden  w-[990px]">
        <CardLeft />
        <CardRight />
      </div>
      <Footer />
    </>
  );
};
