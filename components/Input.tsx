import React, { ReactNode } from 'react'

const Input = ({ children }: { children: ReactNode }) => {
  return (
    <div className='my-2'>
      <p className='text-left'>{children}</p>
      <input type="text" className='border border-black rounded' />
    </div>
  )
}

export default Input