import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    toast.success("Converted to Uppercase!");
  };

  const handelLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    toast.success("Converted to Lowercase!");
  };

  const handelClearclick = () => {
    setText("");
    toast.success("Text cleared!");
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  };

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    toast.success("Extra spaces removed!");
  };

  return (
    <>
      <main id="start" className="px-6 py-16 md:px-12 lg:px-24 w-full">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="">
          <h1
            className={`text-4xl sm:text-5xl font-medium mb-3 ${
              props.mode === "light" ? "text-blue-600" : "text-white"
            }`}
          >
            TEXTIFY
          </h1>
          <p
            className={`text-base sm:text-lg mb-6 ${
              props.mode === "light" ? "text-gray-700" : "text-zinc-400"
            }`}
          >
            Word counter · Character counter · Remove extra spaces
          </p>

          <textarea
            className={`w-full h-60 p-4 rounded-lg border outline-none resize-none text-base placeholder:text-gray-400 transition focus:ring-2 ${
              props.mode === "light"
                ? "bg-white border-gray-300 focus:ring-blue-300"
                : "bg-zinc-950 border-zinc-700 focus:ring-blue-800 text-white"
            }`}
            id="mybox"
            value={text}
            onChange={handelOnChange}
            placeholder="Enter your text here..."
          ></textarea>

          <p className="text-pink-500 text-sm mt-2">
            * Enter the text to enable buttons
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="button"
              disabled={text.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
              onClick={handelUpclick}
            >
              Uppercase
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
              onClick={handelLoclick}
            >
              Lowercase
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
              onClick={handelCopy}
            >
              Copy
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
              onClick={handelClearclick}
            >
              Clear
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
              onClick={handelExtraSpaces}
            >
              Remove Spaces
            </button>
          </div>

          <div
            className={`mt-10 text-lg ${
              props.mode === "light" ? "text-gray-800" : "text-zinc-300"
            }`}
          >
            <p>
              {
                text.split(/\s+/).filter((element) => element.length !== 0)
                  .length
              }{" "}
              words & {text.length} characters
            </p>
            <p className="mt-1">
              {(
                0.008 *
                text.split(" ").filter((element) => element.length !== 0).length
              ).toFixed(2)}{" "}
              mins to read
            </p>
            <h4 className="font-semibold mt-4">Preview:</h4>
            <p className="mt-1 whitespace-pre-wrap">
              {text.length > 0 ? text : "Nothing to preview..."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
