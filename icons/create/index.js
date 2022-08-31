import React from "react";

function CreateIcon({...rest}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...rest}
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
      <path d="M14 2L14 8 20 8"></path>
      <path d="M12 18L12 12"></path>
      <path d="M9 15L15 15"></path>
    </svg>
  );
}

export default CreateIcon;