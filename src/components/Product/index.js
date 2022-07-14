import React from 'react';
import styles from "./Product.module.scss";




function Product({ onClickAddFavorite, imageUrl, title, price, onPlus }) {
    const [isAddCard, setAddCart] = React.useState(false);

    const onClickAddCard = () => {
      onPlus();
      setAddCart(!isAddCard)
    };

    return (
            <div className={styles.product}>
              <button className={styles.favorite} onClick={onClickAddFavorite}>
                <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className={styles.image}>
                <img src={imageUrl} alt="product" width="133" height="112" />
              </div>
              <div className={styles.title}>{title}</div>
              <div className={styles.footer}>
                <div className={styles.price}>
                 Ціна:
                  <span>{price} грн.</span>
                </div>
                <button className={styles.basket} onClick={onClickAddCard}>
                  <img src={isAddCard ? "/img/cheked.svg" : "/img/plus.svg"} alt="plus" />
                </button>
              </div>
            </div>
    );
}
export default Product;