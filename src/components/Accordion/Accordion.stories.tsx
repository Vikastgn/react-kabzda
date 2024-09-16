// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Accordion from './Accordion';
import React, {useState} from "react";
import {OnOff} from "../OnOff/OnOff";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some items was clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    items={
        [{title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
            {title: "Viktor", value: 4}
        ]}
    onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={"Users"}
        collapsed={value} onChange={() => setValue((!value))}
        items={
            [{title: "Dimych", value: 1},
                {title: "Valera", value: 2},
                {title: "Artem", value: 3},
                {title: "Viktor", value: 4}
            ]}
        onClick={(value) => { alert(`users with ID ${value} should be happy`)}}/>
}

// const meta: Meta<typeof Accordion > = {
//     component: Accordion,
// };
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
//
// export const  FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         collapsed: true,
//         onChange: () => {}
//     }
// }
//
// const onChangeHandler = action('onChange')
// export const CollapsedAccordion = () => {
//     return <Accordion
//         titleValue={"Collapsed Accordion"}
//         collapsed={true}
//         onChange ={onChangeHandler}/>
// }
// export const OpenedAccordion = () => {
//     return <Accordion
//         titleValue={"Opened Accordion"}
//         collapsed={false}
//         onChange ={() => {}}/>
// }
// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = useState(false)
//     return <Accordion
//         titleValue={"Accordion"}
//         collapsed={false}
//         onChange ={() => {
//             setCollapsed(!collapsed)
//         }}/>
// }