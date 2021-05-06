import PDFDocument from "pdfkit";

export const getReports = (req, res) => {
  const doc = new PDFDocument();
  doc.pipe(res);
  doc
    .text("And here is some wrapped text...", 100, 300)
    .font("Times-Roman", 13)
    .moveDown()
    .text("lorem", {
      width: 412,
      align: "justify",
      indent: 30,
      columns: 2,
      height: 300,
      ellipsis: true,
    }); // HTTP response
  doc.end();
  res.send(doc);
};
