import React from "react";
import Component from "./someComponent";
import withLogin from "./withLogin.jsx";
import withPropsStyles from "./withPropsStyles.jsx";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const HOCExample = () => {
    const ComponentWithLogin = withLogin(Component);
    const ComponentWithPropsStyles = withPropsStyles(Component);
    const ComposedComponent = withPropsStyles(ComponentWithLogin);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider/>
                <ComponentWithLogin/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider/>
                <ComponentWithPropsStyles/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider/>
                <ComposedComponent/>
            </CardWrapper>
        </>
    );
};

export default HOCExample;
