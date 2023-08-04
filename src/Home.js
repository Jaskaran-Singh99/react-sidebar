import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useContext(AppContext)
  console.log(openSidebar)
  return <main>
    <div className='sidebar-toggle' onClick={openSidebar}>
      <FaBars></FaBars>
    </div>
    <div className='btn' onClick={openModal}>
      Show modal
    </div>
  </main>
}

export default Home
