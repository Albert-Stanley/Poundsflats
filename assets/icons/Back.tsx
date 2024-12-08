import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Back = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M16.3125 29.625C16.0625 29.9375 15.5625 29.9375 15.25 29.625L2.1875 16.5625C1.875 16.25 1.875 15.8125 2.1875 15.5L15.25 2.4375C15.5625 2.125 16.0625 2.125 16.3125 2.4375L17.5625 3.625C17.875 3.9375 17.875 4.4375 17.5625 4.6875L7.875 14.375H29.25C29.625 14.375 30 14.75 30 15.125V16.875C30 17.3125 29.625 17.625 29.25 17.625H7.875L17.5625 27.375C17.875 27.625 17.875 28.125 17.5625 28.4375L16.3125 29.625Z"
      fill="#7B2CBF"
    />
  </Svg>
);
export default Back;