const ButtonMenu = ({menu, setMenu}) => {
  <button
  type='button'
  className='absolute text-primario dark:text-blanco top-0 z-50 right-0 px-5 py-3 focus-visible:outline-none bg-transparent'
  onClick={() => setMenu(!menu)}>
    <i className='bx bx-menu text-5xl'></i>
  </button>
}
export default ButtonMenu
