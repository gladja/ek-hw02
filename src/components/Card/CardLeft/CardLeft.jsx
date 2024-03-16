export const CardLeft = () => {
  return (
    <>
      <div className="w-1/2 p-10 flex flex-col items-center bg-slate-100">
        <img
          className="mb-8"
          src="https://send.monobank.ua/img/logo_short.png"
          alt="monobank logo"
        />
        <div className="relative text-center">
          <img
            className="mb-8"
            src="https://send.monobank.ua/img/jar_bg.png"
            width={215}
          />
          <img
            className="absolute top-2 left-8"
            src="https://send.monobank.ua/img/jar/0.png"
            width={155}
          />
          <div className="absolute top-8 left-12">
            <img
              className="grig"
              src="https://send.monobank.ua/img/jar/grid.png"
              alt="grid"
            />
            <div className="absolute text-[10px] text-amber-800 font-extrabold bottom-36 left-4">
              25&nbsp;000
            </div>
            <div className="absolute text-[10px]  text-amber-800 font-extrabold bottom-20 left-1">
              12&nbsp;500
            </div>
            <div className="absolute text-[10px]  text-amber-800 font-extrabold bottom-1 left-2">
              0
            </div>
          </div>
          <p className="text-[14px] font-medium mb-1">Артем К. збирає</p>
          <p className="text-[22px] font-black mb-3">На ремонт медеваку</p>
        </div>
        <div className=" text-[14px] font-medium text-center">
          <p>
            Збираємо на ремонт медеваку для
            <br />
            4ОТБР танкова бригада
          </p>
          <br />
          <p>Ремонтуємо 2 автівки - Тойоту та Нісан.</p>
          <br />
          <p>У бригаді є наші земляки з Черкащини!</p>
          <br />
          <p>Ремонт авто треба на вчора! Прохання підтримати!</p>
        </div>

        <div className="mt-4 flex bg-white rounded-2xl	">
          <div className="flex gap-3 px-5 my-3 border-r">
            <img src="https://send.monobank.ua/img/collected.svg" />
            <div>
              <div className="text-[14px] font-normal text-gray-500 leading-4">
                Накопичено
              </div>
              <div className="text-4 font-medium">
                <span>0</span>&nbsp;₴
              </div>
            </div>
          </div>
          <div className="flex gap-3 px-5 my-3">
            <img src="https://send.monobank.ua/img/target.svg" />
            <div>
              <div className="text-[14px] font-normal text-gray-500 leading-4">
                Ціль
              </div>
              <div className="text-4 font-medium">25&nbsp;000&nbsp;₴</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
