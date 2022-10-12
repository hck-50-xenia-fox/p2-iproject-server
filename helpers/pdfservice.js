PDFDocument = require('pdfkit');



function buildPDF(dataCallback, endCallback) {
    console.log(req.user);

    const doc = new PDFDocument();

    doc.on(`data`, dataCallback)
    doc.on(`end`, endCallback)
    doc.fontSize(25).text(`Thank you for your purchase !${req.user.username}!`)
    doc.moveDown();
    doc.moveDown();
    doc.fontSize(12).text(`Lifetime subscription for XPense (tracker)`)
    doc.moveDown();
    doc.end()



}


module.exports = { buildPDF }
