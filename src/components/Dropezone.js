import React, { useState } from "react";
// javascript plugin that creates nice dropzones for files
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const MyUploader = () => {
  const [images, setImages] = useState([null]);
  console.log(images);
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImages(file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      inputContent="Drag files or click to browse "
      accept="image/*"
    />
  );
};

export default MyUploader;
