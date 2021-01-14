import React from 'react';
import "./App.css";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: 500,
    };
  }

  tick() {
    this.setState({
      pictureId: this.state.pictureId + 1,
      random: "AAAA",
    });
  }

  componentDidMount() {
    console.log("อยู่ดีๆ ก็เดิน");
    this.timerId = setInterval(() => this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("ฉิบหานลื่นล้ม");
    clearInterval(this.timerId);
  }

  render() {
    const url = `https://picsum.photos/id/${this.state.pictureId}/300/300`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={url} className="App-logo" alt="logo"/>
            <a>{this.props.name}</a>
            <a>{this.props.minor}</a>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
