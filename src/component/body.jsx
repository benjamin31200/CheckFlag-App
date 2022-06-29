import React from "react";

function Body() {
  const [leftFlagColor, setLeftFlagColor] = React.useState("");
  const [middleFlagColor, setMiddleFlagColor] = React.useState("");
  const [rightFlagColor, setRightFlagColor] = React.useState("");

  const arrayColor = [
    "blue",
    "white",
    "red",
    "yellow",
    "green",
    "orange",
    "brown",
    "pink",
    "black",
    "orange",
    "brown",
    "pink",
  ];

  const setBackground = (color, setFlagColor, flagColor, divFlag) => {
    const div = divFlag;
    const random = Math.floor(Math.random() * color.length);
    const randomColor = color[random];
    setFlagColor(randomColor);
    div.style.background = flagColor;
  };
  function SwapButtonLeft() {
    const leftDivFlag = document.getElementById("leftFlags");
    setBackground(arrayColor, setLeftFlagColor, leftFlagColor, leftDivFlag);
  }

  function SwapButtonMiddle() {
    const middleDivFlag = document.getElementById("middleFlags");
    setBackground(
      arrayColor,
      setMiddleFlagColor,
      middleFlagColor,
      middleDivFlag
    );
  }

  function SwapButtonRight() {
    const rightDivFlag = document.getElementById("rightFlags");
    setBackground(arrayColor, setRightFlagColor, rightFlagColor, rightDivFlag);
  }

  return (
    <div className="App-Body">
      <h1>CheckFlag</h1>
      <p>Trouve les différents drapeaux pour les valider.</p>
      <h4>Clique sur les différents boutons pour changer les couleurs👇</h4>
      <div className="App-Body-Button">
        <button id="Button-left" onClick={SwapButtonLeft} />
        <button id="Button-middle" onClick={SwapButtonMiddle} />
        <button id="Button-right" onClick={SwapButtonRight} />
      </div>
      <div className="App-Body-Flag">
        <div id="leftFlags" />
        <div id="middleFlags" />
        <div id="rightFlags" />
      </div>
    </div>
  );
}

export default Body;
