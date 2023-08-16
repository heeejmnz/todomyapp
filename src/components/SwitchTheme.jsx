import { Switch } from "@mui/material"
import { useState, useEffect } from "react"

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const SwitchTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')
  const [mSwitch, setMswitch] = useState(localStorage.getItem('mSwitch') ?? false)

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark')
    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('mSwitch', mSwitch);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme, mSwitch])

  return (
    <Switch {...label} checked={mSwitch ? false : true} onClick={handleTheme} onChange={() => setMswitch(!mSwitch)} />
  )
}

export default SwitchTheme
