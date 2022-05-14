import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

type Props = {
  name: string
  clickButton: () => void
}

const Button: FC<Props> = ({ name, clickButton }) => {
  return (
    <div className='my-2'>
      <a onClick={clickButton} className='border-2 rounded-full px-8 py-2 font-bold border-none bg-pink-500 text-white hover:bg-pink-400 hover:cursor-pointer transition shadow'>{name}</a>
    </div>
  )
}

export default Button