import React, {MouseEventHandler, useReducer, useState} from 'react';
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion (props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer,{collapsed: false})


        return <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed((!collapsed))} }/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT}) } }/>
            { !state.collapsed && <AccordionBody/>}
        </div>

}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => { props.onClick() } }>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

function edAccordion() {
    // define edAccordion component here
}

export default  UncontrolledAccordion;