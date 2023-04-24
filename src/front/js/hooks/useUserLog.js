import React from "react";

import { useState } from "react";

const useUserLog = () => {
    
    const [userLog, setUserLog] = useState({
        logEmail,
        logPassword,
        remember: false,
        status: false});


    const handleStatusLog = () => {

        setUserLog((prev) => {
            const newUserLog = {... prev}
            newUserLog["status"] = !userLog.status;
            return newUserLog;
        })

    }

    const handleLogCheck = (event) => {

        setUserLog((prev) => {
            const newUserLog = {... prev}
            newUserLog[event.target.name] = !event.target.value;
            return newUserLog;
        })
    } 


    const handleUserLogInput = (event) => {

        setUserLog((prev) => {
            const newUserLog = {... prev}
            newUserLog[event.target.name] = event.target.value;
            return newUserLog;
        })
    } 

    const resetLog = setUserLog("");

    return {
        userLog,
        resetLog,
        handleStatusLog,
        handleLogCheck,
        handleUserLogInput,
    }
}

export default useUserLog;