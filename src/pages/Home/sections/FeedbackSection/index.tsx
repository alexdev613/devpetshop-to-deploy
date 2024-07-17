import { Swiper, SwiperSlide } from 'swiper/react';
import banho from '../../../../assets/banho.jpg'
import vanessaGepeto from '../../../../assets/vanessaGepeto.jpg'
import jacobCohen from '../../../../assets/jacobCohen.jpg'
import alexHeisenberg from '../../../../assets/alexDeveloper.jpg'


interface FeedbackProps {
  id: string;
  name: string;
  feedback: string;
  photo: string;
}

const feedbackCard: FeedbackProps[] = [
  {
    id: "0",
    name: "Alex Heisenberg",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quia dignissimos alias aliquam, consequatur soluta enim praesentium ipsam atque libero corrupti similique ex commodi distinctio iusto accusamus dolore voluptas quaerat.",
    photo: alexHeisenberg
  },
  {
    id: "1",
    name: "Vanessa Gepeto",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quia dignissimos alias aliquam, consequatur soluta enim praesentium ipsam atque libero corrupti similique ex commodi distinctio iusto accusamus dolore voluptas quaerat.",
    photo: vanessaGepeto
  },
  {
    id: "2",
    name: "Jacob Cohen",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quia dignissimos alias aliquam, consequatur soluta enim praesentium ipsam atque libero corrupti similique ex commodi distinctio iusto accusamus dolore voluptas quaerat.",
    photo: jacobCohen
  },
  {
    id: "3",
    name: "Tobby",
    feedback: "Au auu, au au auuu, awooooowoow au au auuauau aua u au aua u uauau au auauaaaauuuuuuuuuua ua ua uu au uau ua uua uu  uauu au uuau uau uauuuau uaua uuauau a a uu ua uua uua uaua, ua uau uau ua uauaua auu au.... au au au!",
    photo: banho
  },
]

export function FeedbackSection() {
  return (
    <section className="bg-dogFoot w-full max-w-7xl px-4 mx-auto my-8 py-6 pb-20 flex flex-col items-center justify-center">
      <div id="feedback" className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl mt-4 my-8 text-slate-600 font-bold">
        <h2>DEPOIMENTOS</h2>        
      </div>
      <Swiper
        slidesPerView={1}
        autoplay={{delay: 7200}}
        className='w-[20rem] mx-0'
      >
        {feedbackCard.map((item) => (
          <SwiperSlide key={item.id} className="px-4 py-6">
            <div className="relative text-center flex flex-col max-w-[18rem] px-0 py-5 rounded-3xl border bg-slate-300/30">
              <img
                className="rounded-full border border-slate-50 w-[9rem] mx-auto h-[9rem] mb-4 object-cover"
                src={item.photo}
                alt={`Foto do cliente ${item.name}`}
              />
              <h3 className='font-bold text-slate-900 text-xl mb-1'>{item.name}</h3>
              <p className='text-justify mx-3'>{item.feedback}</p>
            </div>
          </SwiperSlide>
      ))}

      </Swiper>
      
    </section>
  )
}