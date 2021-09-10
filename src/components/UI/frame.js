import React, { useState } from 'react'
import SidebarComponent from './sidebar'

export default function Frame({ children, screenName }) {
  const [isExpanded, setIsExpanded] = useState(
    localStorage.getItem('sidebar-expanded') === 'true' || false
  )
  const toggleSidebar = () => {
    if (isExpanded) {
      setIsExpanded(false)
      localStorage.removeItem('sidebar-expanded')
      return
    }
    setIsExpanded(true)
    localStorage.setItem('sidebar-expanded', 'true')
  }

  return (
    <div className="frame">
      <SidebarComponent expanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`frame__main ${isExpanded ? 'frame__main--expanded' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
