import React, { useState } from "react";

const EducationLevelPicker = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <label htmlFor="education-level">Education Level:</label>
      <select id="education-level" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an education level</option>
        <option value="high-school">High School</option>
        <option value="college">College</option>
        <option value="graduate-school">Graduate School</option>
      </select>
    </form>
  );
};

export default EducationLevelPicker;
