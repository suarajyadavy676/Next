import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <h1 className='text-center text-4xl'>Navbar</h1>
      <Link href="/about"> click</Link>
    </div>
  )
}

export default Navbar
