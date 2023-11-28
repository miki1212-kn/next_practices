import { useState } from "react";
import { css } from "../../../styled-system/css";
import { PageAry } from "../libs/Page";
import style from "@/styles/sample01.module.scss";
import { log } from "console";

export default function PageSlider() {
  const [state, ClassAdd] = useState(PageAry[0]);

  const NextPage02 = () => {
    console.log("btn click");

    //circle.idと一致するstate.idを返す
    const currentIndex = PageAry.findIndex((page) => page.id === state.id);
    console.log(currentIndex);

    let nextIndex = currentIndex + 1;
    if (currentIndex == PageAry.length - 1) {
      nextIndex = 0;
    }

    ClassAdd(PageAry[nextIndex]);
  };

  // const getPageClass = (page: any) => {
  //   //isCurrentクラスを追加する条件を指定
  //   // ? trueの場合 : falseの場合　という式になる
  //   return page.isCurrent ? "circle isCurrent" : "circle";
  // };

  return (
    <>
      <div
        className={css({
          w: "80%",
          m: "0 auto",
          p: "100px",
          bg: "lightgray",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        })}
      >
        <line
          className={css({
            position: "absolute",
            w: "70%",
            m: "0 auto",
            p: " 0 100px ",
            h: "3px",
            bg: "gray;",
          })}
        ></line>
        {PageAry.map((page, index) => (
          <div
            key={index}
            //${style.circle}: これは CSS モジュールで定義された .circle クラスを指します。CSS モジュールは、クラス名の衝突を回避するために、クラス名にランダムな一意の識別子を付加します。style.circle は、.circle クラスに対応するユニークなクラス名を取得します。
            // ${state.id === page.id ? style.isCurrent : ""}: これは条件付きクラスの設定です。三項演算子を使用しています。これは、state.id が page.id と一致する場合は .isCurrent クラスを、一致しない場合は空の文字列を追加します。つまり、state.id が現在のページの id と一致する場合に .isCurrent クラスが適用され、それ以外の場合はクラスが適用されません。
            // このような書き方は、React の JSX では一般的で、動的にクラス名を決定する場合に使われます。ページの状態やプロパティに基づいて、特定の条件が満たされたときに特定のスタイルを適用するのに役立ちます。
            className={`${style.circle} ${
              state.id === page.id ? style.isCurrent : ""
            }`}
          ></div>
        ))}
      </div>

      <div
        className={css({
          display: "flex",
          m: "10px ",
        })}
      >
        <button className={style.button} onClick={NextPage02}>
          next
        </button>
      </div>
    </>
  );
}
