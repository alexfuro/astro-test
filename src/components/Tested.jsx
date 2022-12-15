import React from "react";
import SampleList from "./SampleList.jsx";


export default function Tested(props) {
    return(
        <div>Hello World {Date.now()}
        <SampleList />
        </div>
    );
}
