import React, { useState, useEffect } from "react";

export default function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 1.   가장 처음 렌더링, 업데이트 할 경우가 없는 경우 => []
  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log(name, nickname);
  //   }, []);

  // 2. name 으로 업데이트 하면서 리렌더링
  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  useEffect(() => {
    console.log("1. effect");
    console.log(name);
    return () => {
      console.log("2. clean up");
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
        <input
          value={nickname}
          onChange={onChangeNickname}
          placeholder="닉네임"
        />
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}
