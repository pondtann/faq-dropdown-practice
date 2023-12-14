import { useState } from "react";

import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function Question({title, info, id}) {
  const [isShown, setIsShown] = useState(false);
  let answerShown = "text-left";
  let answerHide = "text-left hidden";

  function answerHandler() {
    if (isShown === false) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }

  return (
    <>
      <div className="mx-10 my-3 p-4 rounded-md border-black border-4 bg-slate-200">
        <div className="flex justify-between">
          <p>{title}</p>
          <button className="text-3xl" onClick={answerHandler}>
            {isShown ? <CiSquareMinus /> : <CiSquarePlus />}
          </button>
        </div>
        <div className={isShown ? answerShown : answerHide}>{info}</div>
      </div>
    </>
  );
}

export default Question;
