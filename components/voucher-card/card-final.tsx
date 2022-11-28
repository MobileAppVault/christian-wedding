import { FC, useState } from "react";
import { CardProps } from "./types";

export const Card_Final: FC<CardProps> = ({ submit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    submit(inputValue);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://media2.giphy.com/media/U2MB1tuNQ6C72zJays/giphy.gif?cid=ecf05e47mo6acljixua5w8wzn5ss43gegj0zvz2t4yu1s0ib&rid=giphy.gif&ct=g"></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Wow! Du bist es wirklich!</h2>
        <p>Ok, jetzt bekommst du dein Geschenk.</p>
        <p>
          Weil es aktuell nicht möglich ist Gutscheine auf booking.com zu
          erweben, schicken wir dir den Gutschein Betrag direkt auf dein Paypal
          Konto.
        </p>
        <p>Das ganze Team wünscht euch beiden alles gute! 😘</p>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your paypal address:</span>
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>
            I agree to share this
            <br /> gift with my wife.
          </button>
        </div>
      </div>
    </div>
  );
};
