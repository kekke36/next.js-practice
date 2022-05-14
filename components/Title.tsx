import React, { ReactNode } from 'react'

const Title = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <p className='border-b-2 border-pink-500 font-bold inline-block'>{children}</p>
    </div>
  )
}

export default Title