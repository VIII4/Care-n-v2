import React from "react";
import ImageThumb from "./ImageThumb";
import "./style.css";

export default function IssueImageGallery({ images, issueDesc }) {
  return (
    <div className="row text-center p-0 my-2 w-auto">
      <div className="col">
        {images.map((imageUrl) => {
          return (
            <ImageThumb
              key={imageUrl}
              imageUrl={imageUrl}
              issueDesc={issueDesc}
            />
          );
        })}
      </div>
    </div>
  );
}
