import React from "react";

import useAppContext from "../../store/AppContext.js";


const ModalDelete = (props) => {

    const { store, actions} = useAppContext();

    const handleDelete = (e) => {
        e.preventDefault();

        actions.handleDeleteDog(e, props.id);
    }

  return (
    <div className="modal fade" id={`modal-${props.id}`} tabIndex="-1" aria-labelledby="modalDelete" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¿Estás segur@?</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>¡Si aceptas, tu perrito {props.name}, será eliminado!</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              ¡NO!
            </button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>
              ¡SÍ!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;