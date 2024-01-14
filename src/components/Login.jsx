import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const myStyle = {
  container: {
    position: "fixed",
    top: "46%",
    left: "50%",
    zIndex: "100",
    transform: "translate(-50%, -50%)",
  },
  login: {
    width: "25rem",
    height: "36rem",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "4px",
    alignItems: "center",
  },
  header: {
    borderBottom: "2px solid #dee2e6",
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center",
    padding: "1rem 1.6rem",
    textAlign: "center",
  },
  span: {
    fontSize: "2rem",
    fontWeight: "600",
  },
  button: {
    width: "1rem",
    height: "1rem",
    backgroundColor: "initial",
    borderWidth: "0",
    textAlign: "center",
    opacity: "0.5",
    marginTop: "0.1rem",
    background: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E") no-repeat`,
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
  form: {
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  username: {
    fontSize: ".9rem",
    height: "2.5rem",
    margin: ".6rem 0",
    width: "22rem",
    border: "1px solid #b2b6b8",
    borderRadius: ".3rem",
    color: "#000 !important",
    padding: ".4rem .8rem",
    writingMode: "horizontal-tb !important",
    paddingBlock: "1px",
    paddingInline: "2px",
  },
  password: {
    fontSize: ".9rem",
    height: "2.5rem",
    margin: ".6rem 0",
    width: "22rem",
    border: "1px solid #b2b6b8",
    borderRadius: ".3rem",
    color: "#000 !important",
    padding: ".4rem .8rem",
    webgitTextSecurity: "disc !important",
    writingMode: "horizontal-tb !important",
    paddingBlock: "1px",
    paddingInline: "2px",
  },
  checkBox: {
    marginRight: "0.6rem",
    backgroundColor: "initial",
    cursor: "default",
    appearance: "auto",
    border: "initial",
  },
  loginBtn: {
    fontSize: ".9rem",
    height: "2.5rem",
    margin: ".6rem 0",
    width: "22rem",
    border: "1px solid #b2b6b8",
    borderRadius: "4px",
    borderStyle: "none",
    cursor: "pointer",
    color: "#fff",
  },
  footer: {
    backgroundColor: "initial",
    border: "none",
    color: "#b2b6b8",
    fontSize: "1rem",
    lineHeight: ".8rem",
    marginTop: ".8rem",
  },
};

export const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const client = axios.create({baseURL: "http://103.252.95.181:8000/"})

  const handleEvent = () => {
    navigate(-1);
  }

  async function loginUser(credentials) {
    let response = await client.post('/login/', credentials);
    const data = await response.data;
    const token = response.status === 200 ? data.token : null;
    const user = token && await client.get('/profile/', {headers: {Authorization: `Bearer ${token}`}}).then(res => res.data);
    localStorage.setItem('token', token);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    handleEvent();
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    loginUser(data);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "100%",
          left: "0",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "10",
        }}
      ></div>
      <div style={myStyle.container}>
        <div style={myStyle.login}>
          <div style={myStyle.header}>
            <span style={myStyle.span}>Login</span>
            
            <button style={myStyle.button} onClick={handleEvent}></button>
          
          </div>
          <form
            style={{
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            <div>
              <input
                style={myStyle.username}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                style={myStyle.password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                marginBottom: "1.6rem",
                marginLeft: "1.6rem",
                textAlign: "left",
              }}
            >
              <input
                style={myStyle.checkBox}
                type="checkbox"
                name="checkSave"
                id="check"
              />
              <label style={{ cursor: "default" }} htmlFor="check">
                Remember Password
              </label>
            </div>
            <button
              style={{ ...myStyle.loginBtn, backgroundColor: "#f57c2b" }}
              onClick={(e) => handleLoginFormSubmit(e)}
            >
              Login
            </button>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                margin: ".7rem 1.5 rem",
                opacity: 0.2,
              }}
            >
              <div
                style={{
                  backgroundColor: "#888",
                  height: "1px",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  margin: "0 .3rem",
                }}
              >
                OR
              </div>
              <div
                style={{
                  backgroundColor: "#888",
                  height: "1px",
                  width: "100%",
                }}
              ></div>
            </div>
            <div>
              <button
                style={{
                  ...myStyle.loginBtn,
                  backgroundColor: "#f5492b",
                }}
              >
                Login with Google
              </button>
              <button
                style={{
                  ...myStyle.loginBtn,
                  backgroundColor: "#2b83f5",
                }}
              >
                Login with Facebook
              </button>
            </div>
            <div style={myStyle.footer}>Do not have an account? Register</div>
            <div style={myStyle.footer}>Forgot password</div>
          </form>
        </div>
      </div>
    </>
  );
};
