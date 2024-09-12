import React, { JSX } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  height?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  icon?: JSX.Element;
  className?: string;
  value?: string;
  name?: string;
  children?: string | JSX.Element;
  as?: keyof JSX.IntrinsicElements; // 동적으로 태그 선택
}

const StyledText = styled.button<BaseButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : props.theme.fontSize.normal)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.fontWeight.regular)};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
`;

const TextButton: React.FC<BaseButtonProps> = ({
  type = 'button',
  width,
  height,
  maxWidth,
  margin,
  padding,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  boxShadow,
  onClick,
  icon,
  disabled,
  className,
  value,
  name,
  children,
  as = 'button', // 기본 태그는 button
}: BaseButtonProps) => {
  return (
    <StyledText
      type={type}
      width={width}
      height={height}
      maxWidth={maxWidth}
      margin={margin}
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      onClick={onClick}
      icon={icon}
      disabled={disabled}
      className={className}
      value={value}
      name={name}
      as={as} // 동적으로 태그를 지정
    >
      {children}
    </StyledText>
  );
};

export default TextButton;
