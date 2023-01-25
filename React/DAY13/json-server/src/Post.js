import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Post() {
  const [value, setValue] = useState("");

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"]["image"], //for image only
    ],
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={setValue}
        formats={formats}
      />

      <hr />
      <h1>Content</h1>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
}
