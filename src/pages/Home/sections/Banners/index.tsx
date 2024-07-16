import dog_and_cat from '../../../../assets/seu-amiguinho-pet.png';

export function Banners() {
  return (
    <section className="flex w-full max-w-7xl flex-col sm:flex-row mx-auto max-h-[600px] text-center max-sm:mt-[100px] bg-[#854C9D]">
      <h1 className='flex flex-1 font-bold text-gray-950 text-2xl sm:text-4xl sm:text-left m-5 items-center justify-center'>
        Cuide do seu melhor amigo com o que há de melhor! Confira nossas ofertas e produtos exclusivos para o seu pet!
      </h1>
      <div>
        <img className='flex flex-1' src={dog_and_cat} alt="" />
      </div>
    </section>
  )
}