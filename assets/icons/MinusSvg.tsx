import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MinusSvg = (props: SvgProps) => (
  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
    <Path
      d="M5.46875 11.2031C5.19531 11.2031 5 11.0078 5 10.7344V10.2656C5 10.0312 5.19531 9.79688 5.46875 9.79688H14.5312C14.7656 9.79688 15 10.0312 15 10.2656V10.7344C15 11.0078 14.7656 11.2031 14.5312 11.2031H5.46875ZM19.6875 10.5C19.6875 15.8516 15.3516 20.1875 10 20.1875C4.64844 20.1875 0.3125 15.8516 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5ZM18.4375 10.5C18.4375 5.85156 14.6094 2.0625 10 2.0625C5.3125 2.0625 1.5625 5.89062 1.5625 10.5C1.5625 15.1875 5.35156 18.9375 10 18.9375C14.6484 18.9375 18.4375 15.1484 18.4375 10.5Z"
      fill="black"
      fillOpacity={0.48}
    />
  </Svg>
);
export default MinusSvg;