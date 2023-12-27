'use client'
import { FormControlLabel, Switch } from '@mui/material'
import { useDarkMode } from '../lib/hooks'
import { RecoilRoot, useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { StateColorMode } from '../lib/atoms'
import { getInitialColorMode, setColorMode } from '@/app/lib/util'

export default function SwitchDarkMode() {
  const [checked, setChecked] = useState<boolean>(false)
  const [color, setColor] = useRecoilState(StateColorMode)

  useEffect(() => {
    const mode = getInitialColorMode()
    setChecked(mode === 'dark')
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let check = event.target.checked
    setChecked(check)
    setColorMode(check ? 'dark' : 'light')
    setColor(check ? 'dark' : 'light')
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer mb-3">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
      <span className="ms-3 text-sm font-medium ">
        {checked ? 'dark' : 'light'}
      </span>
    </label>
  )
}
