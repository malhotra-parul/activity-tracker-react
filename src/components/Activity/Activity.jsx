import React, { Fragment } from "react";
import { Name, Underline, Grid, Data, NoActivity, DataHeader } from "./styles";
import moment from "moment";

const Activity = ({ activity, selectedDate }) => {
  const activities = activity
    .filter(
      (act) =>
        moment(act.start_time.slice(0, 12)).format("YYYY-MM-DD") ===
        selectedDate.format("YYYY-MM-DD")
    )
    .map((i) => (
      <Fragment key={i}>
        <Data>{i.start_time.slice(11)}</Data>
        <Data>{i.end_time.slice(11)}</Data>
      </Fragment>
    ));

  return (
    <div>
      <Underline>
        <Name>Activity Timeline</Name>
      </Underline>
      <Grid>
        <DataHeader>Start Time</DataHeader>
        <DataHeader>End Time</DataHeader>
        {activities.length > 0 ? activities : <NoActivity>No Activities for today!</NoActivity>}
      </Grid>
    </div>
  );
};

export default Activity;
