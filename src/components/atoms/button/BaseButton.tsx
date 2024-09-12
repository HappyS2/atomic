import React, { JSX } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  maxWidth?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: string | JSX.Element;
  className?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  boxShadow?: string;
  value?: string;
  name?: string;
}

const StyledButton = styled.button<BaseButtonProps>`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => (props.color ? props.color : props.theme.colors.txt500)};
  border: none;
  border-width: ${(props) => (props.borderWidth ? props.borderWidth : '1px')};
  border-color: ${(props) => (props.borderColor ? props.borderColor : props.theme.colors.txt500)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '.5rem')};
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : '.5rem')};
  flex-shrink: 0;
  transition: all 0.5s;
  padding: ${(props) => props.padding};
  cursor: pointer;

  /* 양쪽 끝이 둥그런 모양 */
  &.round {
    border-radius: 10rem;
  }
  /* 보더 생성 */
  &.border {
    border: 1px solid ${(props) => (props.color ? props.color : props.theme.colors.gray800)};
  }
  /* #191919 색상 */
  &.dark600 {
    color: ${(props) => (props.color ? props.color : props.theme.colors.txt600)};
    border-color: ${(props) => (props.color ? props.color : props.theme.colors.txt600)};
  }
`;

const BaseButton = ({
  type = 'button',
  width = 'auto',
  height = 'auto',
  maxWidth,
  marginTop,
  marginLeft,
  marginBottom,
  backgroundColor,
  fontSize = '1.3rem',
  fontWeight = '500',
  padding = '.5rem 1rem',
  color,
  border,
  borderRadius,
  boxShadow,
  onClick,
  icon,
  disabled,
  className,
  children,
  value,
  name,
}: BaseButtonProps) => {
  return (
    <StyledButton
      type={type}
      width={width}
      maxWidth={maxWidth}
      height={height}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      color={color}
      borderRadius={borderRadius}
      onClick={onClick}
      icon={icon}
      disabled={disabled}
      className={className}
      value={value}
      name={name}
    >
      {children}
    </StyledButton>
  );
};

export default BaseButton;
