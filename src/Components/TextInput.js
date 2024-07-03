import React from 'react';
import { useState } from 'react';
import { jsPDF } from 'jspdf';

const TextInput = () => {

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
        doc.text(title , 10, 20);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(15);

        const descriptionY = 10 + 25;
        const descriptionLines = doc.splitTextToSize(desc, 180);

        descriptionLines.forEach((line, i) => {
            doc.text(line, 10, descriptionY + (i * 10));
        });

        doc.save(`${title}.pdf`);
    }


    return (
        <>
            <div id="start" className="p-20 py-24 border-t border-gray-200">
                <div className="flex flex-col space-y-10 bg-zinc-100/[0.5] rounded-xl p-10 shadow w-full">
                    <p className='text-2xl font-medium font-mono tracking-tighter'>Start with your Text now !</p>
                    <div className="flex flex-col bg-white rounded-xl shadow-lg w-full">
                        <ul className='flex items-center space-x-5 bg-zinc-200/[0.5] p-3 px-5 rounded-t-xl'>
                            <li><button onClick={downloadPDF} className="flex items-center space-x-3 p-2 px-5 rounded-full text-base hover:text-white hover:bg-blue-500 border border-blue-500 text-blue-500 hover:shadow"><i class="fa-solid fa-download text-sm"></i><p>Download PDF</p></button></li>
                        </ul>
                        <div className="px-5 rounded-b-full">
                            <textarea name="title" id="title" value={title} onChange={handleTitleChange} className='pt-5 px-5 border-b outline-none placeholder:text-zinc-300 placeholder:text-3xl text-3xl placeholder:font-bold font-bold w-full h-[5rem]' placeholder='Title'></textarea>
                            <textarea name="desc" id="desc" value={desc} onChange={handleDescChange} className='pt-2 px-5 outline-none placeholder:text-zinc-300 placeholder:text-xl rounded-b-xl w-full h-[50rem]' minLengthrows="30" placeholder="Description"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextInput
