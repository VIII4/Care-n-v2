import React from "react";
import "./style.css";

export default function NewIssueButton({ size }) {
  return (
    <>
      <svg
        width={size}
        height="auto"
        viewBox="0 0 100.54 21.167"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(25.229 -2.67)">
          <rect
            x="-25.229"
            y="2.67"
            width="100.54"
            height="21.167"
            rx="8.124"
            ry="10.583"
          />
          <g fill="#fff">
            <path
              d="M-16.46 12.622V9.925c0-.377.104-.684.31-.92.207-.241.501-.362.884-.362s.678.12.885.362c.212.236.318.543.318.92v2.696h2.661c.39 0 .696.107.92.319.23.206.345.498.345.875 0 .383-.115.68-.345.893-.224.213-.53.318-.92.318h-2.66v2.688c0 .384-.107.693-.32.929-.211.236-.506.354-.884.354s-.671-.118-.884-.354c-.206-.236-.31-.545-.31-.929v-2.688h-2.66c-.378 0-.684-.114-.92-.344a1.194 1.194 0 01-.345-.867c0-.377.112-.669.336-.875.23-.212.54-.319.928-.319h2.662z"
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width=".96315"
            />
            <path d="M-16.46 12.622V9.925c0-.377.104-.684.31-.92.207-.241.501-.362.884-.362s.678.12.885.362c.212.236.318.543.318.92v2.696h2.661c.39 0 .696.107.92.319.23.206.345.498.345.875 0 .383-.115.68-.345.893-.224.213-.53.318-.92.318h-2.66v2.688c0 .384-.107.693-.32.929-.211.236-.506.354-.884.354s-.671-.118-.884-.354c-.206-.236-.31-.545-.31-.929v-2.688h-2.66c-.378 0-.684-.114-.92-.344a1.194 1.194 0 01-.345-.867c0-.377.112-.669.336-.875.23-.212.54-.319.928-.319h2.662z" />
          </g>
          <text
            x="31.925"
            y="18.094"
            font-family="sans-serif"
            font-size="14.111"
            letter-spacing="0"
            stroke-width=".265"
            text-anchor="middle"
            word-spacing="0"
            style={{ lineHeight: 0 }}
          >
            <tspan x="31.925" y="18.094" fill="#fff" font-family="Calibri">
              NEW ISSUE
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
}