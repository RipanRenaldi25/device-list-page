import React from 'react'
import GroupCardAdd from './GroupCardAdd'

function GroupListContainer() {
  return (
    <div className="group-container grid-cols-5 p-4">
      <GroupCardAdd groupName="GROUP PKU" sipNumber="0000" participant={8} Active/>
    </div>
  )
}

export default GroupListContainer