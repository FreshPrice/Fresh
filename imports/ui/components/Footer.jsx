import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <footer id="footer">
          2019 🛒 <a href="https://github.com/FreshPrice/Fresh">Fresh</a> by{" "}
          <a
            id="creators"
            href="https://www.linkedin.com/in/echoiubc/"
            target="_blank"
          >
            Erica
          </a>
          ,{" "}
          <a
            id="creators"
            href="https://www.linkedin.com/in/nicolehli"
            target="_blank"
          >
            Nicole
          </a>{" "}
          and{" "}
          <a
            id="creators"
            href="https://www.linkedin.com/in/yaoliu93/"
            target="_blank"
          >
            Yao
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
