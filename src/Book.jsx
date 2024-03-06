import "./Book.css";

export default function ({ book }) {
  const { name, price } = book;
  return (
    <div className="book">
      <h3>Book name: {name}</h3>
      <h3>Book Price: {price}</h3>
    </div>
  );
}
