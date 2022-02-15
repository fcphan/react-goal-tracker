import './App.css';
import Goals from './components/Goals';
import Header from './components/Header';
import { useState } from 'react'

const App = () => {
  //Delete a goal from list
  const deleteGoal = (id) => {
    setGoalList(goalList.filter((goal) => goal.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setGoalList(
      goalList.map((goal) => goal.id === id ?
      {...goal, reminder: !goal.reminder} :
      goal)
      )
  }

  const [goalList, setGoalList] = useState([
    {
      id: 1,
      text: 'C10 Red Nose Armor',
      entryDate: 'Oct 13th at 1:00pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Buy TET Black Distortion Earrings',
      entryDate: 'Oct 13th at 1:00pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Buy TET Blackstar Crimson Glaives',
      entryDate: 'Oct 13th at 1:00pm',
      reminder: false,
    }
  ])
  return (
    <div className='container'>
      <Header />
      {goalList.length > 0 ?
      <Goals goalList={goalList} onDelete={deleteGoal} onToggle={toggleReminder}/> :
      'There are currently no goals.'}
    </div>
  );
}

export default App;
