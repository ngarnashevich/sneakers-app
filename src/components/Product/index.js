import styles from "./Product.module.scss";



function Product(props) {
    return (
            <div className={styles.product}>
              <button className={styles.favorite}>
                <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className={styles.image}>
                <img src={props.imageUrl} alt="product" width="133" height="112" />
              </div>
              <div className={styles.title}>{props.title}</div>
              <div className={styles.footer}>
                <div className={styles.price}>
                 Ціна:
                  <span>{props.price} грн.</span>
                </div>
                <button className={styles.basket}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>
    );
}
export default Product;