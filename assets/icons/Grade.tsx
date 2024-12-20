import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Grade = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M0 5C0 3.375 1.3125 2 3 2H29C30.625 2 32 3.375 32 5V27C32 28.6875 30.625 30 29 30H3C1.3125 30 0 28.6875 0 27V5ZM29.5 19V13H12.3125V19H29.5ZM29.5 21.5H12.3125V27.5H28.75C29.125 27.5 29.5 27.1875 29.5 26.75V21.5ZM2.5 13V19H9.8125V13H2.5ZM12.3125 10.5H29.5V5.25C29.5 4.875 29.125 4.5 28.75 4.5H12.3125V10.5ZM9.8125 4.5H3.25C2.8125 4.5 2.5 4.875 2.5 5.25V10.5H9.8125V4.5ZM2.5 21.5V26.75C2.5 27.1875 2.8125 27.5 3.25 27.5H9.8125V21.5H2.5Z"
      fill="black"
      fillOpacity={0.24}
    />
  </Svg>
);
export default Grade;
