import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default  {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

const callback = action('accordion mode change event fired');

export  const ModeChanging = () => {
    return<UncontrolledAccordion titleValue={"Users"} />
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