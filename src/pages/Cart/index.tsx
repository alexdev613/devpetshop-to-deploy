import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import { ModalOrder } from '../../components/modal/index';
import toast from 'react-hot-toast';
import { ScrollToTop } from '../../components/ScrollToTop';

import petshopdevAnimation from '../../assets/petshopdevAnimation.mp4';

export function Cart() {

  const { cart, total, addItemToCart, removeItemCart, qtdProducts, clearCart } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  const navigate = useNavigate()

  function handleCheckout() {
    setIsModalOpen(true);
  }

  function closeModal() {
    clearCart();

    toast.success("🐾 Sua compra efetuda com sucesso! 🐾", {
      duration: 5000,

      style: {
        borderRadius: 10,
        backgroundColor: "rgb(0, 125, 33)",
        fontWeight: 600,
        color: "navy",
        height: 48,
      },
    })
    
    setIsModalOpen(false);
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
      navigate('/');
    }, 5000);
  };

  if(showAnimation) {
    return (
      <div className='w-full flex flex-col justify-center items-center'>
        <ScrollToTop />
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <video
            src={petshopdevAnimation}
            autoPlay
            muted
            loop
            className='object-cover'
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <ScrollToTop />      
      <div className="w-full max-w-7xl mx-auto p-4">
        <h1 className="font-semibold text-3xl text-center text-slate-700/95 my-6 ">Carrinho de Compras <p>🐶🐱🐤</p></h1>

        <ModalOrder
          isOpen={isModalOpen}
          onClose={closeModal}
        >
        <h2 className='text-xl font-bold mb-4'>Pedido Realizado com Sucesso</h2>
        <button
          className='bg-green-500 text-slate-800 w-full px-4 py-2 mt-4 rounded'
          onClick={closeModal}
        >
          Fechar
        </button>
      </ModalOrder>

        {cart.length === 0 && (
          <div className='flex flex-col items-center justify-center min-w-7xl min-h-[40vh]'>
            <h3 className='mb-6 font-bold text-2xl text-center text-slate-600'>Ops, o seu carrinho está vazio...😔
              <br /><br />Adicione produtos no carrinho na seção produtos!
            </h3>
            <Link
              to="/#products"
              className='bg-slate-600 my-3 px-3 py-3 text-white font-semibold rounded-lg
              hover:bg-slate-500 transition duration-700'
            >
              Acessar Produtos
            </Link>
          </div>
        )}

        {cart.map((item) => (
          <section key={item.id} className="flex flex-col md:flex-row md:items-center items-center justify-center md:justify-between border-b-2 border-gray-300">
            <div className='w-full flex flex-col justify-center items-center md:justify-between md:w-fit overflow-visible'>
              <img
                src={item.cover}
                alt={item.title}
                className="w-48"
              />
              <p className='md:w-52 py-2 text-center text-xl font-semibold px-6 md:px-0 text-slate-700 md:whitespace-nowrap'>{item.title}</p>

            </div>

            <strong className='text-center text-slate-700 pb-3'>Preço Un: <br />
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </strong>

            <div className="flex items-center justify-center gap-2 border border-slate-500 py-1 px-1.5 rounded-lg">
              <button
                className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center"
                onClick={ () => removeItemCart(item) }
              >
                -
              </button>
              <span className="font-bold text-xl text-center text-slate-800">
                {item.amount}
              </span>
              <button
                className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center"
                onClick={ () => addItemToCart(item) }
              >
                +
              </button>
            </div>

            <strong className="md:float-right text-center text-slate-600 text-xl my-4">
              <span className='md:float-right'>SubTotal:</span>
              <p>
                {item.total.toLocaleString("pr-BR",{
                  style: "currency",
                  currency: "BRL"
               })}
              </p>
            </strong>

          </section>
        ))}

      </div>

      {cart.length !== 0 && (
        <div className='w-full flex flex-row-reverse px-3'>
          <div className='w-full sm:w-72 mt-6 border-slate-300 border-2 rounded py-2 px-3 mb-10'>
            <p className=''>Quantidade de produtos: {qtdProducts}</p>
            <p className="font-bold  mb-4">Total: {total}</p>
            <button
              onClick={handleCheckout}
              className='rounded-full bg-green-500 border-green-200 border-2 w-full py-1 mb-2'
            >
              Fechar Pedido
            </button>
          </div>
        </div>
      )}

    </div>
  )
}