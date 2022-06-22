import * as React from "react";

function SvgClipboardFilled(props) {
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
        d="M13.75 5.152h1.234a.41.41 0 01.42.379v1.805a.424.424 0 01-.42.431H9.016a.418.418 0 01-.39-.267.425.425 0 01-.03-.164V5.575a.416.416 0 01.258-.393.41.41 0 01.162-.03h1.322a1.77 1.77 0 01.947-1.978 1.741 1.741 0 012.127.489 1.765 1.765 0 01.338 1.49zm2.931 2.096V5.583a2.523 2.523 0 011.651.813c.43.47.668 1.085.668 1.723v10.337a2.544 2.544 0 01-.729 1.792 2.513 2.513 0 01-1.774.752H7.503a2.513 2.513 0 01-1.774-.752A2.544 2.544 0 015 18.455V8.12c0-.638.238-1.253.668-1.723.43-.47 1.019-.76 1.65-.813v1.665c0 .458.178.898.495 1.226.317.33.748.52 1.203.534h5.968a1.745 1.745 0 001.203-.534c.317-.328.494-.768.494-1.226zm-6.597 9.182h3.832a.645.645 0 000-1.285h-3.832a.637.637 0 00-.639.643.645.645 0 00.639.642zm0-3.856h3.832a.645.645 0 000-1.285h-3.832a.645.645 0 000 1.285z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgClipboardFilled;
