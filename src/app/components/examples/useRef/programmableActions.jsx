import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider.jsx";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef, "+++", inputRef.current);
        inputRef.current.focus();
    };
    const handleChangeWidth = () => {
        inputRef.current.style.width = "300px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input
                ref={inputRef}
                type="email"
                id="email"
                className="form-control"
                name="email"
            />
            <button className="btn btn-outline-warning w-100 mx-auto" onClick={handleClick}>Button</button>
            <button className="btn btn-outline-info w-100 mx-auto" onClick={handleChangeWidth}>Change Width</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
