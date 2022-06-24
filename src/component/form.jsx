import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const answer = this.state.value;
    const color = [
      document.getElementById("leftFlags").style.background,
      document.getElementById("middleFlags").style.background,
      document.getElementById("rightFlags").style.background,
    ];

    const lands = [
      document.getElementById("roumanie"),
      document.getElementById("irlande"),
      document.getElementById("italie"),
      document.getElementById("mali"),
      document.getElementById("france"),
    ];

    if (
      color[0] === "blue" &&
      color[1] === "yellow" &&
      color[2] === "red" &&
      answer === "Roumanie"
    ) {
      Alert(`Drapeau validé ! : ${answer}`);
      lands[0].checked = true;
    } else if (
      color[0] === "green" &&
      color[1] === "white" &&
      color[2] === "orange" &&
      answer === "Irlande"
    ) {
      alert(`Drapeau validé ! : ${answer}`);
      lands[1].checked = true;
    } else if (
      color[0] === "green" &&
      color[1] === "white" &&
      color[2] === "red" &&
      answer === "Italie"
    ) {
      alert(`Drapeau validé ! : ${answer}`);
      lands[2].checked = true;
    } else if (
      color[0] === "green" &&
      color[1] === "yellow" &&
      color[2] === "red" &&
      answer === "Mali"
    ) {
      alert(`Drapeau validé ! : ${answer}`);
      lands[3].checked = true;
    } else if (
      color[0] === "blue" &&
      color[1] === "white" &&
      color[2] === "red" &&
      answer === "France"
    ) {
      alert(`Drapeau validé ! : ${answer}`);
      lands[4].checked = true;
    } else {
      alert("Mauvaise réponse !");
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pays :
          <input
            id="sendValue"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default Form;
