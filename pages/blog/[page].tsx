import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
  const router = useRouter()
  const { page } = router.query
  
  return (
    <div>{page}</div>
  )
}

export default Page