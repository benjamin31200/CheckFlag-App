import React from "react";

export default function UserForm() {
  const [landValue, setLandValue] = React.useState({ name: "" });

  const handleChange = (event) => {
    setLandValue({ landValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(landValue);
  };
  return (
    <div>
      <form>
        <div>
          <h3>Le pays ?</h3>
        </div>
        <div>
          <input
            type="text"
            name="land"
            placeholder=""
            value={landValue.name}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
