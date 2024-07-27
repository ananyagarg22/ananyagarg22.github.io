import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import download from '../../assets/img/download.png';
import resume from '../../assets/AnanyaGarg_CV.pdf';
import './Resume.css';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../Background/Background';
// import FixedSideIcons from '../../components/Fixed-side-icons/Fixed-side-icons';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Background/>
      <Navbar/>
      {/* <FixedSideIcons/> */}
      <div id='download-section'>
        <div id='download-button'>
          <a href={resume} download='AnanyaGarg_CV'><img src={download} alt='' height='20px' width='20px'></img>&nbsp; Download</a>
        </div>
        <div id='resume-section'>
          <Document file={resume}>
            <Page size='A4' pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}
              scale={width > 786 ? 1.7 : 0.6}
            /> 
          </Document>
        </div>
        <div id='download-button'>
          <a href={resume} download='AnanyaGarg_CV'><img src={download} alt='' height='20px' width='20px'></img>&nbsp; Download</a>
        </div>
      </div>
    </div>
  )
}

export default Resume