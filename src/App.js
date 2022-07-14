import React from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {
  const [cartOpened, setCartOpened ] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

React.useEffect(() => {
    fetch('https://62d02feb1cc14f8c08863208.mockapi.io/items')
    .then((res) => {
      return res.json()
    })
    .then((json)=>{
      setItems(json);
    });
}, [])

const onAddToCard = (obj) => {
  setCartItems([...cartItems, obj]);
};

  return (
    <div className="wrapper">
      {cartOpened ?  <Drawer items={cartItems} onCloseDrawer={() => { setCartOpened(false)}} /> : null }

     <Header onClickCart={() => {setCartOpened(true)}}   />

      <section className="slider"></section>

      <main className="main">
        <div className="container">
          <div className="page-head">
            <h2 className="title">Всі кросівки</h2>
            <div className="search">
              <button className="search__btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>
              <input type="text" className="search__input" placeholder="Пошук..." />
            </div>
          </div>
          <div className="product-row">
          {items.map((item) => (
              <Product
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              key={item.id}
              onClickAddFavorite={() => console.log('Додати до обраного')}
              onPlus={(obj) => onAddToCard(item)}
              />
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


