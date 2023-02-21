// import Painting from "./components/Painting";
import PaintingList from "./components/PaintingList";
import Section from "./components/Section";

import paintings from "./paintings.json";

export default function App() {
  return (
    <>
      {/* <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        authorTag={paintings[0].author.tag}
        authorUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
        key={paintings[0].id}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorTag={paintings[1].author.tag}
        authorUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
        key={paintings[1].id}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        authorTag={paintings[2].author.tag}
        authorUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
        key={paintings[2].id}
      /> */}

      <Section title="Painting List">
        <PaintingList paintings={paintings} />
      </Section>

      <Section>fdsafsafassdfads</Section>
    </>
  );
}
