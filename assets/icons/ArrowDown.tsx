import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";
const ArrowDown = (props: SvgProps) => (
  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
    <Path
      d="M18.5547 6.86719C18.75 7.0625 18.75 7.33594 18.5547 7.53125L10.3125 15.7734C10.1172 15.9688 9.84375 15.9688 9.64844 15.7734L1.40625 7.53125C1.21094 7.33594 1.21094 7.0625 1.40625 6.86719L1.67969 6.59375C1.875 6.39844 2.14844 6.39844 2.34375 6.59375L10 14.2109L17.6172 6.59375C17.8125 6.39844 18.0859 6.39844 18.2812 6.59375L18.5547 6.86719Z"
      fill="black"
      fillOpacity={0.48}
    />
  </Svg>
);
export default ArrowDown;
