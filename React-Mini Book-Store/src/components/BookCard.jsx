export default function BookCard(Props) {
  const data = Props.data[0];

  return (
    <div className="book-card" data-testid="book-card">
      <img className="card-img" src={data.img} alt={"book-img"} />
      <b>
        <div data-testid="book-card-title">
          {data.title}
          <span>({data.year})</span>
        </div>
      </b>
      <div data-testid="book-card-author">{data.author}</div>
      <div data-testid="book-card-price">Price: ${data.price}</div>
    </div>
  );
}
