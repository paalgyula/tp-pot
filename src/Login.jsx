import { useState } from "react";
import "./Login.css";

// eslint-disable-next-line no-unused-vars
const errors = [
  {
    note: "NOTE:",
    tip: "Username and password can contain between 1 - 15 characters and may not include spaces.",
  },
];

const Login = () => {
  const [note, setNote] = useState("")
  const [tip, setTip] = useState("")

  const handleSubmit = () => {
    console.log("clicked submit");
    setNote(errors[0].note)
    setTip(errors[0].tip)
  };

  return (
    <>
      <div className="topLogo">
        <table cellPadding="0" cellSpacing="0" width="100%">
          <tr>
            <td>
              <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                <tr>
                  <td>
                    <a href="http://www.tp-link.com" target="blank">
                      <img
                        src="../login/top1_1.jpg"
                        border="0"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </td>
                  <td
                    width="490"
                    align="right"
                    style={{ paddingTop: 23, backgroundImage: 'url(../login/top1_2.jpg)' }}
                  >
                    <table>
                      <tr>
                        <td className="style1">300M Wireless N Router</td>
                      </tr>
                      <tr>
                        <td className="style2">
                          Model No. TL-WR841N/TL-WR841ND{" "}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <img
                height="3"
                src="../login/top2.jpg"
                width="100%"
                align="top"
                border="0"
              />
            </td>
          </tr>
        </table>
      </div>

      <div className="loginBox">
        <div className="noteDiv">
          <span id="note">{note}</span>
          <span id="tip">{tip}</span>
        </div>
        <div className="panelThre">
          <div className="picDiv">
            <ul>
              <li id="unLi" className="unLi">
                <input
                  className="text"
                  id="userName"
                  type="text"
                  maxLength="15"
                />
              </li>
              <li className="blank"></li>
              <li id="pwLi" className="pwLi">
                <input
                  className="text"
                  id="pcPassword"
                  type="password"
                  maxLength="15"
                />
              </li>
            </ul>
            <label
              id="loginBtn"
              className="loginBtn"
              onClick={handleSubmit}
            ></label>
            <div>
              <label id="copyright">
                Copyright &copy; 2015 TP-LINK Technologies Co., Ltd. All rights
                reserved.{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <form
        action="/userRpm/LoginRpm.htm"
        method="get"
        id="loginForm"
        encType="multipart/form-data"
      >
        <input type="hidden" value="Save" name="Save" />
      </form>
    </>
  );
};

export default Login;
