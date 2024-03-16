export const CardRight = () => {
  return (
    <>
      <div className="card__body">
        <div className="card__wrap">
          <div className="card__wrap-border">
            <p className="card__title">
              Сума поповнення
              <img
                src="https://send.monobank.ua/img/money.png"
                className="card__img"
                alt="money"
              />
            </p>
            <div className="card__value">
              <span className="card__value-sum">0</span>
              &nbsp;₴
            </div>
            <p className="card__value-warning">
              Сумма повинна бути від 10 ₴ до 29 999 ₴
            </p>
            <div className="card__btn">
              <button
                type="button"
                className="btn__value"
                data-action="add_100"
              >
                +100&nbsp;₴
              </button>
              <button className="btn__value" data-action="add_500">
                +500&nbsp;₴
              </button>
              <button className="btn__value" data-action="add_1000">
                +1&nbsp;000&nbsp;₴
              </button>
            </div>
          </div>
        </div>

        <form action="">
          <div className="card__input">
            <input
              className="card__input-value card__name"
              placeholder="Ваше ім'я (необов'язково)"
            />
          </div>
          <div className="field card-holder">
            <input
              className="card__input-value card__comment"
              placeholder="Коментар (необов'язково)"
            />
          </div>

          <button className="btn__pay btn__mono" type="submit">
            <img
              src="https://send.monobank.ua/img/mono_pay.svg"
              alt="monobank"
              height="26"
            />
          </button>
          <button className="btn__pay btn__gpay" type="submit">
            <img
              src="https://gstatic.com/instantbuy/svg/dark_gpay.svg"
              alt="google pay"
              height="26"
            />
          </button>
        </form>

        <div className="other__pay">
          <div className="other__pay-button">
            <img
              src="https://send.monobank.ua/img/card.svg"
              alt="Credit card"
              className="other__pay-icon"
            />
            <div className="other__pay-text">Оплатити карткою</div>
          </div>
        </div>
      </div>
    </>
  );
};
