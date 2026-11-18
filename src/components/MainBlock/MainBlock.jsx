export const MainBlock = (props) => {
    const { title, icon, description, buttonText, id, onClick } = props;

    return (
        <div className="card">
            <span className="card__id">#{id}</span>
            <img className="card__icon" src={icon} alt={title} />
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
            <button onClick={onClick} className="card__btn">
                {buttonText}
            </button>
        </div>
    );
};