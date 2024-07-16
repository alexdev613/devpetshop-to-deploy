import { Swiper, SwiperSlide } from 'swiper/react';

import dog_and_cat from '../../../../assets/seu-amiguinho-pet.png';
import dog_cat_bird from '../../../../assets/cachorrogatocalopsita.png';
import agende from '../../../../assets/ligue-ja-pet.png';

interface BannerProps {
  id: string;
  title: string;
  image: string;
  color?: string;
}

const banners: BannerProps[] = [
  {id: '1', title: 'Cuide do seu melhor amigo com o que há de melhor! Confira nossas ofertas e produtos exclusivos para o seu pet!', image: dog_and_cat, color: "#81AAB8"},
  {id: '2', title: 'Temos serviço veterinário 24 horas, com profissionais experientes para melhor atender seu amiguinho!', image: dog_cat_bird, color: "#854C9D"},
  {id: '3', title: 'Com serviço a domicílio, vamos até seu pet e damos toda atenção e comodiadade necessária! Agende já!', image: agende, color: "#FF7A00"},
]

export function Banners() {
  return (
    <Swiper
      slidesPerView={1}
      navigation={false}
      pagination
      autoplay={{delay: 6000}}
    >
      {banners.map((item) => (
        <SwiperSlide key={item.id}>
        <section className={`flex w-full max-w-7xl flex-col sm:flex-row mx-auto max-h-[600px] text-center max-sm:mt-[100px] py-10 sm:py-4`} style={{ backgroundColor: item.color }}>
          <h2 className='flex flex-1 font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl sm:text-left mx-5 lg:mx-10 items-center justify-center'>
            {item.title}
          </h2>
          <div>
            <img className='flex flex-1 mx-auto lg:mx-10 max-h-96' src={item.image} alt="" />
          </div>
        </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

//#81AAB8 #854C9D #FFA600 #FF7A00