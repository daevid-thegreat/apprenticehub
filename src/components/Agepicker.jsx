import React, { useState } from "react";

const AgeRangePicker = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <label htmlFor="age-range">Age Range:</label>
      <select id="age-range" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an age range</option>
        <option value="18-24">18-24</option>
        <option value="25-34">25-34</option>
        <option value="35-44">35-44</option>
        <option value="45-54">45-54</option>
        <option value="55+">55+</option>
      </select>
    </form>
  );
};

export default AgeRangePicker;
