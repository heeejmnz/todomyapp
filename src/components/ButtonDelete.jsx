import { motion } from "framer-motion"
import { Button } from "@mui/material"
import { useEffect } from "react"

const ButtonDelete = ({ id, removeAll, deleteTask, setDeleteTask }) => {

  const handleRemove = () => {
    removeAll(id)
    setDeleteTask(!deleteTask)
  }

  useEffect(() => {
    if (deleteTask) {
      return setDeleteTask(!deleteTask)
    }
  }, [deleteTask])

  return (
    <motion.div 
      initial={deleteTask ? { x: 0 } : {x : 100}}
      animate={deleteTask ? { x: -100 } : {x : 0}}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      className="absolute z-20 right-0">
      <Button variant="contained" disableElevation color="error" size="medium" onClick={handleRemove}
        className="flex items-center justify-center w-10 h-10" >
        <i className="bx bx-trash text-center text-3xl"></i>
      </Button>
    </motion.div>
  )
}

export default ButtonDelete
