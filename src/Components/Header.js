import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/header.css";

const Header = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const auth = useAuth();

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("token", data.user);
          localStorage.setItem("user", true);
          auth.login(data.user);
          setErr(false);
          return;
        } else {
          setErr(true);
          auth.logout();
        }
      });
  };

  return (
    <div id="header">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          name="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        {/* <button type="submit" >Sign Up</button> */}
      </form>
      {err && <p style={{ color: "red" }}>Incorrect credentials</p>}
    </div>
  );
};

export default Header;
