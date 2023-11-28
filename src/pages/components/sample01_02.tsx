import Link from "next/link";
import { css } from "../../../styled-system/css";

export default function Sample01Blue() {
  return (
    <div>
      <h1
        className={css({
          color: "blue",
        })}
      >
        hi this page is 02 Blue !
      </h1>
    </div>
  );
}
