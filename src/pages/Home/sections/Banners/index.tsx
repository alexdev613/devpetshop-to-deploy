import dog_and_cat from '../../../../assets/seu-amiguinho-pet.png';

export function Banners() {
  return (
    <section className="flex w-full max-w-7xl flex-col sm:flex-row mx-auto max-h-[600px] text-center max-sm:mt-[100px] bg-[#81AAB8] py-10 sm:py-4">
      <h1 className='flex flex-1 font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl sm:text-left mx-5 lg:mx-10 items-center justify-center'>
        Cuide do seu melhor amigo com o que há de melhor! Confira nossas ofertas e produtos exclusivos para o seu pet!
      </h1>
      <div>
        <img className='flex flex-1 mx-auto lg:mx-10' src={dog_and_cat} alt="" />
      </div>
    </section>
  )
}

//#81AAB8 #854C9D #FFA600 #FF7A00