import { FC, useState } from "react";
import { CardProps } from "./types";

export const Card_01: FC<CardProps> = ({ submit }) => {
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="booking.jpg" alt="Voucher" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Voucher!</h2>
        <p>Hier kannst du dir deinen Gutschein abholen.</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-block"
            onClick={() => submit("")}
          >
            GEBT MIR MEINEN GUTSCHEIN
          </button>
        </div>
      </div>
    </div>
  );
};
