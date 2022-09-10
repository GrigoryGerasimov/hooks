import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const handleChange = ({ name, value }) => {
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return React.Children.map(children, child => {
        const config = { ...child.props, onChange: handleChange, value: data[child.props.name] || "" };
        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField label="email" name="email"/>
                <TextField type="password" label="password" name="password"/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
