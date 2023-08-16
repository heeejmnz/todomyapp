import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Checkbox, ThemeProvider } from "@mui/material";
import { cyan, blueGrey } from "@mui/material/colors";
import ButtonDelete from "./ButtonDelete"
import MaterialTheme from "../Helpers/MaterialTheme"

const Task = ({ myTask, allTasks, setAllTasks }) => {
  const { task, isChecked, id } = myTask;
  const [checked, setChecked] = useState(isChecked);

  const handleChecked = () => {
    setChecked(!checked);
    const copyArray = allTasks.map((task) =>
      task.id === id ? { ...task, isChecked: !checked } : task
    );
    setAllTasks(copyArray);
  };

  const removeAll = (id) => {
    const taskToRemove = allTasks.find(
      (task) => task.isChecked === false && task.id === id
    )
    if (taskToRemove) {
      const updatedTasks = allTasks.filter((task) => task.id !== id)
      setAllTasks(updatedTasks)
    }
  }

  const textClasses = `pr-[38px] ${!checked ? "line-through" : ""}`;

  return (
    <ThemeProvider theme={MaterialTheme}>
      <div className="bg-[#E3E3E3]/40 dark:bg-task/25  rounded-[10px] flex items-center overflow-hidden relative">
        <motion.div
          className="div"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Checkbox
            checked={!checked}
            onChange={handleChecked}
            sx={{
              color:
                localStorage.getItem("theme") === "light"
                  ? blueGrey[900]
                  : cyan[100],
              "&.Mui-checked": {
                color:
                  localStorage.getItem("theme") === "light"
                    ? blueGrey[900]
                    : cyan[100],
              },
            }}
          />
        </motion.div>
        <p className={textClasses}>{task}</p>
        {!checked && (
          <ButtonDelete
            id={id}
            removeAll={removeAll}
            setDeleteTask={() => {}}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Task

