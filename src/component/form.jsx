/* eslint-disable class-methods-use-this */
import React from "react";
import Swal from "sweetalert2";

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
    const ifValid = (colorLeft, colorMiddle, colorRight) => {
      const leftColorFlag =
        document.getElementById("leftFlags").style.background;
      const middleColorFlag =
        document.getElementById("middleFlags").style.background;
      const rightColorFlag =
        document.getElementById("rightFlags").style.background;
      if (
        colorLeft === leftColorFlag &&
        colorMiddle === middleColorFlag &&
        colorRight === rightColorFlag
      ) {
        return Swal.fire("hello");
      }
      return Swal.fire({
        title: "Mauvaise réponse",
        icon: "error",
        confirmButtonText: "Ok",
      });
    };
    ifValid("blue", "white", "red");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="App-Form">
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
        </div>
        <div id="App-Validate">
          <h3>Nombres de drapeaux trouvés: </h3>
        </div>
      </div>
    );
  }
}

export default Form;
