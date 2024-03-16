export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between items-center mt-4 text-white w-[990px]">
          <div className="w-[300px] font-medium text-xs opacity-75">
            АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від 20.01.1994, у держреєстрі
            банків №226
          </div>
          <div className="flex gap-4 opacity-80">
            <button className="flex justify-center items-center px-4 border rounded-2xl	 bg-white/0 hover:bg-white/20 h-10 text-[14px] font-semibold ">
              <img
                className="mr-2"
                src="https://send.monobank.ua/img/cup.svg"
                alt="cup"
                width={16}
              />
              Провести розіграш
            </button>
            <button className="flex justify-center items-center px-4 border rounded-2xl	 bg-white/0 hover:bg-white/20 h-10 text-[14px] font-semibold">
              <img
                className="mr-2"
                src="https://send.monobank.ua/img/gamepad.svg"
                alt="joistic"
                width={16}
              />
              Віджет для стрімів
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
