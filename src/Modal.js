import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from './context'
const Modal = () => {
  const {isModalOpen, closeModal} = useContext(AppContext)
  console.log(isModalOpen)
  return <div className={`${isModalOpen ?'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container'>
      <h3>Modal content</h3>
      <button className='close-modal-btn' onClick={closeModal}><FaTimes></FaTimes></button>
    </div>
  </div>
}

export default Modal
