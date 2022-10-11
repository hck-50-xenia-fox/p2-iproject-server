PDFDocument = require('pdfkit');



function buildPDF(dataCallback, endCallback) {

    const doc = new PDFDocument();


    // doc.pipe(fs.createWriteStream('example.pdf'));

    doc.on(`data`, dataCallback)
    doc.on(`end`, endCallback)
    doc.fontSize(25).text(`Thank you for your purchase!`)
    doc.moveDown();
    doc.moveDown();
    doc.fontSize(12).text(`Lifetime subscription for XPense (tracker)`)
    doc.moveDown();
    doc.end()



}


module.exports = { buildPDF }

// // Import dependencies
// const fs = require("fs");
// const PDFDocument = require("./pdfkit-tables");

// // Load the patients 
// const expense = require("../data/expenses.json");

// // Create The PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a patient's file
// doc.pipe(fs.createWriteStream(`expenses.pdf`));

// // Add the header - https://pspdfkit.com/blog/2019/generate-invoices-pdfkit-node/
// doc
//     .image("logo.png", 50, 45, { width: 50 })
//     .fillColor("#444444")
//     .fontSize(20)
//     .text("Patient Information.", 110, 57)
//     .fontSize(10)
//     .text("725 Fowler Avenue", 200, 65, { align: "right" })
//     .text("Chamblee, GA 30341", 200, 80, { align: "right" })
//     .moveDown();

// // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
// const table = {
//     headers: ["Name", "Address", "Phone", "Birthday", "Email Address", "Blood Type", "Height", "Weight"],
//     rows: []
// };

// // Add the patients to the table
// for (const patient of patients) {
//     table.rows.push([patient.name, patient.address, patient.phone, patient.birthday, patient.emailAddress, patient.bloodType, patient.height, patient.weight])
// }

// // Draw the table
// doc.moveDown().table(table, 10, 125, { width: 590 });

// // Finalize the PDF and end the stream
// doc.end();