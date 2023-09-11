import React from 'react'

const Litstitem = ({items,onSelect,ids,Editvideo}) => {
  return (
    <div>
        <li className="singleTodo">
      <span className="todoText">
        
       <p>{items}</p>
      </span>
      <button onClick={()=>{
        Editvideo(ids)
      }}>Edit</button>
      <button onClick={()=>{
        onSelect(ids)
      }}>Delete</button>
    </li>
    </div>
  )
}

export default Litstitem