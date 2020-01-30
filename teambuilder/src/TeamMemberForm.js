import React, { useState } from "react";

const TMForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    position: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addTeamMember(member);
    setMember({ name: "", email: "", phone: "", position: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Full Name</label>
      <br />
      <br />
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <br />
      <label htmlFor="email"> Email</label>
      <br />

      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <br />
      <label htmlFor="phone"> Phone Number</label>
      <br />
      <input
        id="phone"
        type="text"
        name="phone"
        onChange={handleChanges}
        value={member.phone}
      />
      <br />

      <label htmlFor="position"> Position</label>
      <br />

      <input
        id="position"
        type="text"
        name="position"
        onChange={handleChanges}
        value={member.position}
      />
      <br />

      <button type="submit">Add Team Member </button>
    </form>
  );
};
export default TMForm;
