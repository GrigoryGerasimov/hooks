import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const validateWithoutCallback = data => console.log(data);
    const validateWithCallback = useCallback(data => console.log(data), []);
    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>{withoutCallback.current}</p>
            <p>{withCallback.current}</p>
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
