import { useState, useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import toast from "react-hot-toast";
import { productsData } from "../../data";
import { Services } from "./sections/OurServices";
import { Banners } from "./sections/Banners";
import { About } from "./sections/About";
import { FeedbackSection } from "./sections/FeedbackSection";

export interface ProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}


export function Home() {
  const {addItemToCart} = useContext(CartContext);
  const [products] = useState<ProductsProps[]>(productsData);

  function handleAddItemToCart(productItem: ProductsProps) {
    console.log(productItem.title);
    toast.success("Produto adicionado no carrinho 🐾", {
      duration: 3000,

      style: {
        borderRadius: 10,
        backgroundColor: "rgb(0, 125, 33)",
        fontWeight: 600,
        color: "navy",
        height: 48,
      },
    })
    addItemToCart(productItem);
  }

  return(
    <div>
      <Banners />
      <About />
      <Services />
      <main id='products' className="bg-dogFoot w-full max-w-7xl px-4 mx-auto pt-8 pb-20">
        <h2 className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl mt-4 text-slate-600 font-bold my-10">
          <span>Nossos <span className="text-[#81AAB8]">Produtos</span></span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {products.map( (productItem) => (
            <section key={productItem.id} className="w-full border-2 border-slate-500 rounded-lg px-1 py-4 bg-gray-100">
            <Link to={`/produto/${productItem.id}`}>
              <img
                className="w-full rounded-xl mb-2 border-2 border-gray-200/30"
                src={productItem.cover}
                alt={productItem.title}
              />
            <p className="font-medium mt-1 mb-2 text-center">{productItem.title}</p>
            </Link>

            <div className="flex gap-2 items-center justify-center">
              <strong>
                {productItem.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
              </strong>
              
              <button
                onClick={() => handleAddItemToCart(productItem)}
                className="bg-green-800 rounded-xl p-1.5 border-2 border-green-500 hover:bg-green-700">
                <BsCart3 size={18} color="#FFF"/>
              </button>
            </div>

          </section>
          ))}
          

        </div>
      </main>

      <FeedbackSection />
    </div>
  )
}