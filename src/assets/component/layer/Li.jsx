import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className,ListInnerItem}) => {
  return (
    <>
    <li className={className}>
        <Link to="">
            {ListInnerItem}
        
        </Link>
    </li>
    
    
    </>
  )
}

export default Li