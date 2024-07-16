import banho from '../../../../assets/banho.jpg';
import consutoria_nutri from '../../../../assets/consultoria_nutricional.png';
import vacinacao from '../../../../assets/vacinacao.jpg';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  imageService: string;
}

const services: ServiceProps[] = [
  {id: "aa", title: "Banho & Tosa", description: "Cuide da limpeza e bem-estar do seu pet com nossos serviços de banho e tosa. Empregamos produtos de primeira linha e métodos especializados o conforto e a higiene do seu amigo de estimação.", imageService: banho},
  {id: "ab", title: "Consultoria Nutricional", description: "Nossos consultores de nutrição estão disponíveis para auxiliar na escolha da dieta ideal para o seu pet, assegurando uma alimentação equilibrada e nutritiva para a saúde do seu melhor amigo.", imageService: consutoria_nutri},
  {id: "ac", title: "Vacinação", description: "Garanta a segurança e a longevidade do seu pet com nosso serviço de vacinação. Fornecemos todas as imunizações essenciais para manter a saúde e a proteção do seu animalzinho de estimação.", imageService: vacinacao}, 
];

export function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-center mx-auto my-8 md:my-16 w-full max-w-7xl">
      <h1 className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl mt-4 text-slate-600 font-bold">
        <span>Nossos <span className="text-[#81AAB8]">serviços:</span></span>
      </h1>

      <div className="sm:flex sm:flex-row sm:flex-wrap sm:gap-4 justify-center items-center sm:m-auto">
        {services.map((service) => (
          <section key={service.id} className='flex flex-col mt-12 justify-center items-center max-w-[300px]'>
            <div className='w-[260px] h-[260px]'>
              <img className='rounded-full object-cover w-full h-full shadow-lg' src={service.imageService} alt="" />
            </div>
            <h3 className='font-bold text-2xl text-slate-800 mt-6'>{service.title}</h3>
            <p className='text-lg text-slate-900 p-4 text-justify'>{service.description}</p>
          </section>
        ))}
      </div>
    </section>
  )
}

//#81AAB8 #854C9D #FFA600 #FF7A00