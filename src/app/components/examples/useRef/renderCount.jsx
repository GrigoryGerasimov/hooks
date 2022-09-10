import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider.jsx";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [renderSwitcher, setRenderSwitcher] = useState(false);
    const toggleRendering = () => {
        setRenderSwitcher(!renderSwitcher);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider/>
            <p>
                {renderCount.current}
            </p>
            <button className="btn btn-outline-dark w-100 mx-auto" onClick={toggleRendering}>Switch Render</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
