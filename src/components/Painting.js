import PropTypes from "prop-types";
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
    quantity,
  } = props;

  const isInstock = quantity > 10 ? "instock" : "outstock";

  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availability: {isInstock}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  authorTag: PropTypes.string,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
