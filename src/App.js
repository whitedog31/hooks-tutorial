import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <br />
      {visible && (
        <>
          <Counter />
          <Info />
        </>
      )}
    </div>
  );
}
