import React from "react";

export const ContactPicker = ({ value, setContact, contacts, onChange}) => {
  const contactPicker = contacts.map((contact) => {
    return <option value={contact.name}>{contact.name}</option>;
  });

  return (
    <>
      <label htmlFor="contact">Contact</label>
      <select id="contact" name="contact" value={value} onChange={(e) => onChange(e, setContact)}>
        <option value="">No Contact Selected</option>
        {contactPicker}
      </select>
    </>
  );
};
