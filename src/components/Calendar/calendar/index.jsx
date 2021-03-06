import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import "./styles.css";

export default function Calendar({ value, onChange, highlightedDates }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function buildCalendar(date) {
    const a = [];
    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

    const _date = startDay.clone().subtract(1, "day");

    highlightedDates.map((highlightedDay) => {
      return moment(highlightedDay).format("YYYY") === date.format("YYYY") &&
        moment(highlightedDay).format("MM") === date.format("MM")
        ? "highlight"
        : "";
    });

    while (_date.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => _date.add(1, "day").clone())
      );
    }
    return a;
  }

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  // function beforeToday(day) {
  //   return moment(day).isBefore(new Date(), "day");
  // }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  function dayStyles(day) {
    // // if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  // function currMonthName() {
  //   return value.format("MMMM");
  // }

  // function currYear() {
  //   return value.format("YYYY");
  // }

  return (
    <div className="calendar">
      <Header value={value} onChange={onChange} />

      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d, index) => (
            <div className="week"  key={index}>{d}</div>
          ))}
        </div>
        {calendar.map((week, wi) => (
          <div key={wi}>
            {week.map((day, di) => (
              <div
                key={di}
                className="day"
                onClick={() => {
                  // if (day < moment(new Date()).startOf("day")) return;
                  onChange(day);
                }}
              >
                <div className={dayStyles(day)} >
                  {day.format("D").toString()}
                  {highlightedDates.map((highlightedDay, ind) => {
                    return moment(highlightedDay).format("YYYY") ===
                      day.format("YYYY") &&
                      moment(highlightedDay).format("MM") === day.format("MM") && 
                      day.format("D") === moment(highlightedDay).format('D')
                  ? <span key={ind} role="img" aria-label="Activity">{" "}📣</span>
                      : "";
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
