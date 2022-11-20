import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
let info = [
  {
    avatar:
      "https://coolsen.ru/wp-content/uploads/2021/12/106-20211224_142529-768x768.jpg",
    url: "6",
    name: "Guli",
  },
  {
    avatar:
      "https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg",
    url: "5",
    name: "Baxtiyor",
  },
  {
    avatar:
      "https://phonoteka.org/uploads/posts/2021-05/thumbs/1622009950_16-phonoteka_org-p-khaker-art-krasivo-23.jpg",
    url: "4",
    name: "Behruz",
  },
  {
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLSyz9gqvLqZFO7Gv5I85oGvT74aEZvCpJbDzOpe7Q=s900-c-k-c0x00ffffff-no-rj",
    url: "3",
    name: "girl",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/378800000472427846/078357e2698399791383e11d9197e834.jpeg",
    url: "2",
    name: "9'A'sinf",
  },
  {
    avatar:
      "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
    url: "1",
    name: "Ustoz-shogird",
  },
];
*/

let infoSidebar = [
  { message: "All messages", url: "/" },
  { message: "Personals", url: "/personal" },
  { message: "Groups", url: "/groups" },
  { message: "Channels", url: "/channels" },
];

let message =[
  {avatar:
    "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
  message: 'hello'
  },
  {avatar:
    "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
  message: 'Uzigram'
  },
  {avatar:
    "https://yt3.ggpht.com/ytc/AMLnZu8iiop3gTj9fLTsYLj7ir5-Zv7FtBbPQUw7Lcy-Yw=s900-c-k-c0x00ffffff-no-rj",
  message: 'Great'
  },
]

root.render(
  <React.StrictMode>
    <App /*info={info}*/ infoSidebar={infoSidebar} message={message} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
