import React from "react";

function Body() {
  const [leftFlag, setLeftFlag] = React.useState(false);
  const [middleFlag, setMiddleFlag] = React.useState(false);
  const [rightFlag, setRightFlag] = React.useState(false);



  function SwapButtonLeft() {
    const leftDivFlag = document.getElementById("leftFlags");
    setLeftFlag(!leftFlag) || leftFlag
      ? (leftDivFlag.style.background = "green")
      : (leftDivFlag.style.background = "blue");
      console.log(document.getElementById('sendValue').value);
  }

  function SwapButtonMiddle() {
    const middleDivFlag = document.getElementById("middleFlags");
    setMiddleFlag(!middleFlag) || middleFlag
      ? (middleDivFlag.style.background = "white")
      : (middleDivFlag.style.background = "yellow");
  }

  function SwapButtonRight() {
    const rightDivFlag = document.getElementById("rightFlags");
    setRightFlag(!rightFlag) || rightFlag
      ? (rightDivFlag.style.background = "red")
      : (rightDivFlag.style.background = "orange");
  }

  return (
    <div>
      <h1>CheckFlag</h1>
      <p>Trouve les différents drapeaux pour les valider.</p>
      <h4>Clique sur les différents boutons pour changer les couleurs 👇​</h4>
      <div className="App-Body-Button">
        <button id="Button-left" onClick={SwapButtonLeft}></button>
        <button id="Button-middle" onClick={SwapButtonMiddle}></button>
        <button id="Button-right" onClick={SwapButtonRight}></button>
      </div>
      <div className="App-Body-Flag">
        <div id="leftFlags"></div>
        <div id="middleFlags"></div>
        <div id="rightFlags"></div>
      </div>
      <div className="App-Body-Check">
        <h3>Drapeaux à valider:</h3>
        <input
          type="checkbox"
          id="irlande"
          name="irlande"
          value="irlande"
        ></input>
        Irlande
        <input
          type="checkbox"
          id="italie"
          name="italie"
          value="italie"
        ></input>
        Italie
        <input
          type="checkbox"
          id="mali"
          name="mali"
          value="mali"
        ></input>
        Mali
        <input
          type="checkbox"
          id="roumanie"
          name="roumanie"
          value="roumanie"
        ></input>
        Roumanie
        <input
          type="checkbox"
          id="france"
          name="france"
          value="france"
        ></input>
        France
      </div>
    </div>
  );
}

export default Body;
