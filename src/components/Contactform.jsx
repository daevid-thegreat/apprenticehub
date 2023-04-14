import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to handle form submission
  };

  return (
    <form class="grid py-8" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="w-1/2 mb-8">
          <input
            className="border h-12 rounded py-2 px-3 "
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="w-1/2 mb-8">
          <input
            className="border h-12 rounded py-2 px-3"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="mb-8">
        <input
          className="block border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="mb-8">
        <textarea
          className="block border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          value={message}
          rows="6"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-primary text-secondary font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
