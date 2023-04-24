import React from "react";

import { useState } from "react";

const useUserLog = () => {
    
    const [userLog, setUserLog] = useState({ remember: false, status: false});
    

    const handleUserLogInput = (event) => {

        setUserLog((prev) => {
            const newUserLog = {...prev}
            newUserLog[event.target.name] = event.target.value;
            return newUserLog;
        })
    } 
    
    const handleLogCheck = (event) => {

        setUserLog((prev) => {
            const newUserLog = {...prev}
            newUserLog[event.target.name] = !event.target.value;
            return newUserLog;
        })
    } 

    // const handleStatusLog = (event) => {

    //     setUserLog((prev) => {
    //         const newUserLog = {...prev}
    //         newUserLog["status"] = !.status;
    //         return newUserLog;
    //     })

    // }


    const resetLog = () => setUserLog("");

    return {
        userLog,
        resetLog,
        // setUserLog,
        handleLogCheck,
        handleUserLogInput,
    }
}

export default useUserLog;