import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form)

    let  data = []
    const str = localStorage.getItem("DATA")

    if (str !== null) {
      data = JSON.parse(str)
      // localStorage.setItem(form)
    }

    data.push(form)
    localStorage.setItem("DATA", JSON.stringify(data))
  }

  return (
    <>
      <div align="center" style={{margin: 50}}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <br />

          <input
            type="name"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <br />
        <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
