import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleChange = (e, setFunc) => {
    setFunc(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          autoComplete="name"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="^\+[1-9]{1,2}[0-9]{7,14}$"
          value={phone}
          onChange={(e) => handleChange(e, setPhone)}
          autoComplete="tel"
        />
        <label htmlFor="email">E-mail Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
          autoComplete="email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
