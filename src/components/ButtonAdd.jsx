import { Button } from "@mui/material"
import { motion } from "framer-motion"
import MaterialTheme from "../Helpers/MaterialTheme"
import { ThemeProvider } from "@emotion/react"
import { memo } from "react"

const ButtonAdd = ({ addButtonTask, setAddButtonTask }) => {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <motion.div className="absolute bottom-10 right-5 z-20 drop-shadow-md"
        onClick={() => setAddButtonTask(!addButtonTask)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button variant="contained" color="secondary" disableElevation className="myBtn" style={{borderRadius:"50%"}}>
          <i className="bx bx-add-to-queue text-3xl"></i>
        </Button>
      </motion.div>
    </ThemeProvider>
  )
}

export default memo(ButtonAdd);
