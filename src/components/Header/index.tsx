import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  
  const {cartAmount} = useContext(CartContext);

  return (
    <header className="w-full px-4 bg-slate-200 ">
      <nav className="flex items-center max-w-7xl h-24 justify-between px-5 mx-auto select-none">
        <Link to="/" className="font-bold text-2xl">
          <h1 className="font-extrabold">
            <span className="max-360:text-2xl text-3xl sm:text-4xl bg-gradient-to-tr from-gray-950 to-blue-400 bg-clip-text text-transparent">
              PetShopDev
              <span className="max-300:hidden inline sm:hidden">
              🐾
              </span>
            </span>
            <span className="sm:inline hidden">
              🐶🐱🐤
            </span>
          </h1>
        </Link>

        <div className="flex gap-3 text-xs md:text-lg font-semibold text-slate-700">
          <Link to='#about' target="_parent">
            <h3>SOBRE</h3>
          </Link>
          <Link to='#services' target="_parent">
            <h3>SERVIÇOS</h3>
          </Link>
          <Link to='#products' target="_parent">
            <h3>LOJA</h3>
          </Link>
          <Link to='#feedback' target="_parent">
            <h3>DEPOIMENTOS</h3>
          </Link>
        </div>

        <Link to="/carrinho" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          {cartAmount > 0 && (
            <span className="absolute -top-3 -right-4 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white">
              {cartAmount}
            </span>
          )}
        </Link>

      </nav>
    </header>
  )
}