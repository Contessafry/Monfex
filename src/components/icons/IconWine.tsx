import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  size?: number;

  color?: string;
}

const IconWine = ({ size = 28, color = "black", ...rest }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clip-path="url(#clip0_234_1354)">
        <path
          d="M17.6143 10.8381C17.6109 10.8276 17.6072 10.817 17.6033 10.8066C16.463 7.88665 16.1805 6.15161 16.0577 3.97174C16.0446 3.74098 16.0329 3.51013 16.0226 3.27921C16.1687 3.19295 16.2873 3.06698 16.3646 2.91596C16.4419 2.76494 16.4748 2.59508 16.4594 2.42612L16.3776 1.53526C16.3586 1.31226 16.2563 1.10461 16.0911 0.953591C15.926 0.802574 15.71 0.719262 15.4862 0.720223H14.0182C13.7944 0.719437 13.5785 0.802708 13.4133 0.953543C13.248 1.10438 13.1454 1.31178 13.1258 1.53466L13.0438 2.42701C13.0287 2.59575 13.0618 2.7653 13.1392 2.91601C13.2165 3.06673 13.335 3.19245 13.4809 3.27862C13.4705 3.50973 13.4587 3.74078 13.4455 3.97174C13.3236 6.1531 13.0411 7.88992 11.8981 10.8147C10.6926 13.9005 10.6581 16.5826 10.6572 16.698V26.2742C10.6576 26.5117 10.7522 26.7394 10.9203 26.9073C11.0884 27.0752 11.3162 27.1696 11.5537 27.1698H17.9497C18.1873 27.1696 18.4151 27.0752 18.5832 26.9073C18.7512 26.7394 18.8458 26.5117 18.8462 26.2742V16.6962C18.8459 16.6692 18.8317 13.9573 17.6143 10.8381ZM14.1133 4.00891C14.1344 3.6283 14.1493 3.34314 14.1582 3.06839C14.1607 2.98966 14.1354 2.91257 14.0866 2.85068C14.0379 2.78879 13.9689 2.74606 13.8918 2.73001C13.8443 2.72022 13.8011 2.69566 13.7684 2.65984C13.7472 2.63667 13.7311 2.60934 13.7211 2.57959C13.711 2.54985 13.7073 2.51834 13.7101 2.48708L13.7919 1.59592C13.7963 1.53916 13.8221 1.4862 13.8641 1.44781C13.9062 1.40942 13.9612 1.38849 14.0182 1.38926H15.4862C15.543 1.3885 15.5979 1.40942 15.6398 1.44777C15.6817 1.48611 15.7073 1.53899 15.7116 1.59562L15.7933 2.48797C15.7962 2.51893 15.7926 2.55014 15.7828 2.57966C15.773 2.60918 15.7573 2.63637 15.7366 2.65954C15.7035 2.69518 15.6604 2.71979 15.6129 2.73001C15.4538 2.76272 15.3417 2.90515 15.3464 3.0672C15.3539 3.34106 15.369 3.62711 15.3901 4.00921C15.5165 6.25806 15.8073 8.04633 16.9747 11.0338C16.9765 11.0392 16.9833 11.0603 16.9857 11.0653C17.1359 11.4515 17.2723 11.843 17.3946 12.239L14.7458 13.6505L12.105 12.2559C12.2292 11.8516 12.3681 11.452 12.5216 11.0579C13.6967 8.0496 13.9875 6.25955 14.1133 4.00891ZM18.1769 26.2742C18.1769 26.399 18.0749 26.5007 17.9494 26.5007H11.5534C11.4933 26.5007 11.4355 26.4769 11.3929 26.4344C11.3503 26.392 11.3262 26.3343 11.326 26.2742V16.7007C11.3266 16.6165 11.3498 15.0251 11.9153 12.9133L14.5897 14.3255C14.638 14.351 14.6918 14.3643 14.7465 14.3642C14.8011 14.3641 14.8549 14.3506 14.9031 14.3249L17.5834 12.8964C18.1653 15.0593 18.1763 16.676 18.1763 16.6962V26.2742H18.1769Z"
          fill={color}
        />
        <path
          d="M14.7514 22.8377C16.0645 22.8377 17.093 21.1231 17.093 18.9349C17.093 16.7467 16.0645 15.0322 14.7514 15.0322C13.4383 15.0322 12.4098 16.7467 12.4098 18.9349C12.4098 21.1231 13.4383 22.8377 14.7514 22.8377ZM14.7514 15.7013C15.658 15.7013 16.424 17.1821 16.424 18.9349C16.424 20.6878 15.658 22.1686 14.7514 22.1686C13.8448 22.1686 13.0788 20.6878 13.0788 18.9349C13.0788 17.1821 13.8451 15.7013 14.7514 15.7013Z"
          fill={color}
        />
        <path
          d="M17.3985 25.4872C17.3889 25.4851 16.4133 25.2913 14.7803 25.2913C13.1327 25.2913 12.1181 25.4845 12.1083 25.4866C12.0652 25.495 12.0241 25.5118 11.9875 25.536C11.9508 25.5603 11.9193 25.5915 11.8948 25.6279C11.8702 25.6643 11.853 25.7052 11.8443 25.7483C11.8355 25.7913 11.8353 25.8357 11.8437 25.8788C11.852 25.922 11.8688 25.963 11.8931 25.9997C11.9173 26.0363 11.9485 26.0678 11.985 26.0924C12.0214 26.1169 12.0623 26.1341 12.1053 26.1429C12.1484 26.1516 12.1927 26.1518 12.2359 26.1435C12.2454 26.1417 13.2317 25.9603 14.7803 25.9603C16.3435 25.9603 17.2563 26.1411 17.2652 26.1429C17.3522 26.1603 17.4425 26.1426 17.5165 26.0937C17.5904 26.0447 17.642 25.9684 17.6598 25.8815C17.6774 25.7946 17.6598 25.7042 17.6108 25.6302C17.5618 25.5563 17.4854 25.5048 17.3985 25.4872Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default IconWine;
