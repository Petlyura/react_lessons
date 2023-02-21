import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// import paintings from "./paintings.json";

//========================================================

// const element1 = React.createElement("span", { children: "hello" });

// const jsxElement1 = <span>Hello</span>;

// const element2 = React.createElement("span", { children: "world" });

// const jsxElement2 = <span>world</span>;

// const element = React.createElement(
//   "div",
//   // { a: 5, b: 10 },
//   // "hello",
//   // " ",
//   // "world"

//   // the same shit
//   // { a: 5, b: 10, children: ["hello", " ", "world"] }
//   { a: 5, b: 10, children: [element1, " ", element2] }
// );

// console.log("element:", element);

// const jsxElement = <div>Hello world</div>;
// const jsxTotalElement = (
//   <div>
//     {jsxElement1}
//     {jsxElement2}
//   </div>
// );

// console.log("jsxElement:", jsxElement);
// console.log("jsxTotalElement:", jsxTotalElement);

//===========================================================

// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// const data = paintings[0];
// const data2 = paintings[1];

// const painting1 = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Author: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Price: {data.price} credits</p>
//     <p>Availability: instock or outstock</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>
//       Author: <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Price: {data2.price} credits</p>
//     <p>Availability: instock or outstock</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const elements = (
//   <div>
//     {painting1}
//     {painting2}
//   </div>
// );

//==========================================================

// function Painting(props) {
//   console.log(props);

//   const { url, title, authorTag, authorUrl, price } = props;

//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{data.title}</h2>
//       <p>
//         Author: <a href={authorUrl}>{authorTag}</a>
//       </p>
//       <p>Price: {price} credits</p>
//       <p>Availability: instock or outstock</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

//===========================================================

// ReactDOM.render(
//   <Painting
//     url={paintings[0].url}
//     title={paintings[0].title}
//     authorTag={paintings[0].author.tag}
//     authorUrl={paintings[0].author.url}
//     price={paintings[0].price}
//   />,
//   document.querySelector("#root")
// );

//===========================================================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
