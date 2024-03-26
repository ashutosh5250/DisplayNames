import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    full_name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      full_name: `${formData.first_name} ${formData.last_name}`,
    });
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">
          First Name:{" "}
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="last_name">
          Last Name:{" "}
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {formData.full_name && <label>Full Name: {formData.full_name}</label>}
    </div>
  );
}

export default App;
