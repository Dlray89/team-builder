import React from "react";

const TMembers = props => {
  return (
    <div>
      {props.TeamMember.map(Tmember => (
        <div className="TMember" key={Tmember.id}>
          <br />
          <h2>{Tmember.name}</h2>
          <br />

          <p>{Tmember.email}</p>
          <br />

          <p>{Tmember.phone}</p>
          <br />

          <p>{Tmember.position}</p>

        </div>
      ))}
    </div>
  );
};
export default TMembers;
