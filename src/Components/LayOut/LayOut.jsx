import React from 'react'
import Header from '../Header/Header'

function LayOut({chilren}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default LayOut