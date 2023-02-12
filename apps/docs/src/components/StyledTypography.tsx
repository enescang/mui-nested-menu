import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { Typography } from 'ui';

const StyledParagraph = styled(Typography)`
    margin-bottom: ${({ theme }) => `calc(${theme.sizes.padding} * 4)`};
`;

type PProps = {
    children?: ReactNode;
};

export const P: FC<PProps> = ({ children, ...props }) => {
    return (
        <StyledParagraph variant="body" {...props}>
            {children}
        </StyledParagraph>
    );
};

const StyledCode = styled(Typography)`
    ${({ theme }) => css`
        background-color: #002740;
        border-radius: ${theme.sizes.borderRadiusSmall};
        color: white;
        display: inline-block;
        font-family: monospace;
        line-height: unset;
        min-height: 1.2rem;
        padding: 0.5px 2px;
    `};
`;

type CodeProps = {
    children?: ReactNode;
};

export const Code: FC<CodeProps> = ({ children, ...props }) => {
    return (
        <StyledCode variant="body" {...props}>
            {children}
        </StyledCode>
    );
};

const StyledSubheading = styled(Typography)`
    margin-top: 24px;
`;

type SubheadingProps = {
    children?: ReactNode;
};

export const Subheading: FC<SubheadingProps> = ({ children, ...props }) => {
    return (
        <StyledSubheading variant="h3" {...props}>
            {children}
        </StyledSubheading>
    );
};
