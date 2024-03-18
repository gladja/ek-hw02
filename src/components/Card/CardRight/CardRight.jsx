import { useState } from "react";
import { validateColor } from "../../../helpers/validateColor";

export const CardRight = ({ value, setValue }) => {
  const [count, setCount] = useState(0);

  const changeValue = (e) => {
    const inputValue = Number(e.target.textContent);

    if (!isNaN(inputValue)) {
      setCount(inputValue);
    } else {
      setCount(0);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setValue(value + count);
    setCount(0);
    localStorage.setItem("value", JSON.stringify(value + count));

    const { name, comment } = e.target.elements;
    const valueData = {
      sum: count,
      name: name.value,
      comment: comment.value,
    };
    console.log(valueData);
    name.value = "";
    comment.value = "";
  };
  return (
    <>
      <div className=" w-1/2 p-10 flex flex-col items-center">
        <div className="card__wrap bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-[230px] w-full rounded-3xl mb-8">
          <div className="p-6 bg-white mt-[0.7%] mx-auto h-[97%] w-[98.5%] rounded-[22px]">
            <p className="text-[14px] font-semibold flex items-center justify-center">
              Сума поповнення
              <img
                src="https://send.monobank.ua/img/money.png"
                className="ml-2 mb-[-3px] h-4"
                alt="money"
              />
            </p>
            <div
              className={`text-5xl font-bold text-center py-8 relative 
              ${count === 0 && "text-gray-400"}
              ${validateColor(count) ? "text-red-300" : "text-black-400"} `}
            >
              <span
                className="focus:outline-none"
                contentEditable="true"
                value={count}
                onInput={changeValue}
              >
                {count}
              </span>
              &nbsp;₴
            </div>
            {validateColor(count) && (
              <p className="absolute left-[58%] mx-auto mt-[-24px] mb-[18px] text-gray-500 text-xs">
                Сумма повинна бути від 10 ₴ до 29 999 ₴
              </p>
            )}
            <div className="flex gap-4 justify-between">
              <button
                type="button"
                className="flex items-center justify-center border-[1px] border-gray-400 rounded-2xl min-h-10 w-full py-[3px] hover:bg-gray-200 text-[14px]"
                data-action="add_100"
                onClick={() => setCount(count + 100)}
              >
                +100&nbsp;₴
              </button>
              <button
                className="flex items-center justify-center border-[1px] border-gray-400 rounded-2xl min-h-10 w-full py-[3px] hover:bg-gray-200 text-[14px]"
                data-action="add_500"
                onClick={() => setCount(count + 500)}
              >
                +500&nbsp;₴
              </button>
              <button
                className="flex items-center justify-center border-[1px] border-gray-400 rounded-2xl min-h-10 w-full py-[3px]  hover:bg-gray-200 text-[14px]"
                data-action="add_1000"
                onClick={() => setCount(count + 1000)}
              >
                +1&nbsp;000&nbsp;₴
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleClick}>
          <div className="">
            <input
              name="name"
              className="w-[340px] h-[56px] px-4 mx-auto mb-4  border-[1px] border-gray-400 rounded-2xl placeholder:transition-all placeholder:translate-y-[0] hover:placeholder:translate-y-[-140%] hover:placeholder:text-xs focus-visible:outline-2 focus-visible:outline-black"
              placeholder="Ваше ім'я (необов'язково)"
            />
          </div>
          <div className="field card-holder">
            <input
              name="comment"
              className="w-[340px] h-[56px] px-4 mx-auto mb-4  border-[1px] border-gray-400 rounded-2xl placeholder:transition-all placeholder:translate-y-[0] hover:placeholder:translate-y-[-140%] hover:placeholder:text-xs focus-visible:outline-2 focus-visible:outline-black"
              placeholder="Коментар (необов'язково)"
            />
          </div>
          <button
            className={`btn__pay btn__mono flex justify-center items-center h-12 w-[340px] my-auto mb-4 rounded-lg ${
              validateColor(count) ? " bg-gray-300" : "bg-black"
            } overflow-hidden hover:bg-gray-600`}
            type="submit"
            disabled={validateColor(count)}
          >
            <img
              src="https://send.monobank.ua/img/mono_pay.svg"
              alt="monobank"
            />
          </button>
          <button
            className={`btn__pay btn__mono flex justify-center items-center h-12 w-[340px] my-auto mb-4 rounded-lg ${
              validateColor(count) ? " bg-gray-300" : "bg-black"
            } overflow-hidden hover:bg-gray-600`}
            type="submit"
            disabled={validateColor(count)}
          >
            <img
              src="https://gstatic.com/instantbuy/svg/dark_gpay.svg"
              alt="google pay"
              width={63}
            />
          </button>
        </form>

        <div className="w-[340px] mt-[10px] border-t">
          <div className="flex justify-center item-center py-4 cursor-pointer">
            <img
              src="https://send.monobank.ua/img/card.svg"
              alt="Credit card"
              className="mr-2"
            />
            <div className="text-red-600">Оплатити карткою</div>
          </div>
        </div>
      </div>
    </>
  );
};
