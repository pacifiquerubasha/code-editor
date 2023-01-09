import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';

function UniqueEditor({value, setValue, language}) {

    /**
     * 
     * @param {*} editor 
     * @param {*} data 
     * @param {*} value 
     */
    const handleChange = (editor, data, value) => {
        setValue(value);
    }

    return (
        <div className={`editor editor-${language}`}>
            <div className="editor-title">{language.toUpperCase()}</div>
            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value= {value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'night',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                }}    
                
            />
            
        </div>
    );
}

export default UniqueEditor;