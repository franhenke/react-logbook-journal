import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '1rem',
  zIndex: 100,
}

const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div style={MODAL_STYLES}>
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  )
}

export default Modal
