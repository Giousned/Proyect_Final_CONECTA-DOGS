import React, { useState } from "react";

import useToastsContext from "../../store/ToastsContext.js";

const Alert = () => {

  const { storeToast, actionsToast } = useToastsContext();

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        className={`toast fade ${storeToast.toastInfo.active} bg-${storeToast.toastInfo.color}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Mensaje</strong>
          <small>Now</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{storeToast.toastInfo.msg}</div>
      </div>
    </div>
  );
};

export default Alert;
