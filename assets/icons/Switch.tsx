import * as React from "react";
import Svg, { Rect, Circle, SvgProps } from "react-native-svg";
const SwitchSvg = (props: SvgProps) => (
  <Svg width={40} height={20} viewBox="0 0 40 20" fill="none" {...props}>
    <Rect x={3} y={1} width={34} height={18} rx={9} fill="#7B2CBF" />
    <Circle cx={28} cy={10} r={5} fill="white" />
  </Svg>
);
export default SwitchSvg;
