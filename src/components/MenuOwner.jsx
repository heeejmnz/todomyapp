import OwnerImg from '../../public/Model/assets/owner.jpg'

function MenuOwner({ menu , setOwner }) {

  return (
    <div className='mt-48 px-5'>
      <button
        type='button'
        className='w-11 h-11 rounded-full cursor-none absolute top-[4rem] left-10'
        onClick={() => setOwner(!menu)}
      >
        <i className='bx bx-left-arrow-circle text-[50px]' ></i>
      </button>
      <h1 className='text-5xl font-black text-center mb-10'>Owner</h1>
      <img
        className='m-auto rounded-full w-[100px] h-[100px] object-cover border-solid border-white border-[1px]'
        src={OwnerImg}
        alt='Avatar Owner'
      />
      <h2 className='font-bold text-3xl text-center my-[22px]'>
        Hector Jiménez
      </h2>
      <ul className='flex flex-col gap-8 w-full'>
        <li className='text-primario dark:text-blanco'>
          <a
            href='https://www.youtube.com/channel/UCxfvYdRK2NZbXrhPYdv20Ng'
            target='_blank'
            className='flex flex-row items-center justify-center gap-3 bg-primario py-[9px] rounded-[10px] w-full'
            rel='noreferrer'
          >
            <p className='text-2xl font-bold text-blanco'>@nextra_jay</p>
            <i className='bx bxl-youtube text-blanco text-3xl' />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/Hctor7656'
            target='_blank'
            className='flex flex-row items-center justify-center gap-3 bg-primario py-[9px] rounded-[10px] w-full'
            rel='noreferrer'
          >
            <p className='text-2xl font-bold text-blanco'>@Hctor7656</p>
            <i className='bx bxl-twitter text-blanco text-3xl' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/codecraftz/'
            target='_blank'
            className='flex flex-row items-center justify-center gap-3 bg-primario py-[9px] rounded-[10px] w-full'
            rel='noreferrer'
          >
            <p className='text-2xl font-bold text-blanco'>@codecraftz</p>
            <i className='bx bxl-instagram-alt text-blanco text-3xl' />
          </a>
        </li>
      </ul>
      <p className='text-center mt-10 text-white/50'>
        © 2022 Hector Jiménez | Todos los derechos reservados.
      </p>
    </div>
  )
}
export default MenuOwner
