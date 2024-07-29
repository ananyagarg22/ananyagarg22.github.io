import React, { useState, useEffect } from 'react';
import './CertificateSection.css';
import { certificatedata } from './certificateData';
import { Document, Page, pdfjs } from 'react-pdf';
import share from '../../assets/icons/share.png';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function CertificateSection() {
  return (
    <div id='certificate'>
      <div>
        <h2>Certificates</h2>
        <div id='listofcertificates'>
          {certificatedata.map(certificate => (
            <Certificate key={certificate.file_name} certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Certificate({ certificate }) {
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const loadPDF = async (certi) => {
      const module = await import(`./CertificateImages/${certi}`);
      setPdfFile(module.default);
    };

    loadPDF(certificate.file_name);
  }, [certificate.file_name]);

  return (
    <div id="certificates">
      <div id="certificate-title">{certificate.name}</div>
      {pdfFile ? (
        <Document file={pdfFile}>
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} scale={0.25}/>
        </Document>
      ) : (
        <div>Loading PDF...</div>
      )}
      <div id="certificate-date">
        {certificate.date}
      </div>
      <div id='certificate-issuing-auth'>
        {certificate.issuing_auth.map(authority => (
          <span key={authority}>{authority}</span>
        ))}
      </div>
      <div id="certificate-icons">
        <div id='open-icon'>
          <a href={pdfFile} target="_blank" rel="noreferrer">
            Open 
            <img src={share} height='25px' width='25px' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificateSection;
