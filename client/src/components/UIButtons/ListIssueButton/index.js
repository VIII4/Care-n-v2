import React from "react";
import "./style.css";

export default function ListIssueButton({ size }) {
  const nativeWidth = 200;
  let resize = size * nativeWidth;

  return (
    <>
      <svg
        width={resize + "px"}
        viewBox="0 0 52.917 21.167"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M52.87 0c-.708 0-3.007.01-3.99.008H7.72C3.445.008.004 4.722 0 10.58v.008c.003 5.857 3.444 10.571 7.718 10.571H48.88c.982-.002 3.28.01 3.988.009l.042-.045c0-.254.005-1.173.006-1.427l-.044-.052c-3.49-1.574-5.732-5.138-5.776-9.055v-.009c.044-3.917 2.286-7.48 5.776-9.055l.044-.052c0-.254-.005-1.174-.006-1.428z" />
        <text
          x="37.506"
          y="18.146"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="14.111"
          letterSpacing=".529"
          strokeWidth=".265"
          textAnchor="middle"
          wordSpacing="0"
          style={{ lineHeight: 0 }}
          transform="translate(-5.292 -2.638)"
        >
          <tspan
            x="37.77"
            y="18.146"
            dx="0 0 0 0"
            fontFamily="Calibri"
            style={{ lineHeight: 0 }}
          >
            <tspan
              dx="0"
              rotate="0 0 0 0 0"
              wordSpacing=".529"
              style={{ lineHeight: 0 }}
            >
              LIST
            </tspan>
          </tspan>
        </text>
        <path
          d="M5.104 5.87a.754.754 0 00-.754.754v.753c0 .416.338.754.754.754h.753a.754.754 0 00.754-.754v-.753a.754.754 0 00-.754-.753zm0 3.767a.753.753 0 00-.754.753v.754c0 .416.338.753.754.753h.753a.753.753 0 00.754-.753v-.754a.753.753 0 00-.754-.753zm0 3.766a.754.754 0 00-.754.754v.752c0 .417.338.754.754.754h.753a.754.754 0 00.754-.754v-.752a.754.754 0 00-.754-.754zm3.013-7.532a.754.754 0 00-.754.753v.753c0 .416.338.754.754.754h7.531a.754.754 0 00.754-.754v-.753a.754.754 0 00-.754-.753zm0 3.766a.753.753 0 00-.754.753v.754c0 .416.338.753.754.753h7.531a.753.753 0 00.754-.753v-.754a.753.753 0 00-.754-.753zm0 3.766a.754.754 0 00-.754.754v.752c0 .417.338.754.754.754h7.531a.754.754 0 00.754-.754v-.752a.754.754 0 00-.754-.754z"
          fillRule="evenodd"
          fill="#fff"
        />
      </svg>
    </>
  );
}
