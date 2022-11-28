import { FC, useState } from "react";
import { CardProps } from "./types";

export const Card_01: FC<CardProps> = ({ submit }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="booking.jpg" alt="Voucher" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Voucher!</h2>
        <p>Hier kannst du dir dein Gutschein abholen.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => submit("")}>
            Geb mir mein Gutschein
          </button>
        </div>
      </div>
    </div>
  );
};
