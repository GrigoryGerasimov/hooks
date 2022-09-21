import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider.jsx";
const PrevStateExample = () => {
    const prevStateRef = useRef("{empty}");
    const [renderingTrigger, setRenderingTrigger] = useState("false");
    const toggleRendering = () => {
        setRenderingTrigger(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevStateRef.current = renderingTrigger;
    });
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <p>Previous State: {prevStateRef.current}</p>
            <p>Current State: {renderingTrigger}</p>
            <button className="btn btn-outline-danger w-100 mx-auto" onClick={toggleRendering}>Switch Render</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
