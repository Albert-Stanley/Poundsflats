import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const DeleteSvg = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M9.03125 8L12.9062 11.875C13 11.9688 13 12.125 12.9062 12.25L12.2188 12.9375C12.0938 13.0312 11.9375 13.0312 11.8438 12.9375L11.1875 12.2812L8 9.0625L4.125 12.9375C4.03125 13.0312 3.875 13.0312 3.75 12.9375L3.0625 12.25C2.96875 12.125 2.96875 11.9688 3.0625 11.875L6.9375 8L3.0625 4.15625C2.96875 4.0625 2.96875 3.90625 3.0625 3.78125L3.75 3.09375C3.875 3 4.03125 3 4.125 3.09375L8 6.96875L11.8438 3.09375C11.9375 3 12.0938 3 12.2188 3.09375L12.9062 3.78125C13 3.90625 13 4.0625 12.9062 4.15625L12.25 4.8125L9.03125 8Z"
      fill="black"
      fillOpacity={0.48}
    />
  </Svg>
);
export default DeleteSvg;
