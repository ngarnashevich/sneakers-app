import React from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const products = [
  {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 2999,
    imageUrl: '/img/products-img/image-1.jpg'
  },
   {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 1699,
    imageUrl: '/img/products-img/image-2.jpg'
  },
   {
    title: 'Кросівки Puma X Aka Boku Future Rider',
    price: 2299,
    imageUrl: '/img/products-img/image-3.jpg'
  },
   {
    title: 'Чоловічі кросівки Under Armour Curry 8',
    price: 1175,
    imageUrl: '/img/products-img/image-4.jpg'
  },
   {
    title: 'Чоловічі кросівки Nike Kyrie 7',
    price: 1499,
    imageUrl: '/img/products-img/image-5.jpg'
  },
   {
    title: 'Чоловічі кросівки Jordan Air Jordan 11',
    price: 1899,
    imageUrl: '/img/products-img/image-6.jpg'
  },
  {
    title: 'Чоловічі кросівки Nike LeBron XVIII',
    price: 1399,
    imageUrl: '/img/products-img/image-7.jpg'
  },
  {
    title: 'Чоловічі кросівки Nike Lebron XVIII Low',
    price: 1499,
    imageUrl: '/img/products-img/image-8.jpg'
  }
];

function App() {
  return (
    <div className="wrapper">

     <Drawer />
     <Header />

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
          {products.map((obj,idx) => (
              <Product
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              key={obj.id}
              />
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


