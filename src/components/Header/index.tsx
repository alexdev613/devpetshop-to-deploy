import { Link, useLocation, useMatch } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logopet.png';
import { BsXSquareFill } from "react-icons/bs";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  const location = useLocation();
  const matchHome = useMatch('/');
  const matchCart = useMatch('/carrinho');
  const matchProductDetails = useMatch('/produto/:id');

  // State para controlar a visibilidade dos links de menu
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Verifica se a rota atual é uma rota "not found":
  const isNotFoundPage = !matchHome && 
                         !matchCart &&  
                         !matchProductDetails &&
                         location.pathname !== '/';
  
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Função de verificação dos itens de menu por página:

  function getLinks() {
    if (isNotFoundPage) {
      return (
        <Link to='/' className="hover:bg-slate-400" onClick={closeMenu}>
          <h3>HOME</h3>
        </Link>
      );
    }

    if (matchCart) {
      return (
        <>
          <Link to='/' className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>HOME</h3>
          </Link>
          <Link to='/#products' className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>PRODUTOS</h3>
          </Link>
        </>
      );
    }

    if (matchProductDetails) {
      return (
        <>
          <Link to='/' className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>HOME</h3>
          </Link>
          <Link to='/carrinho' className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>CARRINHO</h3>
          </Link>
          <Link to='/#products' className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>LOJA</h3>
          </Link>
        </>
      );
    }

    // Links para a página Home
    if (matchHome) {
      return (
        <>
          <Link to='#about' target="_parent" className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>SOBRE</h3>
          </Link>
          <Link to='#services' target="_parent" className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>SERVIÇOS</h3>
          </Link>
          <Link to='#products' target="_parent" className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>LOJA</h3>
          </Link>
          <Link to='#feedback' target="_parent" className="hover:bg-slate-400" onClick={closeMenu}>
            <h3>DEPOIMENTOS</h3>
          </Link>
        </>
      );
    }

    // return null; garante que a função getLinks sempre retorna um valor, mesmo que nenhuma das condições anteriores seja atendida
    return null;
  };

  // Componente Header em si:

  return (
    <>
      <header className="w-full px-4 bg-slate-300 relative z-10">
        <nav className="flex items-center max-w-7xl h-24 justify-between px-5 mx-auto select-none">
          <Link to="/" className="font-bold text-2xl flex justify-center items-center">
            <img className="max-h-24 max-w-24" src={logo} alt="Logo" />
            <span className="hidden md:block">PetShopDev</span>
          </Link>

          <div className="hidden sm:flex gap-3 text-normal md:text-lg font-semibold text-slate-700">
            {getLinks()}
          </div>

          <div className="flex gap-3 items-center">

            <Link to="/carrinho" className="relative" onClick={closeMenu}>
              <FiShoppingCart size={24} color="#121212" />
              {cartAmount > 0 && (
                <span className="absolute -top-3 -right-4 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white">
                  {cartAmount}
                </span>
              )}
            </Link>
            
            {menuOpen ? (
              <BsXSquareFill size={25} className="sm:hidden cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FaBars size={25} className="sm:hidden cursor-pointer" onClick={toggleMenu} />
            )}
            
          </div>

        </nav>
      </header>

      {/* Menu "balão" à direita do header */}
      <div
        className={`absolute top-24 right-4 bg-slate-100 rounded-md font-semibold shadow-lg
        ${menuOpen ? 'block' : 'hidden'} px-6 py-3 sm:hidden z-20`}
      >
        <div className="max-w-7xl flex flex-col gap-3">
          {getLinks()}
        </div>
      </div>
    </>
  );
}
