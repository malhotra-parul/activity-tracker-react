import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 55vh;
  width: 400px;
  border: 1px solid #e7f5fd;
  box-shadow: 0 7px 15px 3px rgba(25, 4, 69, 0.1);
  grid-column: auto;
  justify-self: center;
  align-self: center;
  transition: all 0.05s ease-in-out;

  &:hover {
    box-shadow: 0 7px 15px 7px rgba(25, 4, 69, 0.1);
  }
`;

const ProfilePicture = styled.img`
  height: 35vh;
  padding: 1em;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
`;

const Name = styled.p`
  font-size: 1.5em;
  padding-bottom: 0.5em;
  color: #1a0e45;
  background-color: "#F9A826";
  background-position: 100% 100%;
`;

const Span = styled.span`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 83%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 110% 88%;
  }`

  const handleClick = (e) => {
      
      console.log(e.target);
  }

const UserCard = ({ name, tz, activity, photo }) => {
  return (
    <Card onClick={handleClick}>
      <ProfilePicture src={photo} alt="profile-pic" />
      <UserDetails>     
          <Span><Name>{name}</Name></Span>
        <p>{tz}</p>
      </UserDetails>
    </Card>
  );
};

export default UserCard;
