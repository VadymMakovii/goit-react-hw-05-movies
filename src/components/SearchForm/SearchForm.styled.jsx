import styled from "styled-components";
import { Field, Form } from "formik";

export const Input = styled(Field)`
width: 300px;
padding: ${p => p.theme.space[1]}px;
font-size: ${p => p.theme.fontSizes.xs};
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.normal};
`;

export const StyledForm = styled(Form)`
display: flex;
align-items: center;
justify-content: flex-start;
gap: ${p => p.theme.space[2]}px;
`;

export const Button = styled.button`
padding: ${p => p.theme.space[1]}px;
font-size: ${p => p.theme.fontSizes.xs};
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.secondary};
color: ${p => p.theme.colors.white};
cursor: pointer;

&:hover,
&:focus {
    background-color: ${p => p.theme.colors.primary};
};
`