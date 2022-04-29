import * as React from "react";


export default interface BaseProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}