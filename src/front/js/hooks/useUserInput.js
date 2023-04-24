import React from "react";

import { useState } from "react";

const useUserInput = () =>{
    
    const [userInput, setUserInput] = useState({});

    const handleUserInput = (event) => {

        setUserInput((prev) => {
            const newUserInput = {... prev}
            newUserInput[event.target.name] = event.target.value;
            return newUserInput;
        })

    }

    const handleUserSelectDate = (event) => {

        setUserInput((prev) => {
            const newUserInput = {... prev}
            newUserInput[event.target.name] = event.target.selected;
            return newUserInput;
        })

    }

    const handleUserRadio = (event) => {

        setUserInput((prev) => {
            const newUserInput = {... prev}
            if(event.target.value) newUserInput[event.target.name] = event.target.name;
            return newUserInput;
        })
    }

    const handleUserCheck = (event) => {

        setUserInput((prev) => {
            const newUserInput = {... prev}
            newUserInput[event.target.name] = !event.target.value;
            return newUserInput;
        })
    } 

    const resetInput = setUserInput("");

    return {
        userInput,
        resetInput,
        handleUserInput,
        handleUserRadio,
        handleUserCheck,
        handleUserSelectDate,
    }
}

export default useUserInput;