
function Drawer(){
    return (
      <div className="overlay" style={{ display: 'none' }}>
         <div className="drawer">

              <div className="drawer__header">
                  <div className="drawer__title">Кошик</div>
                  <button className="drawer-close">
                     <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.31738" width="23.593" height="1.86261" rx="0.931304" transform="rotate(45 1.31738 0)" fill="#07081A"/>
                    <rect y="17.3037" width="23.593" height="1.86261" rx="0.931304" transform="rotate(-45 0 17.3037)" fill="#07081A"/>
                    </svg>
                  </button>
              </div>

              <div className="drawer__body">
                    <div className="card-item">
                        <div className="card-item__img">
                        <img type="image" src="/img/products-img/image-1.jpg" alt="product" width="70" height="70" />
                        </div>
                        <div className="card-item__body">
                            <div className="card-item__title">Чоловічі Кросівки Nike Blazer Mid Suede</div>
                            <div className="card-item__price">12 999 грн.</div>
                        </div>
                        <div className="card-item__button">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#B5B5B5"/>
                        </svg>
                        </div>
                    </div>
              </div>

              <div className="drawer__footer">
                  <div className="drawer__total">
                    <div className="drawer__total-text">Всього: </div>
                    <div className="drawer__total-space"></div>
                    <div className="drawer__total-price">21 498 грн. </div>
                  </div>
                  <div className="drawer__total">
                    <div className="drawer__total-text">Податок 5%: </div>
                    <div className="drawer__total-space"></div>
                    <div className="drawer__total-price">1074 грн. </div>
                  </div>

                  <button className="drawer__btn">
                    <span>Сформувати замовлення</span>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
              </div>
          </div>
        </div>
    );
}

export default Drawer;