import { FC, useState } from "react";
import { CardProps } from "./types";

export const Card_03: FC<CardProps> = ({ submit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    submit(inputValue);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="text-4xl h-20 ">
        <p>🤖</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Mhhhh!</h2>
        <p>I still don't trust you.</p>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              What's the best company in the world?
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
          <button className="btn btn-primary" onClick={handleSubmit}>
            Send!
          </button>
        </div>
      </div>
    </div>
  );
};
