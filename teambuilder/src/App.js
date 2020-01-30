import React, { useState } from "react";
import TMembers from "./members";
import TMForm from "./TeamMemberForm";
function App() {
  const [TeamMember, setTeamMember] = useState([
    {
      id: 1,
      name: " Squad",
      email: "",
      phone: "",
      position: ""
    }
  ]);

  const addTeamMember = person => {
    const newTeamMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      phone: person.phone,
      position: person.position
    };
    setTeamMember([...TeamMember, newTeamMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TMForm addTeamMember={addTeamMember} />
      <TMembers TeamMember={TeamMember} />
    </div>
  );
}

export default App;
