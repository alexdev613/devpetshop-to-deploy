import { useEffect, useState, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { BsFillXCircleFill } from "react-icons/bs";

export function ScrollIcons() {
  const { cartAmount } = useContext(CartContext);

  const [showIcons, setShowIcons] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      if (!isClosed) {
        setShowIcons(true);
      }
    } else {
      setShowIcons(false);
      setIsClosed(false); // Reativar a exibição quando retornar ao topo
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClosed]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleClose() {
    setIsClosed(true);
    setShowIcons(false);
  }

  return (
    <div
      className={`fixed bottom-6 right-8 flex flex-col gap-3 ${
        showIcons ? "block" : "hidden"
      } rounded-full py-2 px-1 bg-white`}
    >
      <button
        className="-right-3 -top-4 absolute p-1 bg-white rounded-full"
        onClick={handleClose}
      >
        <BsFillXCircleFill size={20} color="red" />
      </button>

      <button className="p-3 bg-blue-500 rounded-full" onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </button>

      <Link to="/carrinho" className="relative p-3 bg-slate-400 rounded-full">
        <FiShoppingCart size={24} color="#121212" />
        {cartAmount > 0 && (
          <span className="absolute top-0 -right-1 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white">
            {cartAmount}
          </span>
        )}
      </Link>
    </div>
  );
}
