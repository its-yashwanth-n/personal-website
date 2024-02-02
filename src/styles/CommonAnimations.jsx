import { css, keyframes } from "@emotion/react";

const SlideInBottom = keyframes`
0% {
  -webkit-transform: translateY(1000px);
  transform: translateY(1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
`;

export const SlideInBtmAmt = css`
  ${SlideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
`;

export const PuffOutCenter = keyframes`
0% {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-filter: blur(0px);
  filter: blur(0px);
  opacity: 1;
}
100% {
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-filter: blur(4px);
  filter: blur(4px);
  opacity: 0;
}`;

export const PulsateForward = keyframes`
0% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
50% {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}`;
