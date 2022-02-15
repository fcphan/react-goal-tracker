import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Goal = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
    onClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
        style={{color:'red', cursor:'pointer'}}
        onClick={() => onDelete(task.id)}
        />
        </h3>
      <p>
        {task.entryDate}
      </p>
    </div>
  )
}

export default Goal
