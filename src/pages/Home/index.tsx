import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import toast from "react-hot-toast";
import { productsData } from "../../data";
import { Services } from "./sections/OurServices";
import { Banners } from "./sections/Banners";
import { About } from "./sections/About";
import { FeedbackSection } from "./sections/FeedbackSection";
import { ScrollIcons } from "../../components/ScrollIcons";
import { ButtonAddItem } from "../../components/ButtonAddItem";

export interface ProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}


export function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
        color: "white",
        height: 48,
      },
      className: 'custom-toast'
    })
    addItemToCart(productItem);
  }

  return(
    <div>
      <ScrollIcons />
      <Banners />
      <About />
      <Services />
      <main id='products' className="bg-dogFoot w-full max-w-7xl px-4 mx-auto pt-8 pb-20">
        <h2 className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl mt-4 text-slate-600 font-bold my-10">
          <span>Nossos <span className="text-[#81AAB8]">Produtos</span></span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {products.map( (productItem) => (
            <section key={productItem.id} className="w-full border-2 border-slate-300/50 rounded-lg px-4 py-4 bg-gray-200/50">
              <Link to={`/produto/${productItem.id}`}>
                <img
                  className="w-full rounded-xl mb-2 border-2 border-gray-200"
                  src={productItem.cover}
                  alt={productItem.title}
                />
              <p className="font-medium mt-1 mb-2 text-center">{productItem.title}</p>
              </Link>

              <div className="flex flex-col gap-1 items-center justify-center">
                <strong>
                  {productItem.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                </strong>
                
                <ButtonAddItem onClick={() => handleAddItemToCart(productItem)} label={"Adicionar"} />

              </div>

            </section>
          ))}
          

        </div>
      </main>

      <FeedbackSection />
    </div>
  )
}