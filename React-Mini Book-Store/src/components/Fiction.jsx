import fictionData from "../fiction.json";
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div className="container" data-testid="books-fiction">
      <h1 data-testid="books-container-title">Fictional Books</h1>

      <div className="books-container">
        {fictionData.map((el, i) => <BookCard data={[el, i]} />)}
      </div>
    </div>
  );
}
