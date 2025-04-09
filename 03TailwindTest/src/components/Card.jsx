import React from "react";

function Card(props) {
  console.log("props", props);
  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
          />
        </div>
        <p>name : {props.name}</p>
      </div>
    </>
  );
}

export default Card;
