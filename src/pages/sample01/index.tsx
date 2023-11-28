import { useState } from "react";
import { css } from "../../../styled-system/css";
import { CircleAry } from "../libs/circle";
import Sample01Blue from "../components/sample01_02";
import Sample01Orange from "../components/sample01_03";

export default function CircleSlider() {
  const [state, setState] = useState(CircleAry[0]);

  const NextPage = () => {
    console.log("btn click");

    // 配列内の要素を条件に基づいて検索し、最初に見つかった要素のインデックスを返す
    const currentIndex = CircleAry.findIndex(
      (circle) => circle.id === state.id
    );

    // 次に表示するページのインデックス(配列の番号)
    const nextIndex = (currentIndex + 1) % CircleAry.length;

    if (state.id === CircleAry.length) {
      console.log("app start");
      window.location.href = "sample01/sample01_02";
    } else {
      // setStateには次の番号を入れる
      setState(CircleAry[nextIndex]);
      console.log(CircleAry[nextIndex]);
      console.log(state.id);
    }
    // setState(CircleAry[nextIndex]);
    // console.log(CircleAry[nextIndex]);
    // console.log(state.id);
  };

  return (
    <>
      <div>
        {state.id === 1 && <h1>First Page !</h1>}

        {state.id === 2 && <Sample01Blue />}
        {state.id === 3 && <Sample01Orange />}
        <button
          className={css({
            bg: "lightgray",
            p: "6px 24px",
            borderRadius: "15px",
          })}
          onClick={NextPage}
        >
          次へ
        </button>
      </div>
    </>
  );
}
