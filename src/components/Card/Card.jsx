import { useState } from "react";
import { Footer } from "../Footer";
import { CardLeft } from "./CardLeft";
import { CardRight } from "./CardRight";

const valueLocal = JSON.parse(localStorage.getItem("value"));

export const Card = () => {
  const [value, setValue] = useState(() => {
    if (!valueLocal) {
      localStorage.setItem("value", "0");
      return 0;
    }
    return valueLocal;
  });

  return (
    <>
      <div className="flex bg-white rounded-3xl shadow-lg overflow-hidden  w-[990px]">
        <CardLeft value={value} />
        <CardRight setValue={setValue} value={value} />
      </div>
      <Footer />
    </>
  );
};
