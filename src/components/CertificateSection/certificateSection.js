import React from 'react'
import './certificateSection.css';
import { certificatedata } from './certificatedata';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import share from '../../assets/icons/share.png';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function CertificateSection() {
  
  return (
    <div id='certificate'>
      <div>
        <h2>Certificates</h2>
        <div id='listofcertificates'>
          {
            certificatedata.map(certificate => (
              <Certificate certificate={certificate}></Certificate>
            ))
          }

        </div>
      </div>
    </div>
  )

}
function Certificate ({certificate}) {  
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  // const certificateImgPath = '../CertificateImages/'+certificate.file_name;

  const loadPDF = (certi) => {
    return import(`./CertificateImages/${certi}`).then(module => module.default);
  };
  return(
    <div id="certificates">
      <div id="certificate-icons">
        <div id='share-icon'> 
          <a href={loadPDF(certificate.file_name)}>
            <img src={share} height='30px' width='30px'alt=''></img>
          </a> 
        </div>
        {/* <div id='redirect-icon'><a href={link}><img id='redirect' src={redirecticon} height='20px' width='20px'></img></a></div> */}
      </div>
      <div id="certificate-title">{certificate.name}</div>
      {/* Inserting image of certi */}
      {/* <Document file= {loadPDF(certificate.file_name)}>
            <Page size='A4' pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}
              scale={width > 786 ? 1.7 : 0.6}
            /> 
          </Document> */}
      {/* <div id="project-tech-stack">
        {
          tech_stack.map(tech => (
            <img id='tech' src={tech} alt='' width='30px' height='30px'></img>
          ))
        }
      </div> */}
      <div id="certificate-date">
        {certificate.date}
      </div>
      <div id='certificate-issuing-auth'>
        {certificate.issuing_auth.map(authority => (
          <span>{authority}</span>
        ))}
      </div>
    </div>
  )
}

export default CertificateSection