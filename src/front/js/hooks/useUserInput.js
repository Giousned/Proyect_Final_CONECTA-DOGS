import React, { useState } from "react";

const useUserInput = (initialValue = {}) => {

  const [userInput, setUserInput] = useState(initialValue);

  const handleUserInput = (event) => {
    const target = event.target;

    setUserInput((prev) => {
      const newUserInput = { ...prev };
      newUserInput[target.name] = target.value;
      return newUserInput;
    });
  };

  const handleUserSelectDate = (date) => {
    setUserInput((prev) => {
      const newUserInput = { ...prev };
      newUserInput["Date"] = date;
      return newUserInput;
    });
  };

  const handleUserCheck = ({ target }) => {
    setUserInput((prev) => {
      const newUserInput = { ...prev };
      newUserInput[target.name] = target.checked;
      return newUserInput;
    });
  };

  const resetInput = (newValue = initialValue) => setUserInput(newValue);

  return {
    userInput,
    resetInput,
    handleUserInput,
    handleUserSelectDate,
    handleUserCheck,
  };
};

export default useUserInput;
