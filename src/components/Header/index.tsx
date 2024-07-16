import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import logo from '../../assets/logopet.png';

export function Header() {
  
  const {cartAmount} = useContext(CartContext);

  return (
    <header className="w-full px-4 bg-slate-300">
      <nav className="flex items-center max-w-7xl h-24 justify-between px-5 mx-auto select-none">
        <Link to="/" className="font-bold text-2xl flex justify-center items-center">
          <img className="max-h-24 max-w-24" src={logo} alt="" />
          <span className="hidden md:block">PetShopDev</span>
        </Link>

        <div className="flex gap-3 text-normal md:text-lg font-semibold text-slate-700">
          <Link to='#about' target="_parent" className="hover:bg-slate-400">
            <h3>SOBRE</h3>
          </Link>
          <Link to='#services' target="_parent" className="hover:bg-slate-400">
            <h3>SERVIÇOS</h3>
          </Link>
          <Link to='#products' target="_parent" className="hover:bg-slate-400">
            <h3>LOJA</h3>
          </Link>
          <Link to='#feedback' target="_parent" className="hover:bg-slate-400">
            <h3>DEPOIMENTOS</h3>
          </Link>
        </div>

        <div className="flex gap-3">
          <Link to='' className="relative">
            <FiHeart size={24} color="#121212" />
          </Link>
          
          <Link to="/carrinho" className="relative">
            <FiShoppingCart size={24} color="#121212" />
            {cartAmount > 0 && (
              <span className="absolute -top-3 -right-4 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white">
                {cartAmount}
              </span>
            )}
          </Link>
        </div>


      </nav>
    </header>
  )
}