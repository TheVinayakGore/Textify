import React from 'react';
import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Toaster, toast } from "react-hot-toast";
import { MdDownload } from "react-icons/md";
import { BiSolidEraser } from "react-icons/bi";

const TextInput = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(30);
        doc.text(title, 10, 20);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(15);

        const descriptionY = 10 + 25;
        const descriptionLines = doc.splitTextToSize(desc, 180);

        descriptionLines.forEach((line, i) => {
            doc.text(line, 10, descriptionY + (i * 10));
        });

        doc.save(`${title}.pdf`);
        toast.success("PDF Downloaded Successfully!");
    }

    const clearAllText = () => {
        setTitle('');
        setDesc('');
        toast.success("All text cleared!");
    }

    return (
        <>
            <main className="container m-auto py-20">
                <Toaster position="top-right" reverseOrder={false} />
                <h1 className={`text-5xl ${props.mode === 'light' ? 'text-blue-600' : 'text-white'} font-medium mb-1`}>TEXT TO PDF</h1>
                <p className={`text-lg font-light ${props.mode === 'light' ? 'text-black' : 'text-zinc-500'} mb-5`}>Just paste the text below and convert pdf in one click.</p>
                <div className={`flex flex-col space-y-10 ${props.mode === 'light' ? 'bg-zinc-100/[0.5]' : 'bg-zinc-900'} rounded-xl p-10 shadow w-full`}>
                    <p className='text-2xl font-medium font-mono tracking-tighter'>Start with your Text now !</p>
                    <div className={`flex flex-col ${props.mode === 'light' ? 'bg-white' : 'bg-zinc-800'} rounded-xl shadow-lg w-full`}>
                        <ul className={`flex items-center space-x-5 ${props.mode === 'light' ? 'bg-zinc-200/[0.7]' : 'bg-zinc-700/[0.6]'} p-3 px-5 rounded-t-xl`}>
                            <li><button onClick={downloadPDF} className="flex items-center space-x-3 p-2 pl-3 pr-4 rounded-full text-base hover:text-white hover:bg-blue-500 border border-blue-500 text-blue-500 shadow-lg shadow-blue-500/[0.15]"><MdDownload className='w-6 h-6' /><p>Download PDF</p></button></li>
                            <li><button onClick={clearAllText} className="flex items-center space-x-3 p-2 pl-3 pr-4 rounded-full text-base hover:text-white hover:bg-red-500 border border-red-500 text-red-500 shadow-lg shadow-red-500/[0.15]"><BiSolidEraser className='w-6 h-6' /><p>Clear All Text</p></button></li>
                        </ul>
                        <div className="px-5 rounded-b-full">
                            <textarea name="title" id="title" value={title} onChange={handleTitleChange} className={`pt-5 px-5 ${props.mode === 'light' ? 'bg-white' : 'bg-zinc-800'} border-b ${props.mode === 'light' ? 'border-zinc-200' : 'border-zinc-600'} outline-none placeholder:text-zinc-500 placeholder:text-3xl text-3xl placeholder:font-bold font-bold w-full h-[5rem]`} placeholder='Title'></textarea>
                            <textarea name="desc" id="desc" value={desc} onChange={handleDescChange} className={`pt-2 px-5 ${props.mode === 'light' ? 'bg-white' : 'bg-zinc-800'} outline-none placeholder:text-zinc-500 placeholder:text-xl rounded-b-xl w-full h-[40rem]`} minLengthrows="10" placeholder="Description"></textarea>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TextInput
