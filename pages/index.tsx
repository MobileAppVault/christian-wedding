import Head from "next/head";
import { useState } from "react";
import { NavBar } from "../components/navbar";
import { Card_01 } from "../components/voucher-card/card-1";
import { Card_02 } from "../components/voucher-card/card-2";
import { Card_03 } from "../components/voucher-card/card-3";
import { Card_04 } from "../components/voucher-card/card-4";
import { Card_Final } from "../components/voucher-card/card-final";

export default function Home() {
  const [step, setStep] = useState(0);
  const handleSubmit = (value: string) => {
    if (step === 1) {
      if (value.toLowerCase() != "christian") {
        alert("NOPE! YOU ARE A ROBOT!");
        return;
      }
    }

    if (step === 2) {
      if (value.toLowerCase() != "ingram") {
        alert("NOPE! YOU ARE A ROBOT!");
        return;
      }
    }

    if (step === 3) {
      if (value.toLowerCase() != "1.2") {
        alert("NOPE! YOU ARE A ROBOT!");
        return;
      }
    }

    if (step === 4 && value && value != "") {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: value }),
      }).then((res) => {
        if (res.status === 200) {
          alert(
            "Merci, du hast dich erfolgreich für den Ingram IT Development Newsletter angemeldet!"
          );
        } else {
          alert("ERROR");
        }
      });
    }

    setStep(step + 1);
  };

  return (
    <div className="max-w-screen-lg mx-auto h-screen ">
      <Head>
        <title>Christian Awesome wedding gift</title>
        <meta
          name="description"
          content="create by the best team of the world "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className="bg-white p-10 w-full ">
        <h2>Virtual Office meeting</h2>

        <div className="w-full p-5 mb-10 rounded-sm border border-gray-300">
          <div className="chat chat-start">
            <div className="chat-header">Best team of the world!</div>
            <div className="chat-bubble chat-bubble-primary">
              Wir gratulieren dir zu deiner Hochzeit! 💒 🫶 🎉 🥳
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-header">Best team of the world!</div>
            <div className="chat-bubble chat-bubble-secondary">
              Natürlich darf ein Nerdiges Geschenk 👾 von deinen Lieblings-Nerds
              🤓 nicht fehlen.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-header">You!</div>
            <div className="chat-bubble">What?! 😳</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-header">Best team of the world!</div>
            <div className="chat-bubble chat-bubble-accent">
              Damit du es bei deinem nächsten Urlaub mal was Ordentliches wird,
              bekommst du eine f#?!cking awesome booking.com Gutschein.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-header">You!</div>
            <div className="chat-bubble">Wow ihr seit soo cool! 😢🥹</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-header">Best team of the world!</div>
            <div className="chat-bubble chat-bubble-accent">
              Ja das wissen wir. 😎
            </div>
          </div>
        </div>

        <div className="grid justify-items-center gap-2 ">
          {step === 0 && <Card_01 submit={handleSubmit} />}
          {step === 1 && <Card_02 submit={handleSubmit} />}
          {step === 2 && <Card_03 submit={handleSubmit} />}
          {step === 3 && <Card_04 submit={handleSubmit} />}
          {step === 4 && <Card_Final submit={handleSubmit} />}
        </div>
      </main>

      <footer
        className="footer footer-center p-10 bg-base-200 rounded-b"
        style={{ backgroundColor: "#0071c2" }}
      >
        <div>
          <p className="text-white font-bold">
            Copyright © 2022 - All right reserved by "The best development team
            of the world"
          </p>
        </div>
      </footer>
    </div>
  );
}
