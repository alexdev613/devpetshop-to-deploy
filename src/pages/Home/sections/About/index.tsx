import cat_staring from '../../../../assets/gato-encarando.jpg';
import dog_market from '../../../../assets/dog-market.jpg';

export function About() {
  return (
    <section id='about' className="flex flex-col items-center justify-center mx-auto mt-8 w-full max-w-7xl">
      <h2 className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl mt-4 text-slate-600 font-bold my-10">
        <span>SOBRE <span className="text-[#81AAB8]">NÓS</span></span>
      </h2>

      <div className='flex flex-col md:px-8 px-6 gap-4 md:flex-row-reverse lg:ml-28 items-center'>
        <img className='md:max-w-[461px]' src={cat_staring} alt="" />
        <div className='flex flex-col mb-8 gap-4 text-slate-800 max-w-[512px] px-2'>
          <p className='font-semibold text-lg sm:text-xl '>Bem vindo ao PetShopDev!</p>
          <p className='text-base sm:text-lg '>
            Somos Alex e Betânia, um casal que fundou a PetShopDev em 2019 com a visão de estabelecer um lugar onde os animais de estimação recebessem um cuidado excepcional. Desde então, evoluímos e nos transformamos em uma comunidade dedicada ao bem-estar animal, com muitos clientes satisfeitos e pets felizes!
          </p>
        </div>
      </div>
      
      <br />
    
      <div className='flex flex-col md:px-8 px-6 gap-4 md:flex-row lg:ml-28 items-center'>
        <img className='md:max-w-[461px]' src={dog_market} alt="" />
        <div className='flex flex-col mb-8 gap-4 text-slate-800 max-w-[512px] px-2'>
          <p className='font-semibold text-lg sm:text-xl '>Dispomos de um ambiente seguro e confortável!</p>
          <p className='text-base sm:text-lg '>
            Temos nos dedicado a criar um ambiente onde os animais e seus donos possam encontrar tudo o que precisam em um só lugar! Estamos localizados na Rua: Silvestre Doméstico, 613. Venha nos visitar e descubra tudo o que podemos oferecer para tornar a vida do seu pet ainda mais segura, alegre e saudável!
          </p>
        </div>
      </div>
    </section>
  )
}