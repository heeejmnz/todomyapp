import React, { useState, useEffect } from "react";
import List from "./components/List";
import Experience from "./Model/Experience";
import ButtonAdd from "./components/ButtonAdd";
import Menu from "./components/NavBar";

const App = () => {
  const [allTasks, setAllTasks] = useState(
    JSON.parse(localStorage.getItem('allTasks')) ?? [],
  )

  const [addButtonTask, setAddButtonTask] = useState(false);
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
  }, [allTasks])

  return (

    <div className="bg-blanco dark:bg-secundario w-full h-screen">
      <button
      type='button'
      className='absolute text-primario dark:text-blanco top-0 z-30 right-0 px-5 py-3 focus-visible:outline-none bg-transparent'
      onClick={() => setMenu(!menu)}>
        <i className='bx bx-menu text-5xl'></i>
      </button>
      <Menu menu={menu} setMenu={setMenu} />
      <List 
        allTasks={allTasks}
        setAllTasks={setAllTasks} 
        addButtonTask={addButtonTask} 
        setAddButtonTask={setAddButtonTask} 
      />
      <ButtonAdd addButtonTask={addButtonTask} setAddButtonTask={setAddButtonTask} />
      <Experience />
    </div>
  )
}

export default App;
