import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const questions = [
  "Apakah Anda dan sahabat Anda cocok dalam hal kebiasaan hidup dan kebersihan?",
  "Apakah Anda memiliki jadwal dan gaya hidup yang sama?",
  "Seberapa baik Anda menangani konflik dengan sahabat Anda?",
  "Apa manfaat potensial hidup dengan sahabat Anda?",
  "Bagaimana Anda menggambarkan hubungan yang ideal?",
  "Apakah menurut Anda penting jika saya bertemu orang itu secara langsung sebelum berkencan dengan mereka?",
  "Menurut Anda, bagaimana saya bisa tahu apakah pacar saya sehat secara emosional?",
];

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [touchable, setTouchable] = useState(true);

  const actionOnClickHandler = async () => {
    setTouchable(false);

    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        const index = Math.floor(Math.random() * questions.length);
        setCurrentQuestion([index + 1, questions[index]]);
      }, 100 * i);
    }

    setTouchable(true);
  };

  const cardElement = useMemo(() => {
    return (
      <div
        className="bg-[#FAFAFA] rounded-lg p-4 min-h-[50%] w-[80%] flex flex-col items-center justify-between"
        onClick={touchable ? actionOnClickHandler : null}
      >
        <p className="font-roboto-flex text-[#202020] w-full text-left font-medium text-xl">
          {currentQuestion?.[0] ?? ""}
        </p>

        <p className="font-roboto-flex text-2xl text-[#202020] font-medium mx-4">
          {currentQuestion?.[1] ?? ""}
        </p>

        <p className="font-roboto-flex text-[#202020] w-full text-right font-medium text-xl">
          {currentQuestion?.[0] ?? ""}
        </p>
      </div>
    );
  }, [currentQuestion, touchable]);

  const initActionElement = (
    <button
      type="button"
      className="font-poppins text-2xl text-white font-bold"
      onClick={actionOnClickHandler}
    >
      {"TAP UNTUK MULAI"}
    </button>
  );

  return (
    <div className="bg-[#202020] w-full h-screen flex flex-col items-center p-8 justify-between">
      <h1 className="font-poppins text-2xl text-white font-light">RANDOKU</h1>
      {!currentQuestion ? initActionElement : cardElement}
      <h2 className="font-poppins text-xl text-white font-light">
        BESTIE EDITION
      </h2>
    </div>
  );
}

export default App;
