import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ProductsProps } from '../Home';

import { CartContext } from '../../contexts/CartContext';

import toast from 'react-hot-toast';
import { productsData } from '../../data';
import { ScrollToTop } from '../../components/ScrollToTop';
import { ButtonAddItem } from '../../components/ButtonAddItem';

export function ProductDetails() {
  const { id } = useParams<{ id:string }>();
  const [product, setProduct] = useState<ProductsProps | undefined>();

  const navigate = useNavigate();

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const productItem = productsData.find((item) => item.id === id);
    if (productItem) {
      setProduct(productItem);
    } else {
      navigate("*");
    }
  }, [id, navigate]);

  function handleAddCartItem(product: ProductsProps) {
    toast.success("Produto adicionado no carrinho. 🐾", {
      style: {
        borderRadius: 10,
        backgroundColor: "rgb(0, 125, 33)",
        fontWeight: 600,
        color: "navy",
        height: 48
      }
    })
    addItemToCart(product)

    navigate("/carrinho");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-8">
        <ScrollToTop />
        
        {product && (
          <section className='flex items-center justify-center min-h-[60vh] flex-col max-w-4xl mx-auto shadow-2xl mb-2 gap-4 py-6'>
            <h2 className='text-slate-700 font-bold text-2xl text-center px-4'>{product.title}</h2>
            <img
              className='flex-1 w-full max-h-72 object-contain'
              src={product.cover}
              alt={product.title}
            />

            <p className='text-slate-800 text-xl text-justify mx-6 sm:mx-20'>{product?.description}</p>
              
            <strong className='text-slate-700 text-2xl font-bold'>
              {product.price.toLocaleString("pt-BR", {
                style: "currency", currency: "BRL"
              })}
            </strong>
              
            <ButtonAddItem onClick={() => handleAddCartItem(product)} label='Adicionar' />

          </section>
        )}
        
      </main>  
    </div>
  )
}