import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState(false);

    return (
        <div className={"App"}>
            <OnOff on={on} onClick={setOn}/>

            {/*<UncontrolledAccordion titleValue={"Меню"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange ={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontrolledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff onChange={setOn}/>  {on.toString()}

            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            {/*<p>Lorem ipsum dolor</p>*/}


            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
        </div>
    );
}

type PageTitlePopsType = {
       title: string
}

function PageTitle(props: PageTitlePopsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
