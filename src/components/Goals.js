import React from 'react'
import Goal from './Goal'


const Goals = ({goalList, onDelete, onToggle}) => {


  return (
    <>
      {goalList.map((goal) => (
        <Goal key={goal.id} task={goal} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Goals
