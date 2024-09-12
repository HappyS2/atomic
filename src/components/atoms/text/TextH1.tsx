import React, { JSX } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  value?: string;
  name?: string;
  children?: string | JSX.Element;
  as?: keyof JSX.IntrinsicElements; // 동적으로 태그 선택
}

const StyledText = styled.h1<BaseButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => (props.color ? props.color : props.theme.colors.txt600)};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : props.theme.fontSize.headingL)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.fontWeight.extraBold)};
  line-height: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.lineHeight.lineHeightHeadingL)};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
`;

const TextH1 = ({
  width = 'auto',
  height = 'auto',
  maxWidth,
  margin,
  padding,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  lineHeight,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  onClick,
  className,
  value,
  name,
  children,
  as = 'h1', // 기본 태그는 h1
}: BaseButtonProps) => {
  return (
    <StyledText
      width={width}
      height={height}
      maxWidth={maxWidth}
      margin={margin}
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
      className={className}
      value={value}
      name={name}
      as={as} // 동적으로 태그를 지정
    >
      {children}
    </StyledText>
  );
};

export default TextH1;
