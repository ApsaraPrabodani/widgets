import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Africans',
        value: 'af'
    },
    {
        label: 'Arabics',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            
            <Dropdown 
            selected={language}
            onSelectedChange = {setLanguage} 
            options={options}
            label="Language"/>

            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;