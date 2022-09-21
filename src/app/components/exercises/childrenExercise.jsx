// В целях тренировки задание реализовал как посредством React.Children.map, так и через React.Children.toArray

import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const IndexingComponentWithMap = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const childComponentIndex = index + 1;
        const config = {
            ...child,
            index: childComponentIndex
        };
        return React.cloneElement(child, config);
    });
};

IndexingComponentWithMap.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const IndexingComponentWithToArray = ({ children }) => {
    return React.Children.toArray(children).map((child, index) => {
        const childComponentIndex = index + 1;
        const config = {
            ...child,
            index: childComponentIndex
        };
        return React.cloneElement(child, config);
    });
};

IndexingComponentWithToArray.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <IndexingComponentWithMap>
                <Component/>
                <Component/>
                <Component/>
            </IndexingComponentWithMap>
            <Divider/>
            <IndexingComponentWithToArray>
                <Component/>
                <Component/>
                <Component/>
            </IndexingComponentWithToArray>
        </CollapseWrapper>
    );
};

const Component = ({ index }) => {
    return <div>Компонент списка {index}</div>;
};

export default ChildrenExercise;

Component.propTypes = {
    index: PropTypes.number
};
