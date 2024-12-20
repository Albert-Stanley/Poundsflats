import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const IconButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
      <Path
        d="M15.3125 27.625C15.0625 27.9375 14.5625 27.9375 14.25 27.625L1.1875 14.5625C0.875 14.25 0.875 13.8125 1.1875 13.5L14.25 0.4375C14.5625 0.125 15.0625 0.125 15.3125 0.4375L16.5625 1.625C16.875 1.9375 16.875 2.4375 16.5625 2.6875L6.875 12.375H28.25C28.625 12.375 29 12.75 29 13.125V14.875C29 15.3125 28.625 15.625 28.25 15.625H6.875L16.5625 25.375C16.875 25.625 16.875 26.125 16.5625 26.4375L15.3125 27.625Z"
        fill="#7B2CBF"
      />
    </Svg>
  </TouchableOpacity>
);

export default IconButton;
