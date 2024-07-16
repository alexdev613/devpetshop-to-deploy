import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-500 text-white p-8">
      <div className="flex flex-col sm:justify-between items-center text-left max-w-7xl m-auto">
        
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-12'>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl mb-2">Contato</h3>
            <h4 className='font-semibold'>Endereço: <span className='font-normal'>Rua Silvestre Doméstico, 613. Bairro PetShopBoys.</span></h4>
            <p> Cidade: Canina - SP</p>
            <h4 className='font-semibold'>Telefone: <span className='font-normal'>(87) 98115-7269</span></h4>
            <h4 className='font-semibold'>Horário de funcionamento: </h4>
            <p>Segunda a Sexta: 8:00 - 18:00</p>
            <p>Sábado: 9:00 - 14:00</p>
            <p>Domingo: Fechado</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl mb-2">Links</h3>
            <Link to={'#about'}>
              <p className='font-bold'>Sobre nós:
                <span className='font-normal'> Conheça mais sobre nós!</span>
              </p>
            </Link>
            
            <Link to={'#products'}>
              <p className='font-bold'>Produtos:
                <span className='font-normal'> Explore nossa loja online</span>
              </p>
            </Link>
            <Link to={'#services'}>
              <p className='font-bold'>Serviços:
                <span className='font-normal'> Veja todos os serviços que oferecemos.</span>
              </p>
            </Link>
            
            <Link to={'#feedback'}>
              <p className='font-bold'>Depoimentos:
                <span className='font-normal'> Veja o que nossos clientes dizem.</span>
              </p>
            </Link>
            
            <Link to={''}>
              <p className='font-bold'>Blog:
                <span className='font-normal'> Novidades sobre o mundo dos pets.</span>
              </p>
            </Link>
            
            <Link to={''}>
              <p className='font-bold'>Contato:
                <span className='font-normal'> Fale conosco e agende um horário!</span>
              </p>
            </Link>
          </div>
        
        </div>

      </div>
      <div className='flex flex-col justify-center items-center py-4'>
        <div className='flex flex-wrap gap-4 justify-center mt-8'>
          <FaFacebook size={32} color='white' />
          <FaInstagram size={32} color='white' />
          <FaTwitter size={32} color='white' />
          <FaYoutube size={32} color='white' />
          <FaWhatsapp size={32} color='white' />
        </div>
        <div className='h-[1px] w-11/12 sm:w-9/12 bg-white my-4'></div>
        <p className='text-center'>
          © 2024 - PetShopDev. Todos os direitos reservados.
        </p>
        <p className='text-center my-1'>
          <Link to="https://www.linkedin.com/in/alexjfnascimento/" target='_blank'>
            Desenvolvido por Alex Nascimento
          </Link>
        </p>
      </div>

    </footer>
  )
}