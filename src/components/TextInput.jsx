import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Toaster, toast } from "react-hot-toast";
import { MdDownload } from "react-icons/md";
import { BiSolidEraser } from "react-icons/bi";
import logo from "../images/logo.png"; // Import your logo image

const TextInput = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set margins and padding
    const margin = 10; // Consistent margin for all sides
    const topPadding = 10; // Padding for top
    const bottomPadding = 5; // Padding for bottom
    const horizontalPadding = 5; // Reduced padding for left and right
    let yPos = margin + topPadding; // Start position after margin and top padding

    // Function to draw margin lines
    const drawMarginLines = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Draw margin lines
      doc.setDrawColor(200); // Light gray color for margin lines
      doc.setLineWidth(0.3); // Thin line width

      // Top margin line
      doc.line(margin, margin, pageWidth - margin, margin);
      // Bottom margin line
      doc.line(
        margin,
        pageHeight - margin,
        pageWidth - margin,
        pageHeight - margin
      );
      // Left margin line
      doc.line(margin, margin, margin, pageHeight - margin);
      // Right margin line
      doc.line(
        pageWidth - margin,
        margin,
        pageWidth - margin,
        pageHeight - margin
      );
    };

    // Function to add the brand logo with opacity
    const addBrandLogo = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const logoWidth = 50; // Width of the logo
      const logoHeight = 50; // Height of the logo
      const logoX = (pageWidth - logoWidth) / 2; // Center X position
      const logoY = (pageHeight - logoHeight) / 2; // Center Y position

      // Set opacity to 40% (0.4)
      doc.setGState(new doc.GState({ opacity: 0.13 }));

      // Add the logo image
      doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);

      // Reset opacity to default (1) after adding the logo
      doc.setGState(new doc.GState({ opacity: 1 }));
    };

    // Function to add the brand name at the top right corner, above the margin line
    const addBrandName = () => {
      const pageWidth = doc.internal.pageSize.getWidth();

      // Set font and color for the brand name
      doc.setFont("helvetica", "normal");
      doc.setFontSize(6); // Font size for the brand name
      doc.setTextColor(100, 100, 100); // Gray color for the brand name

      // Define the brand name
      const brandName = "Created by Gosy Converter !";

      // Calculate the position for the brand name
      const textWidth = doc.getTextWidth(brandName);
      const textX = pageWidth - margin - textWidth; // Top right X position
      const textY = 2; // Position the brand name above the margin line with bottom padding

      // Add the brand name
      doc.text(brandName, textX, textY);
    };

    // Function to reset styles for new pages
    const resetPageStyles = () => {
      // Set opacity to 1 before adding content
      doc.setGState(new doc.GState({ opacity: 1 }));

      // Set text color to dark gray for the title and description
      doc.setTextColor(30, 30, 30); // Dark gray for readability
    };

    // Function to set title styles
    const setTitleStyles = () => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18); // Larger title
    };

    // Function to set description styles
    const setDescriptionStyles = () => {
      doc.setFont("times", "normal");
      doc.setFontSize(11); // More readable text size
    };

    // Draw margin lines, add logo, and add brand name on the first page
    drawMarginLines();
    addBrandLogo();
    addBrandName();

    // Reset styles for the first page
    resetPageStyles();

    // Split title into lines that fit within the page width
    const pageWidth =
      doc.internal.pageSize.getWidth() - 2 * (margin + horizontalPadding);
    const titleLines = doc.splitTextToSize(title, pageWidth);

    // Set title styles for the title text
    setTitleStyles();

    // Add title lines to the PDF
    titleLines.forEach((line) => {
      if (yPos > doc.internal.pageSize.getHeight() - (margin + bottomPadding)) {
        doc.addPage(); // Add a new page if the current page is full
        yPos = margin + topPadding; // Reset yPos for the new page

        // Reapply margin lines, logo, and brand name for the new page
        drawMarginLines();
        addBrandLogo();
        addBrandName();

        // Reset styles for the new page
        resetPageStyles();

        // Set title styles for the title text
        setTitleStyles();
      }
      doc.text(line, margin + horizontalPadding, yPos);
      yPos += 7; // Add space after each title line
    });

    yPos += 8; // Extra gap before description
    setDescriptionStyles();

    // Set line height for description text
    const lineHeight = 4;

    // Split description into lines that fit within the page width
    const descriptionLines = doc.splitTextToSize(desc, pageWidth);

    // Add description lines to the PDF
    descriptionLines.forEach((line) => {
      if (yPos > doc.internal.pageSize.getHeight() - (margin + bottomPadding)) {
        doc.addPage();
        yPos = margin + topPadding;
        drawMarginLines();
        addBrandLogo();
        addBrandName();
        resetPageStyles();
        setDescriptionStyles();
      }

      // Bold: **text**
      if (line.startsWith("**") && line.endsWith("**")) {
        doc.setFont("times", "bold");
        doc.text(line.replace(/\*\*/g, ""), margin + horizontalPadding, yPos);
      }
      // Italic: *text*
      else if (line.startsWith("*") && line.endsWith("*")) {
        doc.setFont("times", "italic");
        doc.text(line.replace(/\*/g, ""), margin + horizontalPadding, yPos);
      }
      // List item: - item
      else if (line.trim().startsWith("- ")) {
        doc.setFont("times", "normal");
        doc.circle(margin + horizontalPadding - 2, yPos - 1.5, 0.5, "F");
        doc.text(
          line.trim().substring(2),
          margin + horizontalPadding + 2,
          yPos
        );
      }
      // Regular paragraph
      else {
        doc.setFont("times", "normal");
        doc.text(line, margin + horizontalPadding, yPos);
      }

      yPos += lineHeight;
    });

    // Save the PDF
    doc.save(`${title || "Untitled"}.pdf`);
    toast.success("PDF Downloaded Successfully !");
  };

  const clearAllText = () => {
    setTitle("");
    setDesc("");
    toast.success("All text cleared!");
  };

  return (
    <>
      <main className="px-6 py-16 md:px-12 lg:px-24 w-full">
        <Toaster position="top-right" reverseOrder={false} />
        <h1
          className={`text-4xl sm:text-5xl font-medium mb-2 ${
            props.mode === "light" ? "text-blue-600" : "text-white"
          }`}
        >
          TEXT TO PDF CONVERTER
        </h1>
        <p
          className={`text-base mb-6 ${
            props.mode === "light" ? "text-gray-700" : "text-zinc-400"
          }`}
        >
          Paste your content below and generate a clean, styled PDF instantly.
        </p>
        <div
          className={`flex flex-col ${
            props.mode === "light" ? "bg-white" : "bg-zinc-800"
          } rounded-xl shadow-lg w-full`}
        >
          <ul
            className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 ${
              props.mode === "light" ? "bg-zinc-200/[0.7]" : "bg-zinc-700/[0.6]"
            } p-3 px-5 rounded-t-xl`}
          >
            <li className="w-full sm:w-auto">
              <button
                onClick={downloadPDF}
                className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-md text-sm sm:text-base hover:text-white hover:bg-blue-500 border border-blue-500 text-blue-500 shadow-lg shadow-blue-500/[0.15] hover:shadow-blue-600 cursor-pointer"
              >
                <MdDownload className="w-4 h-4 sm:w-6 sm:h-6" />
                <p>Download PDF</p>
              </button>
            </li>
            <li className="w-full sm:w-auto">
              <button
                onClick={clearAllText}
                className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-md text-sm sm:text-base hover:text-white hover:bg-red-500 border border-red-500 text-red-500 shadow-lg shadow-red-500/[0.15] hover:shadow-red-600 cursor-pointer"
              >
                <BiSolidEraser className="w-4 h-4 sm:w-6 sm:h-6" />
                <p>Clear All Text</p>
              </button>
            </li>
          </ul>
          <div className="px-5 rounded-b-full">
            <input
              name="title"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className={`pt-4 px-4 text-xl sm:text-2xl py-3 ${
                props.mode === "light" ? "bg-white" : "bg-zinc-800"
              } border-b ${
                props.mode === "light" ? "border-zinc-200" : "border-zinc-600"
              } outline-none placeholder:text-zinc-500 placeholder:text-xl sm:placeholder:text-3xl placeholder:font-bold font-bold w-full h-[5rem]`}
              placeholder="Title"
            ></input>
            <textarea
              name="desc"
              id="desc"
              value={desc}
              onChange={handleDescChange}
              className={`pt-2 px-4 text-sm sm:text-base leading-relaxed rounded-b-2xl ${
                props.mode === "light" ? "bg-white" : "bg-zinc-800"
              } outline-none placeholder:text-zinc-500 placeholder:text-base sm:placeholder:text-xl w-full h-[40rem]`}
              minLength="10"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
      </main>
    </>
  );
};

export default TextInput;
