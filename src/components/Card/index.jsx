function Card({ id, cardImg, cardTitle, onOpen }) {
  return (
    <div className="card-content">
      <figure className="polaroid">
        <button
          type="button"
          className="card"
          onClick={() => onOpen(id)}
          aria-haspopup="dialog"
          aria-label={`Voir ${cardTitle}`}
        >
          <img src={cardImg} alt={'Image de ' + cardTitle} />
          <h3>{cardTitle}</h3>
        </button>
      </figure>
    </div>
  );
}

export default Card;
