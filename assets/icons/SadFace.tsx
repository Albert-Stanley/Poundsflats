import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SadFace = (props: SvgProps) => (
  <Svg width={49} height={48} viewBox="0 0 49 48" fill="none" {...props}>
    <Path
      d="M24.5 0.75C37.3438 0.75 47.75 11.1562 47.75 24C47.75 36.8438 37.3438 47.25 24.5 47.25C11.6562 47.25 1.25 36.8438 1.25 24C1.25 11.1562 11.6562 0.75 24.5 0.75ZM24.5 44.25C35.6562 44.25 44.75 35.25 44.75 24C44.75 12.8438 35.6562 3.75 24.5 3.75C13.25 3.75 4.25 12.8438 4.25 24C4.25 35.25 13.25 44.25 24.5 44.25ZM17 22.5C15.3125 22.5 14 21.1875 14 19.5C14 17.9062 15.3125 16.5 17 16.5C18.5938 16.5 20 17.9062 20 19.5C20 21.1875 18.5938 22.5 17 22.5ZM32 16.5C33.5938 16.5 35 17.9062 35 19.5C35 21.1875 33.5938 22.5 32 22.5C30.3125 22.5 29 21.1875 29 19.5C29 17.9062 30.3125 16.5 32 16.5ZM24.5 27C28.1562 27 34.0625 29.25 34.9062 34.0312C35.0938 35.0625 34.7188 36.0938 33.9688 36.75C32.9375 37.6875 31.8125 37.5938 31.0625 37.4062C28.3438 36.5625 25.8125 36 24.5 36C23.0938 36 20.5625 36.5625 17.8438 37.4062C16.8125 37.6875 15.7812 37.5 14.9375 36.75C14.1875 36.0938 13.8125 35.0625 14 34.0312C14.8438 29.25 20.75 27 24.5 27ZM24.5 33C26.0938 33 28.8125 33.5625 32 34.5C31.4375 31.7812 27.2188 30 24.5 30C21.6875 30 17.4688 31.7812 17 34.5C20.0938 33.5625 22.8125 33 24.5 33Z"
      fill="#7B2CBF"
    />
  </Svg>
);
export default SadFace;
