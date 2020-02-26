import React, {useState} from 'react';
import Header from './components/Header';
import MemberForm from './components/MemberForm';
import Members from './components/Member';

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: 'Jeff',
      email: 'jeff@gmail.com',
      role: 'Designer'
    },
    {
      id: 2,
      name: 'Beans',
      email: 'beans@gmail.com',
      role: 'Front End Developer'
    }
  ])

  const addNewMember = newMem => {
    const newGuy = {
      id: Date.now(),
      name: newMem.name,
      email: newMem.email,
      role: newMem.role
    };
    setMember([...member, newGuy]);
  }

  return (
    <div id="App">
      <Header />
      <MemberForm addNewMember={addNewMember} />
      <Members members={member} />
    </div>
  );
}

export default App;
