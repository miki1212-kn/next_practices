import Link from "next/link";
import { css } from "../../../styled-system/css";

export default function Sample01Orange() {
  return (
    <div>
      <h1
        className={css({
          color: "orange",
        })}
      >
        hi this page is 03 Orange!
      </h1>
    </div>
  );
}
