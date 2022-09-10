import React, { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => n ? n * factorial(n - 1) : 1;
const runFactorial = (n) => {
    console.log("render factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherValue, setOtherValue] = useState(false);
    const handleChangeColor = () => {
        setOtherValue(prevState => !prevState);
    };
    const factorialResult = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>{factorialResult}</p>
                <button
                    className="btn btn-dark w-50"
                    onClick={() => setValue(prevState => prevState + 100)}
                >
                    Increment by 100
                </button>
                <button
                    className="btn btn-outline-dark w-50"
                    onClick={() => setValue(prevState => prevState - 100)}
                >
                    Decrement by 100
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${otherValue ? "primary" : "secondary"} w-100`}
                    onClick={handleChangeColor}
                >
                    Other Button
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
