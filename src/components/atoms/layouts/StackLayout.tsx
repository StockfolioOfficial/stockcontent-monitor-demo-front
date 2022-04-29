import styled, {css, FlattenSimpleInterpolation} from "styled-components";
import * as React from "react";
import BaseLayoutProps from "../../types/BaseLayoutProps";

export interface StackLayoutProps extends BaseLayoutProps {
    orientation: 'horizontal' | 'vertical';
}

function styling({ orientation }: StackLayoutProps) {
    let style: FlattenSimpleInterpolation;
    switch (orientation) {
        case "horizontal": style = css`
                  flex-direction: row;
                `;
            break;
        case "vertical": style = css`
                    flex-direction: column;
                `;
            break;
    }

    return style;
}

const Styled = styled.div<StackLayoutProps>`
  display: flex;
  ${styling}
`;

export default function StackLayout(props: StackLayoutProps) {
    return <Styled { ...props} />
}


