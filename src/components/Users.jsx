import React from "react";
import data from "../mock_api.js";
import UserCard from "./UserCard";
import styled from "styled-components"

const UserWrapper = styled.div`
  height: calc(100% - 15vh - 1em);
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  box-shadow: 0 7px 15px -8px rgba(25, 4, 69, 0.1);
  margin: 0 auto;
`;

const Users = () => {
  const userList = data.members.map(
    ({ id, real_name, tz, activity_periods, photo }) => (
      <UserCard key={id} name={real_name} tz={tz} activity={activity_periods} photo={photo}/>
    )
  );
  console.log(userList);

  return (
    <UserWrapper >
      {userList}
    </UserWrapper>
  );
};

export default Users;
