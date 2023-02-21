import Painting from "./Painting";
import PropTypes from "prop-types";

const PaintingList = ({ paintings }) => {
  return (
    <ul>
      {paintings.map((painting) => (
        <li key={painting.id}>
          <Painting
            imageUrl={painting.url}
            title={painting.title}
            authorTag={painting.author.tag}
            authorUrl={painting.author.url}
            price={painting.price}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PaintingList;
