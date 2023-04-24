import React from "react";
import "../Contact/contact.css";

export const Contact = () => {
    return (
        <>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                CONTACTO
            </button> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">CONTACTO</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            FORMULARIO DE CONTACTO
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
                            <button type="button" class="btn btn-primary">ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}