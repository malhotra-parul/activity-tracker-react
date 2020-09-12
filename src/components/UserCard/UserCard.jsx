import React, { useState } from "react";
import Modal from "../Modal/Modal";
import moment from "moment";
import Calendar from "../Calendar/calendar/index";
import "../Calendar/styles.css";
import Activity from "../Activity/Activity";
import { Card, ProfilePicture, UserDetails, Span, Name } from "./styles.js";
import { activityDates } from "../../mock_api";

const UserCard = ({ name, tz, activity, photo }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment("2020-02-01"));

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (e) => {
    setShowModal(false);
  };

  return (
    <>
      <Card onClick={handleClick}>
        <ProfilePicture src={photo} alt="profile-pic" />
        <UserDetails>
          <Span>
            <Name>{name}</Name>
          </Span>
          <p>{tz}</p>
        </UserDetails>
      </Card>
      <Modal showModal={showModal} handleClose={handleClose}>
        <Calendar value={selectedDate} onChange={setSelectedDate} highlightedDates={activityDates}/>
        <Activity activity={activity} selectedDate={selectedDate}/>
      </Modal>
    </>
  );
};

export default UserCard;
