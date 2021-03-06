import React from "react";
import "./style.css";

export default function UserProfileButton({ size }) {
  const nativeWidth = 144;
  let resize = size * nativeWidth;

  return (
    <>
      <svg
        width={resize}
        viewBox="0 0 38.142 26.458"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.123 3.662C3.623 3.662 0 8.382 0 14.245s3.623 10.583 8.123 10.583h7.129a13.23 13.23 0 01.276-21.167zM24.9 1.058a13.229 13.229 0 00-13.216 13.23 13.229 13.229 0 005.52 10.75c-.04-.949.033-2.008.215-2.628.765-2.604 2.726-4.565 5.33-5.33.077-.022.17-.04.258-.06a5.183 5.183 0 01-3.042-3.427c-.177-.666-.166-2.028.023-2.672A5.133 5.133 0 0123.51 7.4c.656-.193 2.01-.2 2.708-.014.862.23 1.577.648 2.25 1.318 2.67 2.656 1.6 7.037-1.756 8.328.044.01.094.017.135.027 1.305.348 2.386.981 3.406 1.996 1.742 1.733 2.43 3.951 2.245 6.071a13.229 13.229 0 005.645-10.839 13.229 13.229 0 00-13.23-13.229 13.229 13.229 0 00-.013 0z" />
        <text
          x="6.09"
          y="18.796"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="9.878"
          letterSpacing="0"
          strokeWidth=".265"
          textAnchor="middle"
          wordSpacing="0"
          style={{ lineHeight: 1.25 }}
          transform="translate(-.65 -.657)"
        >
          <tspan x="6.09" y="18.796">
            3
          </tspan>
        </text>
      </svg>
    </>
  );
}
