import { MainBlock } from "../MainBlock/MainBlock.jsx";

export const Cart = (props) => {
    const { items, onRemove } = props;

    return (
        <div className="cart">
            <h2 className="container__title">Корзина ({items.length})</h2>

            {items.length === 0 && <p className="cart__empty">Корзина пуста</p>}

            <div className="grid">
                {items.map((product) => (
                    <MainBlock
                        key={product.id}
                        {...product}
                        buttonText="Удалить"
                        onClick={() => onRemove(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};