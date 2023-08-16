import { Checkbox , ThemeProvider } from '@mui/material'
import { cyan, blueGrey } from '@mui/material/colors'
import React, { useState, useCallback, useMemo } from 'react'
import MateriaTheme from '../Helpers/MaterialTheme'
import GenerateId from '../Helpers/GenerateID'

function NewTask({ allTasks, setAllTasks, addButtonTask, setAddButtonTask }) {
  const [taskValue, setTaskValue] = useState('')
  const [isChecked, setIsChecked] = useState(true)

  const handleEnter = useCallback((event) => {
    if( taskValue.trim() !== '' )  {
      if (event.key !== 'Enter') return

      const newTask = {
        task: taskValue.trim(),
        isChecked,
        id: GenerateId(),
      }
    setAllTasks([newTask, ...allTasks])
    setAddButtonTask(false)
    setTaskValue('')

    }
  }, [isChecked, taskValue, allTasks, setAllTasks, setAddButtonTask])

  const checkboxColor = useMemo(() => localStorage.getItem('theme') === 'light' ? blueGrey[900] : cyan[100], [])
  const checkboxDisabledColor = useMemo(() => localStorage.getItem('theme') === 'light' ? blueGrey[300] : cyan[900], [])

  return useMemo(() => (
    <ThemeProvider theme={MateriaTheme}>
        <Checkbox
          onChange={() => setIsChecked(!isChecked)}
          className='disabled:color-blanco disabled:dark:color-secundario'
          disabled
          sx={{
            color: checkboxColor,
            '&.Mui-checked': {
              color: checkboxColor,
            },
            '&.Mui-disabled': {
              color: checkboxDisabledColor,
            },
          }}
        />
        <textarea
          className='bg-transparent focus-visible:outline-none focus-visible:border-none resize-none overflow-auto py-2 w-full'
          placeholder='Task...'
          autoFocus
          onChange={(e) => setTaskValue(e.target.value)}
          value={taskValue}
          onKeyDown={handleEnter}
        />
    </ThemeProvider>
  ), [isChecked, taskValue, addButtonTask, setAddButtonTask, checkboxColor, checkboxDisabledColor, handleEnter])
}

export default React.memo(NewTask)
