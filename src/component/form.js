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

    if (
      color[0] === "blue" &&
      color[1] === "yellow" &&
      color[2] === "red" &&
      answer === "Roumanie"
    ) {
      alert("Drapeau validé ! : " + answer);
    } else if (
      color[0] === "green" &&
      color[1] === "white" &&
      color[2] === "orange" &&
      answer === "Irlande"
    ) {
      alert("Drapeau validé ! : " + answer);
    } else if (
        color[0] === "green" &&
        color[1] === "white" &&
        color[2] === "red" &&
        answer === "Italie"
      ) {
        alert("Drapeau validé ! : " + answer);
      } else if (
        color[0] === "green" &&
        color[1] === "yellow" &&
        color[2] === "red" &&
        answer === "Mali"
      ) {
        alert("Drapeau validé ! : " + answer);
      } else if (
        color[0] === "blue" &&
        color[1] === "white" &&
        color[2] === "red" &&
        answer === "France"
      ) {
        alert("Drapeau validé ! : " + answer);
      } else {
        alert('Mauvaise réponse !');
      }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
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
