import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'Is a front end frmanework'
    },
    {
        title: 'Why is React?',
        content: 'it is popular'
    },
    {
        title: 'How to use',
        content: 'By creating components'
    }
];

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header/>
            <br/>
            <Route pathname="/">
                <Accordion items={items}/>
            </Route>

            <Route pathname="/list">
                <Search/>
            </Route>

            <Route pathname="/dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange = {setSelected} 
                    options={options}
                    label="Color"
                /> 
            </Route>

            <Route pathname="/translate">
                <Translate/>
            </Route>

            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <Dropdown
                selected={selected}
                onSelectedChange = {setSelected} 
                options={options}
                label="Color"
            /> */}
            {/* <Translate/> */}
        </div>
    );
}