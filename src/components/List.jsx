import NewTasks from "./NewTask"
import Task from "./Task"
import { useState, useEffect } from 'react'
import { Reorder, motion } from "framer-motion"

const variants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -50, opacity: 0 },
}

const List = ({ allTasks, setAllTasks, addButtonTask, setAddButtonTask  }) => {
  const [isTasks, setIsTasks] = useState(false)

  useEffect(() => {
    setIsTasks(allTasks.length === 0);
  }, [allTasks]);

  return (
    <Reorder.Group
      axis='y'
      values={allTasks}
      onReorder={setAllTasks}
      className='bg-[#F8F2F2] dark:bg-primario h-[60vh] w-full lg:w-[450px] lg:h-[90%] lg:m-10 absolute z-20 bottom-0 lg:top-0 lg:right-0 rounded-t-xl lg:rounded-xl shadow-[0_-2px_30px_rgba(0,0,0,.2)] lg:shadow-2xl p-5 flex flex-col gap-5 overflow-x-hidden'
    >
      <h1 className="text-center font-black text-2xl xl:text-5xl">MyTasks</h1>

      {addButtonTask && (
      <motion.div
        variants={variants}
        initial='hidden'
        animate={addButtonTask ? 'visible' : 'hidden'}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 20,
          delay: 0.2,
          duration: 0.2,
        }}
        className='bg-[#E3E3E3] dark:bg-task/25 rounded-lg min-w-0 flex h-10'
      >
        <NewTasks
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          addButtonTask={addButtonTask}
          setAddButtonTask={setAddButtonTask}
        />
      </motion.div>
      )}
      {allTasks.length > 0 &&
        allTasks.map((myTask) => (
          <Reorder.Item key={myTask.id} value={myTask}>
            <Task
              key={myTask.id}
              myTask={myTask}
              allTasks={allTasks}
              setAllTasks={setAllTasks}
            />
          </Reorder.Item>
      ))}
      {isTasks === true && (
        <motion.div
          className='w-full h-full flex items-center justify-center'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className='font-medium text-xl text-center absolute xl:px-5'>
            ¡Woo-hoo! No cuentas con tareas pendientes 🥳
          </p>
        </motion.div>
      )}
    </Reorder.Group>
  )
}

export default List
