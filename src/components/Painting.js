import defaultImage from "./default.jpg";

console.log("dafaultImage:", defaultImage);

export default function Painting(props) {
  // console.log(props);

  const {
    imageUrl = defaultImage,
    title,
    authorTag = "unknown",
    authorUrl,
    price,
  } = props;

  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availability: instock or outstock</p>
      <button type="button">Add to cart</button>
    </div>
  );
}
