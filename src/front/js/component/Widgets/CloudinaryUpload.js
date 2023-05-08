import React, { Component } from "react";

class CloudinaryUpload extends Component {

  componentDidMount() {

    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dx764kyct",
        uploadPreset: "oqoglkt1"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );

    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload Photo
      </button>
    );
  }
}

export default CloudinaryUpload;