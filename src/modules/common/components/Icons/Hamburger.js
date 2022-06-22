import * as React from "react";

function SvgHamburger(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.167 5h4.666c.31 0 .607.105.825.293A.934.934 0 0112 6c0 .265-.123.52-.342.707a1.272 1.272 0 01-.825.293H6.167c-.31 0-.606-.105-.825-.293A.934.934 0 015 6c0-.265.123-.52.342-.707.219-.188.515-.293.825-.293zm12.491 6.293a1.272 1.272 0 00-.825-.293H6.167c-.31 0-.606.105-.825.293A.934.934 0 005 12c0 .265.123.52.342.707.219.188.515.293.825.293h11.666c.31 0 .607-.105.825-.293A.934.934 0 0019 12a.934.934 0 00-.342-.707zM15.083 17H5.917a.88.88 0 00-.649.293A1.048 1.048 0 005 18c0 .265.097.52.268.707a.88.88 0 00.649.293h9.166a.88.88 0 00.649-.293c.171-.187.268-.442.268-.707 0-.265-.097-.52-.268-.707a.88.88 0 00-.649-.293z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgHamburger;