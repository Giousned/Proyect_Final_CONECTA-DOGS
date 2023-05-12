import React, { useEffect} from "react";

import useToastsContext from "../../store/ToastsContext.js";


const CloudinaryUpload = (props) => {

  const { storeToast, actionsToast } = useToastsContext();

  useEffect(() => { 
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dx764kyct",
        uploadPreset: "oqoglkt1"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          props.setEstado(result.info.url);
          actionsToast.handleShownToast({ code: 200, msg: "¡Foto subida a la nube correctamente!" });
        }
      }
    );

    document.getElementById(`upload_widget_${props.idName}`).addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, [])

    return (
      <button id={`upload_widget_${props.idName}`} className="cloudinary-button w-20">
        Actualizar Foto
      </button>
    );
}

export default CloudinaryUpload;