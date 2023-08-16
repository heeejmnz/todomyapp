import { useEffect, useState } from 'react'
import MenuOwner from './MenuOwner'
import SwitchTheme from './SwitchTheme'

function Menu({ menu, setMenu }) {
  const [owner, setOwner] = useState(false)

  return (
    <>
      {menu ? (
        <div className='bg-[#000]/50 dark:bg-[#1F272C]/50 absolute w-full h-screen z-30' />
        ) : ('')
      }
      <nav
        className={`w-3/4 lg:w-4/12 h-screen fixed z-30 bg-blanco dark:bg-secundario rounded-[165px_0_0_0] shadow__menu transition-all duration-500 ease-out drop-shadow-[-6px_0_20px_rgba(0, 0, 0, 0.25)] ${
          !menu ? '-right-full' : 'right-0'
        }`}
      >
        {!owner ? (
          <>
            <button
              type='button'
              className='rounded-full w-11 h-11 flex items-center justify-center border border-primario dark:border-blanco absolute left-12 top-20'
              onClick={() => setMenu(!menu)}
            >
              <i className='bx bx-x text-5xl' />
            </button>
            <ul className='text-center mt-48 px-5'>
              <h2 className='text-[40px] font-black uppercase mb-4'>Menu</h2>
              <li className='mb-5'>
                <button type='button' className='boton__menu' 
                  onClick={() => setMenu(!menu)}
                >
                  TASKS <i className='bx bx-task' />
                </button>
              </li>
              <li className='mb-10'>
                <button
                  type='button'
                  className='boton__menu'
                  onClick={() => setOwner(!owner)}
                >
                  About Owner <i className='bx bxs-user-rectangle' />
                </button>
              </li>
              <h3 className='uppercase text-3xl font-black mb-3'>Settings</h3>
              <li>
                <p className='text-xl font-semibold'>Theme</p>
                <SwitchTheme />
              </li>
            </ul>
          </>
        ) : (
          <MenuOwner menu={menu} owner={owner} setOwner={setOwner} />
        )}
      </nav>
    </>
  )
}

export default Menu
