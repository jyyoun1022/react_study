import React from "react";

function Title({ subTitle }) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // items.map((item) => {
  //   setTimeout(() => console.log(item), item * 500);
  // });
  
  items.forEach((item) => {
    setTimeout(() => console.log(item), item * 1000);
  });

  console.log("map 종료");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <h1>Title</h1> <p>{subTitle}</p>
    </div>
  );
}

export default Title;
