import React, { useState } from 'react'

const MemberForm = props => {
  
  const [member, setMember] = useState(
    {
      id: '',
      name: '',
      email: '',
      role: ''
    }
  )

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  }
  
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
    <form autoComplete="off" id="member-form" onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input onChange={handleChanges} id="name" name="name" value={member.name} placeholder="Your Name" type="text" />
      <br />
      <br />

      <label htmlFor="email">Email</label>
      <input onChange={handleChanges} id="email" name="email" value={member.email} placeholder="Your Email" type="text" />
      <br />
      <br />

      <label htmlFor="role">Role</label>
      <input onChange={handleChanges} id="role" name="role" value={member.role} placeholder="Your Role" type="text" />
      <br />
      <br />

      <button type="submit">Add Member</button>
    </form>
  )
}

export default MemberForm;