import React from "react";

const Alert = (props) => {
  const color = primary;

  if (props.data.code != 200) color = danger;

  return (
    <div aria-live="polite" aria-atomic="true" class="position-relative">
      <div class="toast-container top-0 end-0 p-3">
        <div
          className={`toast text-bg-${color} position-fixed bottom-0 end-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">¡Mensaje!</strong>
            <small>Now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{props.data.msg}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
