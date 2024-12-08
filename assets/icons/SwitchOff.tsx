import * as React from "react";
import Svg, { Rect, Circle, type SvgProps } from "react-native-svg";
const SwitchOff = (props: SvgProps) => (
  <Svg width={40} height={20} viewBox="0 0 40 20" fill="none" {...props}>
    <Rect
      x={3.5}
      y={1.5}
      width={33}
      height={17}
      rx={8.5}
      stroke="black"
      strokeOpacity={0.16}
    />
    <Circle cx={12} cy={10} r={5} fill="#7B2CBF" />
  </Svg>
);
export default SwitchOff;
