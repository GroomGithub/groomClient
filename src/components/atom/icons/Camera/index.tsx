import { IconProps } from '../../../../types/icon';

const Camera = ({
  className,
  width = '40px',
  height = '40px',
  color = '#000000'
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.5 13.25H29.93L29.4475 11.6413C29.3703 11.3836 29.2121 11.1578 28.9964 10.9972C28.7807 10.8367 28.5189 10.75 28.25 10.75H16.5C16.2311 10.75 15.9693 10.8367 15.7536 10.9972C15.5379 11.1578 15.3797 11.3836 15.3025 11.6413L14.82 13.25H9.5C9.16848 13.25 8.85054 13.3817 8.61612 13.6161C8.3817 13.8505 8.25 14.1685 8.25 14.5V32C8.25 32.3315 8.3817 32.6495 8.61612 32.8839C8.85054 33.1183 9.16848 33.25 9.5 33.25H34.5C34.8315 33.25 35.1495 33.1183 35.3839 32.8839C35.6183 32.6495 35.75 32.3315 35.75 32V14.5C35.75 14.1685 35.6183 13.8505 35.3839 13.6161C35.1495 13.3817 34.8315 13.25 34.5 13.25ZM33.25 30.75H10.75V15.75H15.75C16.0189 15.75 16.2807 15.6633 16.4964 15.5028C16.7121 15.3422 16.8703 15.1164 16.9475 14.8588L17.43 13.25H27.32L27.8025 14.8588C27.8797 15.1164 28.0379 15.3422 28.2536 15.5028C28.4693 15.6633 28.7311 15.75 29 15.75H33.25V30.75ZM22 15.75C20.7639 15.75 19.5555 16.1166 18.5277 16.8033C17.4999 17.4901 16.6988 18.4662 16.2258 19.6082C15.7527 20.7503 15.6289 22.0069 15.8701 23.2193C16.1112 24.4317 16.7065 25.5453 17.5806 26.4194C18.4547 27.2935 19.5683 27.8888 20.7807 28.1299C21.9931 28.3711 23.2497 28.2473 24.3918 27.7742C25.5338 27.3012 26.5099 26.5001 27.1967 25.4723C27.8834 24.4445 28.25 23.2361 28.25 22C28.248 20.343 27.5889 18.7544 26.4172 17.5828C25.2456 16.4111 23.657 15.752 22 15.75ZM22 25.75C21.2583 25.75 20.5333 25.5301 19.9166 25.118C19.2999 24.706 18.8193 24.1203 18.5355 23.4351C18.2516 22.7498 18.1774 21.9958 18.3221 21.2684C18.4667 20.541 18.8239 19.8728 19.3483 19.3483C19.8728 18.8239 20.541 18.4667 21.2684 18.3221C21.9958 18.1774 22.7498 18.2516 23.4351 18.5355C24.1203 18.8193 24.706 19.2999 25.118 19.9166C25.5301 20.5333 25.75 21.2583 25.75 22C25.75 22.9946 25.3549 23.9484 24.6517 24.6517C23.9484 25.3549 22.9946 25.75 22 25.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Camera;
