import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  colors?: { primary: string; secondary: string };
}

const IconMonfexLogo = ({ width = 222, height = 52, colors = { primary: "#083300", secondary: "#86EA5C" }, ...rest }: Props) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} preserveAspectRatio="xMidYMid meet" {...rest}>
    <path
      d="M0 0 C8.25 0 16.5 0 25 0 C25 2.97 25 5.94 25 9 C20.05 9 15.1 9 10 9 C10 10.32 10 11.64 10 13 C18.25 13 26.5 13 35 13 C33.02 9.7 31.04 6.4 29 3 C29 2.01 29 1.02 29 0 C32.77332273 -0.47579551 36.24933112 -0.7164199 40 0 C42.42975739 2.34739273 43.74205155 4.88640384 45 8 C45.22171875 7.4225 45.4434375 6.845 45.671875 6.25 C46.8990121 3.68901822 47.91297413 1.94618363 50 0 C54.07632284 -0.72091015 57.90188799 -0.47059659 62 0 C60.35442612 4.29183459 58.32599824 8.04580299 56 12 C58.97 12.33 61.94 12.66 65 13 C65 12.34 65 11.68 65 11 C70.15464734 11.48324819 73.81550319 14.18610761 78 17 C74.71533863 20.67882073 71.33639092 22.75150101 67 25 C66.34 25 65.68 25 65 25 C65 24.01 65 23.02 65 22 C61.7 22 58.4 22 55 22 C55.5053125 22.77085938 56.010625 23.54171875 56.53125 24.3359375 C57.50578125 25.84027344 57.50578125 25.84027344 58.5 27.375 C59.47453125 28.87160156 59.47453125 28.87160156 60.46875 30.3984375 C62 33 62 33 62 35 C57.90188799 35.47059659 54.07632284 35.72091015 50 35 C47.49969253 32.66842493 46.2172229 30.17044103 45 27 C44.66742188 27.86625 44.66742188 27.86625 44.328125 28.75 C43.1009879 31.31098178 42.08702587 33.05381637 40 35 C35.92367716 35.72091015 32.09811201 35.47059659 28 35 C28.97703921 33.1863523 29.95669105 31.37411183 30.9375 29.5625 C31.48277344 28.55316406 32.02804688 27.54382813 32.58984375 26.50390625 C34 24 34 24 35 23 C26.75 22.67 18.5 22.34 10 22 C10 23.65 10 25.3 10 27 C14.95 27 19.9 27 25 27 C25 29.64 25 32.28 25 35 C16.75 35 8.5 35 0 35 C0 23.45 0 11.9 0 0 Z "
      fill={colors.primary}
      transform="translate(144,12)"
    />
    <path
      d="M0 0 C4.29 0 8.58 0 13 0 C14.20442708 2.66927083 15.40885417 5.33854167 16.61328125 8.0078125 C18.01561704 11.03369761 19.50852245 14.0170449 21 17 C23.31 11.39 25.62 5.78 28 0 C32.29 0 36.58 0 41 0 C41 11.55 41 23.1 41 35 C37.7 35 34.4 35 31 35 C30.67 30.38 30.34 25.76 30 21 C28.02 25.62 26.04 30.24 24 35 C21.69 35 19.38 35 17 35 C15.02 30.05 13.04 25.1 11 20 C10.67 24.95 10.34 29.9 10 35 C6.7 35 3.4 35 0 35 C0 23.45 0 11.9 0 0 Z "
      fill={colors.secondary}
      transform="translate(2,12)"
    />
    <path
      d="M0 0 C3.3 0 6.6 0 10 0 C12.53996653 2.63403936 13.9245753 4.40578456 15.625 7.5 C16.05683594 8.21542969 16.48867187 8.93085938 16.93359375 9.66796875 C17.98846208 11.42608263 18.9988674 13.21074174 20 15 C20.33 10.05 20.66 5.1 21 0 C24.3 0 27.6 0 31 0 C31 11.55 31 23.1 31 35 C22 35 22 35 18.93359375 31.9375 C18.07006615 30.64550451 17.23835198 29.33175386 16.4375 28 C16.00115234 27.33226563 15.56480469 26.66453125 15.11523438 25.9765625 C14.04865785 24.33567554 13.02033818 22.67003159 12 21 C11.67 25.62 11.34 30.24 11 35 C7.37 35 3.74 35 0 35 C0 23.45 0 11.9 0 0 Z "
      fill={colors.secondary}
      transform="translate(82,12)"
    />
    <path
      d="M0 0 C4.972208 2.2680247 7.3020298 5.30353336 10 10 C11.79917072 15.39751216 11.52163467 20.35273261 9.8125 25.75 C7.44950453 29.98709532 4.95648778 32.85871546 0.75 35.3125 C-4.47618516 36.61904629 -9.1713878 36.66814677 -14.25 34.8125 C-18.49698808 32.01334877 -21.30146161 29.58758726 -23.375 24.875 C-24.42024968 18.394452 -24.23149437 12.50859964 -21.3125 6.5625 C-14.98268999 -0.4516138 -9.16747248 -1.14447427 0 0 Z M-11.9375 11 C-13.28847183 14.81450869 -13.85949379 18.00777183 -13 22 C-10.99820005 25.16984261 -10.99820005 25.16984261 -8 27 C-4.86023566 27.07475629 -3.58819303 26.48678044 -1.1875 24.5 C0.62125083 20.69210351 0.53919075 17.13885858 0 13 C-0.84520133 10.34155783 -0.84520133 10.34155783 -3 9 C-8.01527421 8.18062351 -8.01527421 8.18062351 -11.9375 11 Z "
      fill={colors.secondary}
      transform="translate(69,12)"
    />
    <path
      d="M0 0 C8.25 0 16.5 0 25 0 C25 2.97 25 5.94 25 9 C20.05 9 15.1 9 10 9 C10 10.32 10 11.64 10 13 C11.39025391 12.98259766 11.39025391 12.98259766 12.80859375 12.96484375 C14.00613281 12.95582031 15.20367187 12.94679688 16.4375 12.9375 C17.63246094 12.92589844 18.82742187 12.91429687 20.05859375 12.90234375 C23 13 23 13 24 14 C24.14115161 16.67058851 24.04247107 19.32432238 24 22 C19.38 22 14.76 22 10 22 C10 26.29 10 30.58 10 35 C6.7 35 3.4 35 0 35 C0 23.45 0 11.9 0 0 Z "
      fill={colors.secondary}
      transform="translate(116,12)"
    />
  </svg>
);

export default IconMonfexLogo;
