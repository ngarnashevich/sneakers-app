import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header-logo">
              <div className="header-logo__img">
                <img src="/img/logo.svg" alt="logo" width="40" height="40" />
              </div>
              <div className="header-logo__text">
                <div className="header-logo__text-top">REACT SNEAKERS</div>
                <div className="header-logo__text-bottom">Магазин лучших кроссовок</div>
              </div>
            </div>

            <ul className="header-actions">
              <li className="header-actions__item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>1205 грн.</span>
              </li>
              <li className="header-actions__item">
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                    fill="#9B9B9B" />
                </svg>
              </li>
              <li className="header-actions__item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                        fill="#9B9B9B" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="slider"></section>

      <main>
        <div className="container">
          <div className="page-head">
            <h2 className="title">Все кроссовки</h2>
            <div className="search">
              <button className="search__btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>
              <input type="text" className="search__input" placeholder="Поиск..." />
            </div>
          </div>
          <div className="product-row">
            <div className="product">
              <button className="product__add-favorite">
                 <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="product">
              <button className="product__add-favorite">
                <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>


            <div className="product">
              <button className="product__add-favorite">
                 <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>


            <div className="product">
              <button className="product__add-favorite">
                <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>

              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="product">
              <button className="product__add-favorite">
                <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>
              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="product">
              <button className="product__add-favorite">
                 <svg  viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
                </svg>
              </button>
              <div className="product__image">
                <img src="/img/products-img/image-1.jpg" alt="image-1" width="133" height="112" />
              </div>
              <div className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
              <div className="product__footer">
                <div className="product__price">
                  Цена:
                  <span>12 999 грн.</span>
                </div>
                <button className="product__add-basket">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                      fill="#D3D3D3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;