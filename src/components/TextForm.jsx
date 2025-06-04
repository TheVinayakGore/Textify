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
            <main id="start" className="p-10 lg:p-20 w-full">
                <Toaster position="top-right" reverseOrder={false} />
                <h1 className={`text-5xl ${props.mode === 'light' ? 'text-blue-600' : 'text-white'} font-medium mb-1`}>TEXTIFY</h1>
                <p className={`text-lg font-light ${props.mode === 'light' ? 'text-black' : 'text-zinc-500'} mb-5`}>Word counter | Character counter | Remove extra spaces</p>
                <div>
                    <div>
                        <textarea
                            className={`p-2 px-3 border ${props.mode === 'light' ? 'border-zinc-300' : 'border-zinc-700'} ${props.mode === 'light' ? 'bg-white' : 'bg-zinc-950'} placeholder:text-zinc-500 rounded-lg w-full`}
                            id="mybox"
                            value={text}
                            onChange={handelOnChange}
                            rows="15"
                            placeholder="Enter the text here"
                        ></textarea>
                    </div>
                    <p className="text-pink-400 text-sm">*Enter the text to enable buttons</p>
                    <div className="flex flex-wrap gap-2 my-3">
                        <button
                            type="button"
                            disabled={text.length === 0}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                            onClick={handelUpclick}
                        >
                            To Uppercase
                        </button>
                        <button
                            type="button"
                            disabled={text.length === 0}
                            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
                            onClick={handelLoclick}
                        >
                            To Lowercase
                        </button>
                        <button
                            type="button"
                            disabled={text.length === 0}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                            onClick={handelCopy}
                        >
                            Copy Text
                        </button>
                        <button
                            type="button"
                            disabled={text.length === 0}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                            onClick={handelClearclick}
                        >
                            Clear Text
                        </button>
                        <button
                            type="button"
                            disabled={text.length === 0}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
                            onClick={handelExtraSpaces}
                        >
                            Remove Extra-space
                        </button>
                    </div>
                </div>
                <div className={`my-3 text-xl ${props.mode === 'light' ? 'text-black' : 'text-zinc-400'}`}>
                    <p>
                        {text.split(/\s+/).filter((element) => element.length !== 0).length} words & {text.length} characters
                    </p>
                    <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} mins to read</p>
                    <h4 className="font-semibold mt-2">Preview text :</h4>
                    <p className="mt-1">{text.length > 0 ? text : "Nothing to Preview"}</p>
                </div>
            </main>
        </>
    );
}