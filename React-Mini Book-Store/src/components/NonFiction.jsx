import nonfictionData from "../nonfiction";
import BookCard from "./BookCard";

export default function NonFiction() {
  return (
    <div className="container" data-testid="books-fiction">
      <h1 data-testid="books-container-title">Non-Fiction Books</h1>

      <div className="books-container">
        {nonfictionData.map((el, i) => <BookCard data={[el, i]} />)}
      </div>
    </div>
  );
}
