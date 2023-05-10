import React from "react";

import useAuthContext from "../../store/AuthContext.js";


const Protected = (props) => {

    const { storeAuth, actionsAuth } = useAuthContext();

    return (
    <>
        {(storeAuth.userLog.token)
            ? props.children
            : null
        }
    </>
        );
}

export default Protected;