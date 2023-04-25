import React from "react";

import { useState } from "react";

const useUserLog = (initialValue = {remember: false, status: false}) => {
    
    const [userLog, setUserLog] = useState(initialValue);         // remember: false, status: false
    

    const handleUserLogInput = (event) => {

        const target = event.target

        setUserLog((prev) => {
            const newUserLog = {...prev}
            newUserLog[target.name] = target.value;
            return newUserLog;
        })
    } 
    
    const handleLogCheck = (event) => {

        const target = event.target

        console.log(target)

        setUserLog((prev) => {
            const newUserLog = {...prev}
            newUserLog[target.name] = target.checked;
            return newUserLog;
        })
    } 

    const handleStatusLog = () => {

        setUserLog((prev) => {
            const newUserLog = {...prev}
            newUserLog["status"] = !newUserLog.status;
            return newUserLog;
        })

    }


    const resetLog = (newValue = initialValue) => setUserLog(newValue);

    return {
        userLog,
        resetLog,
        handleLogCheck,
        handleUserLogInput,
        handleStatusLog,
    }
}

export default useUserLog;