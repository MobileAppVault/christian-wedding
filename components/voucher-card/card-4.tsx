import { FC, useState } from "react";
import { CardProps } from "./types";

export const Card_04: FC<CardProps> = ({ submit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    submit(inputValue);
  };

  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://media0.giphy.com/media/EoH4Wpu8suiNTLpI6j/giphy.gif?cid=ecf05e47im1xyuoszcno1ni6r6iggjcaq92lvybwkmxyb3e6&rid=giphy.gif&ct=g"></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Ok!</h2>
        <p>
          This was good... because it makes a lot of fun here is another one.{" "}
        </p>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Which elastic search version was the first version we used (sorry
              I mean still using) in production?
            </span>
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
            Send!
          </button>
        </div>
      </div>
    </div>
  );
};
