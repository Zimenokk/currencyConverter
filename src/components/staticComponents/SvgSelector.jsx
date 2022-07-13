import React from 'react';

const SvgSelector = ({id}) => {

    switch (id){
        case "headerLogo":
            return <svg width="80" height="39" viewBox="0 0 80 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.839666 4.45455H4.28427L7.60103 10.7188H7.74308L11.0598 4.45455H14.5044L9.19904 13.858V19H6.14506V13.858L0.839666 4.45455ZM18.7711 19.2131C17.6679 19.2131 16.7138 18.9787 15.9089 18.5099C15.1087 18.0365 14.4908 17.3783 14.0552 16.5355C13.6196 15.688 13.4018 14.7055 13.4018 13.5881C13.4018 12.4612 13.6196 11.4763 14.0552 10.6335C14.4908 9.78598 15.1087 9.12784 15.9089 8.65909C16.7138 8.18561 17.6679 7.94886 18.7711 7.94886C19.8743 7.94886 20.8261 8.18561 21.6262 8.65909C22.4312 9.12784 23.0514 9.78598 23.487 10.6335C23.9226 11.4763 24.1404 12.4612 24.1404 13.5881C24.1404 14.7055 23.9226 15.688 23.487 16.5355C23.0514 17.3783 22.4312 18.0365 21.6262 18.5099C20.8261 18.9787 19.8743 19.2131 18.7711 19.2131ZM18.7853 16.8693C19.2872 16.8693 19.7063 16.7273 20.0424 16.4432C20.3786 16.1544 20.6319 15.7614 20.8024 15.2642C20.9776 14.767 21.0652 14.2012 21.0652 13.5668C21.0652 12.9323 20.9776 12.3665 20.8024 11.8693C20.6319 11.3722 20.3786 10.9792 20.0424 10.6903C19.7063 10.4015 19.2872 10.2571 18.7853 10.2571C18.2787 10.2571 17.8526 10.4015 17.5069 10.6903C17.166 10.9792 16.908 11.3722 16.7328 11.8693C16.5623 12.3665 16.4771 12.9323 16.4771 13.5668C16.4771 14.2012 16.5623 14.767 16.7328 15.2642C16.908 15.7614 17.166 16.1544 17.5069 16.4432C17.8526 16.7273 18.2787 16.8693 18.7853 16.8693ZM33.1035 14.3551V8.09091H36.1291V19H33.2243V17.0185H33.1106C32.8644 17.6577 32.4548 18.1714 31.8819 18.5597C31.3137 18.9479 30.6201 19.142 29.801 19.142C29.0718 19.142 28.4302 18.9763 27.8762 18.6449C27.3223 18.3134 26.889 17.8423 26.5765 17.2315C26.2688 16.6207 26.1125 15.8892 26.1078 15.0369V8.09091H29.1333V14.4972C29.1381 15.1411 29.3109 15.6501 29.6518 16.0241C29.9927 16.3982 30.4496 16.5852 31.0225 16.5852C31.3871 16.5852 31.728 16.5024 32.0453 16.3366C32.3625 16.1662 32.6182 15.9152 32.8123 15.5838C33.0112 15.2524 33.1083 14.8428 33.1035 14.3551ZM38.5492 19V8.09091H41.4824V9.99432H41.5961C41.7949 9.31723 42.1287 8.80587 42.5975 8.46023C43.0662 8.10985 43.606 7.93466 44.2168 7.93466C44.3683 7.93466 44.5317 7.94413 44.7069 7.96307C44.882 7.98201 45.0359 8.00805 45.1685 8.04119V10.7259C45.0265 10.6832 44.83 10.6454 44.579 10.6122C44.3281 10.5791 44.0984 10.5625 43.8901 10.5625C43.445 10.5625 43.0473 10.6596 42.6969 10.8537C42.3513 11.0431 42.0766 11.3082 41.873 11.6491C41.6742 11.9901 41.5748 12.383 41.5748 12.8281V19H38.5492Z" fill="black"/>
                <path d="M14.098 24.0469H10.9872C10.9304 23.6444 10.8144 23.2869 10.6392 22.9744C10.464 22.6572 10.2391 22.3873 9.96449 22.1648C9.68987 21.9422 9.37263 21.7718 9.01278 21.6534C8.65767 21.535 8.27178 21.4759 7.85511 21.4759C7.10227 21.4759 6.4465 21.6629 5.88778 22.0369C5.32907 22.4062 4.89583 22.946 4.58807 23.6562C4.2803 24.3617 4.12642 25.2187 4.12642 26.2273C4.12642 27.2642 4.2803 28.1354 4.58807 28.8409C4.90057 29.5464 5.33617 30.0791 5.89489 30.4389C6.4536 30.7988 7.09991 30.9787 7.83381 30.9787C8.24574 30.9787 8.62689 30.9242 8.97727 30.8153C9.33239 30.7064 9.64725 30.5478 9.92188 30.3395C10.1965 30.1264 10.4238 29.8684 10.6037 29.5653C10.7884 29.2623 10.9162 28.9167 10.9872 28.5284L14.098 28.5426C14.0175 29.2102 13.8163 29.8542 13.4943 30.4744C13.1771 31.09 12.7486 31.6416 12.2088 32.1293C11.6738 32.6122 11.0346 32.9957 10.2912 33.2798C9.55256 33.5592 8.71686 33.6989 7.78409 33.6989C6.48674 33.6989 5.3267 33.4053 4.30398 32.8182C3.28598 32.2311 2.48106 31.3812 1.8892 30.2685C1.30208 29.1558 1.00852 27.8087 1.00852 26.2273C1.00852 24.6411 1.30682 23.2917 1.90341 22.179C2.5 21.0663 3.30966 20.2187 4.33239 19.6364C5.35511 19.0492 6.50568 18.7557 7.78409 18.7557C8.62689 18.7557 9.40814 18.8741 10.1278 19.1108C10.8523 19.3475 11.4938 19.6932 12.0526 20.1477C12.6113 20.5975 13.0658 21.1491 13.4162 21.8026C13.7713 22.456 13.9986 23.2041 14.098 24.0469ZM21.1754 33.7131C20.0722 33.7131 19.1181 33.4787 18.3132 33.0099C17.513 32.5365 16.8951 31.8783 16.4595 31.0355C16.0239 30.188 15.8061 29.2055 15.8061 28.0881C15.8061 26.9612 16.0239 25.9763 16.4595 25.1335C16.8951 24.286 17.513 23.6278 18.3132 23.1591C19.1181 22.6856 20.0722 22.4489 21.1754 22.4489C22.2786 22.4489 23.2304 22.6856 24.0305 23.1591C24.8355 23.6278 25.4557 24.286 25.8913 25.1335C26.3269 25.9763 26.5447 26.9612 26.5447 28.0881C26.5447 29.2055 26.3269 30.188 25.8913 31.0355C25.4557 31.8783 24.8355 32.5365 24.0305 33.0099C23.2304 33.4787 22.2786 33.7131 21.1754 33.7131ZM21.1896 31.3693C21.6915 31.3693 22.1106 31.2273 22.4467 30.9432C22.7829 30.6544 23.0362 30.2614 23.2067 29.7642C23.3819 29.267 23.4695 28.7012 23.4695 28.0668C23.4695 27.4323 23.3819 26.8665 23.2067 26.3693C23.0362 25.8722 22.7829 25.4792 22.4467 25.1903C22.1106 24.9015 21.6915 24.7571 21.1896 24.7571C20.683 24.7571 20.2569 24.9015 19.9112 25.1903C19.5703 25.4792 19.3123 25.8722 19.1371 26.3693C18.9666 26.8665 18.8814 27.4323 18.8814 28.0668C18.8814 28.7012 18.9666 29.267 19.1371 29.7642C19.3123 30.2614 19.5703 30.6544 19.9112 30.9432C20.2569 31.2273 20.683 31.3693 21.1896 31.3693ZM31.5376 27.1932V33.5H28.5121V22.5909H31.3956V24.5156H31.5234C31.7649 23.8812 32.1697 23.3793 32.7379 23.0099C33.3061 22.6359 33.995 22.4489 34.8047 22.4489C35.5623 22.4489 36.2228 22.6146 36.7862 22.946C37.3497 23.2775 37.7876 23.7509 38.1001 24.3665C38.4126 24.9773 38.5689 25.7064 38.5689 26.554V33.5H35.5433V27.0938C35.5481 26.4261 35.3776 25.9053 35.032 25.5312C34.6863 25.1525 34.2105 24.9631 33.6044 24.9631C33.1972 24.9631 32.8374 25.0507 32.5249 25.2259C32.2171 25.401 31.9756 25.6567 31.8004 25.9929C31.63 26.3243 31.5424 26.7244 31.5376 27.1932ZM50.7333 22.5909L46.9194 33.5H43.5103L39.6964 22.5909H42.8924L45.158 30.3963H45.2717L47.5302 22.5909H50.7333ZM56.9016 33.7131C55.7795 33.7131 54.8136 33.4858 54.0039 33.0312C53.199 32.572 52.5787 31.9233 52.1431 31.0852C51.7075 30.2424 51.4897 29.2457 51.4897 28.0952C51.4897 26.973 51.7075 25.9882 52.1431 25.1406C52.5787 24.2931 53.1919 23.6326 53.9826 23.1591C54.7781 22.6856 55.7108 22.4489 56.7809 22.4489C57.5006 22.4489 58.1706 22.5649 58.7908 22.7969C59.4158 23.0241 59.9603 23.3674 60.4244 23.8267C60.8931 24.286 61.2577 24.8636 61.5181 25.5597C61.7785 26.2509 61.9087 27.0606 61.9087 27.9886V28.8196H52.6971V26.9446H59.0607C59.0607 26.509 58.966 26.1231 58.7766 25.7869C58.5872 25.4508 58.3245 25.188 57.9883 24.9986C57.6568 24.8045 57.271 24.7074 56.8306 24.7074C56.3713 24.7074 55.9641 24.8139 55.609 25.027C55.2586 25.2353 54.984 25.517 54.7852 25.8722C54.5863 26.2225 54.4845 26.6132 54.4798 27.044V28.8267C54.4798 29.3665 54.5792 29.8329 54.7781 30.2259C54.9817 30.6188 55.2681 30.9219 55.6374 31.1349C56.0067 31.348 56.4447 31.4545 56.9513 31.4545C57.2875 31.4545 57.5953 31.4072 57.8746 31.3125C58.154 31.2178 58.3931 31.0758 58.592 30.8864C58.7908 30.697 58.9424 30.465 59.0465 30.1903L61.8448 30.375C61.7028 31.0473 61.4116 31.6345 60.9712 32.1364C60.5356 32.6335 59.9722 33.0218 59.2809 33.3011C58.5943 33.5758 57.8013 33.7131 56.9016 33.7131ZM63.8832 33.5V22.5909H66.8164V24.4943H66.93C67.1289 23.8172 67.4627 23.3059 67.9315 22.9602C68.4002 22.6098 68.94 22.4347 69.5508 22.4347C69.7023 22.4347 69.8656 22.4441 70.0408 22.4631C70.216 22.482 70.3699 22.508 70.5025 22.5412V25.2259C70.3604 25.1832 70.1639 25.1454 69.913 25.1122C69.6621 25.0791 69.4324 25.0625 69.2241 25.0625C68.779 25.0625 68.3813 25.1596 68.0309 25.3537C67.6853 25.5431 67.4106 25.8082 67.207 26.1491C67.0082 26.4901 66.9087 26.883 66.9087 27.3281V33.5H63.8832ZM78.4162 22.5909V24.8636H71.8466V22.5909H78.4162ZM73.3381 19.9773H76.3636V30.1477C76.3636 30.4271 76.4063 30.6449 76.4915 30.8011C76.5767 30.9527 76.6951 31.0592 76.8466 31.1207C77.0028 31.1823 77.1828 31.2131 77.3864 31.2131C77.5284 31.2131 77.6705 31.2012 77.8125 31.1776C77.9545 31.1491 78.0634 31.1278 78.1392 31.1136L78.6151 33.3651C78.4635 33.4124 78.2505 33.4669 77.9759 33.5284C77.7012 33.5947 77.3674 33.6349 76.9744 33.6491C76.2453 33.6776 75.6061 33.5805 75.0568 33.358C74.5123 33.1354 74.0885 32.7898 73.7855 32.321C73.4825 31.8523 73.3333 31.2604 73.3381 30.5455V19.9773Z" fill="black"/>
            </svg>


        default:
            return <svg></svg>
    }
};

export default SvgSelector;