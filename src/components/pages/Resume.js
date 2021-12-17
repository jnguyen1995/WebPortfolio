import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import { DownloadButton } from "../DownloadButton";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const { pdf } = props;

  return (
    <div className="resume-container">
      <div className="resume-pdf">
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="row">
          <Link
            to="/images/Jonathan-Nguyen-Resume.pdf"
            target="_blank"
            download
          >
            <div className="hero-btns">
              <DownloadButton
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                linkTo="images/Jonathan-Nguyen-Resume-2021.pdf"
              >
                DOWNLOAD
              </DownloadButton>
            </div>
          </Link>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              linkTo="portfolio"
            >
              PORTFOLIO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
