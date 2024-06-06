import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';


function App() {


  const [content, setContent] = useState({
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
</body>
</html>`,

  });

  const [visibleTabs, setVisibleTabs] = useState({
    html: true,
    css: false,
    js: false,
    console: false,
    output: false,
  });

  const [output, setOutput] = useState('');

  const handleTabClick = (tab) => {
    setVisibleTabs((prevVisibleTabs) => ({
      ...prevVisibleTabs,
      [tab]: !prevVisibleTabs[tab],
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [id]: value,
    }));
  };

  useEffect(() => {
    const { html, css, js } = content;
    const outputContent = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          (function() {
            try {
              ${js}
            } catch (e) {
              console.error(e);
            }
          })();
        </script>
      </body>
      </html>
    `;
    setOutput(outputContent);
  }, [content]);

  useEffect(() => {
    if (visibleTabs.output) {
      const iframe = document.getElementById('output-iframe');
      if (iframe) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(output);
        iframe.contentWindow.document.close();
      }
    }
  }, [output, visibleTabs.output]);

  return (
   
    <>
     <Header visibleTabs={visibleTabs} handleTabClick={handleTabClick}/>
     
      <div id="editors">
        
        
        {visibleTabs.html && (
          <textarea
            id="html"
            className="active"
            placeholder="HTML"
            
            value={content.html}
            onChange={handleChange}
          ></textarea>
        )}
        {visibleTabs.css && (
          <textarea
            id="css"
            className="active"
            placeholder="CSS"
            value={content.css}
            onChange={handleChange}
          ></textarea>
        )}
        {visibleTabs.js && (
        
          <textarea
            id="js"
            className="active"
            placeholder="JavaScript"
            value={content.js}
            onChange={handleChange}
          ></textarea>
        
        )}
        
        {visibleTabs.console && (
          
          <textarea
            id="console"
            className="active"
            placeholder="console"
            value={content.console}
            onChange={handleChange}
          ></textarea>
        )}
        {visibleTabs.output && (
          <div className="output-container" >
            <p>Output</p>
            <iframe id="output-iframe" title="Output" placeholder="Output"></iframe>
          </div>
        )}
      </div>
   
    </>
  );
}

export default App;
