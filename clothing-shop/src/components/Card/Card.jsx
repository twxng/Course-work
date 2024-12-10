import './Card.css';

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-description">{product.description}</p>
      <p className="card-price">Ціна: {product.price} грн</p>
    </div>
  );
}

export default Card;
