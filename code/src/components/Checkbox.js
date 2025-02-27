import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
    display: inline-block;
  width: 35px;
  height: 35px;
  background: ${props => props.checked ? '#4CD622' : '#FFF'};
  border-radius: 50%;
  transition: all 150ms;
  border: 1px solid #B5B5B5;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #FBF3D5;
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

export default Checkbox