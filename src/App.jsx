import React, { useState, useEffect } from 'react';
import './App.css'

import UniqueEditor from './UniqueEditor';

function App() {

  const [htmlValue, setHtmlValue] = useState('');
  const [cssValue, setCssValue] = useState('');
  const [javascriptValue, setJavascriptValue] = useState('');

  const [content, setContent] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setContent(
        `
          <!DOCTYPE html>
          <html>
            <head>
              <style>${cssValue}</style>
            </head>
            <body>

              ${htmlValue}
            
              <script>${javascriptValue}</script>
            </body>            
            
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)

  }, [htmlValue, cssValue, javascriptValue])

  return (
    <div className="App">
        
      <div className="editor-container">

        <UniqueEditor value={htmlValue} setValue={setHtmlValue} language="html"/>
        <UniqueEditor value={cssValue} setValue={setCssValue} language="css"/>
        <UniqueEditor value={javascriptValue} setValue={setJavascriptValue} language="javascript"/>
      </div>

      <div className="iframe-container">
        <iframe
            srcDoc={content}
            title="output"
            sandbox="allow-scripts"
            frameBorder="1"
            width="100%"
            height="100%"
        />
      </div>
      
    </div>
  )
}

export default App
