import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({active, text, Icon}) {     //props
  //sidebarOptions will be rendered after
  return (
    <div className = {'sidebarOptions ${active && "SidebarOptions--active"}'}>    
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions
