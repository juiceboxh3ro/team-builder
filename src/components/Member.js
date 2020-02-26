import React from 'react'

const Members = ({members}) => {
  return (
    <div id="member-deck">
      {members.map(ele => (
        <div id="member-card" key={ele.id}>
          <h2>{ele.name}</h2>
          <p>{ele.email}</p>
          <p>{ele.role}</p>
          <button id="edit">Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Members;