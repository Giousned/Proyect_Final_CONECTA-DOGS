import React from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "../../store/AuthContext.js";
import useToastsContext from "../../store/ToastsContext.js";


const Protected = (props) => {

    const { storeAuth, actionsAuth } = useAuthContext();
    const { storeToast, actionsToast } = useToastsContext();

    const navigate = useNavigate();

    if (!storeAuth.userLog.token) {

        navigate("/");

        actionsToast.handleShownToast({ code: 403, msg: "¡No tiene los permisios necesarios, se le redirigirá a la página de inicio!" });

        return;
    }

    return (props.children);
}

export default Protected;