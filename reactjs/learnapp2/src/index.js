import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Header title='My First React Web Page' />,
  document.getElementById('header')
);

//function changePicture() {
  ReactDOM.render(
    <App name = "This is a random image" minor="Form Picsum"/>,
    document.getElementById('app')
  );
//}

//setInterval(changePicture, 3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
