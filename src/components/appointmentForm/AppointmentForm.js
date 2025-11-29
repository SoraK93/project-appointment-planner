import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleChange = (e, func) => {
    func(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        />
        <label htmlFor="date">Appointment Date</label>
        <input
          id="date"
          name="date"
          type="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => handleChange(e, setDate)}
        />
        <label htmlFor="time">Appointment Time</label>
        <input
          id="time"
          name="time"
          type="time"
          value={time}
          onChange={(e) => handleChange(e, setTime)}
        />
        <ContactPicker value={contact} setContact={setContact} contacts={contacts} onChange={handleChange}  />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
