import React, { useState } from "react";

const Alert = (props) => {
  const [color, setColor] = useState("primary");

  // if (props?.data?.code != 200) setColor("danger");

  const show = "show"

  return (
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        class={`toast fade ${show}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
};

export default Alert;
