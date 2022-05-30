import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <div>
          <ul>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
        <div>
          <ul>
            <li>いいい</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>

        <p>完了のTODO</p>
        <div>
          <ul>
            <li>ううう</li>
            <button>もどす</button>
          </ul>
        </div>
      </div>
    </>
  );
};
