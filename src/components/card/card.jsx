import './card.scss';

export default function Card({ img, title, country, price }) {
    return (
        <div className="card">
            <div className="photo" style={{background: `url(${img}) center / contain no-repeat`}}>
            </div>
            <p className="card__title">{title}</p>
            <p className="card__country">{country}</p>
            <p className="card__price">{price}$</p>
        </div>
    );
}