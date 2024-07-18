import { BsCart3 } from 'react-icons/bs';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export function ButtonAddItem({onClick, label}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-white bg-green-700 rounded-xl p-1.5 border-2 border-green-500 hover:bg-green-600 flex gap-2 px-4"
    >
      <span>{label}</span>
      <BsCart3 size={18} color='#FFF' />
    </button>
  )
}