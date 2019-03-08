import React from "react"
import styled, { css } from "styled-components"
import BaseButton from "./Button.base"
import { Fabric as BaseStyles, UnsetA } from "utils/styles"

export const FabricButton = () => (
  <A href="https://developer.microsoft.com/en-us/fabric">
    <div
      css={`
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={`
          flex-grow: 1;
        `}
      >
        <div
          css={`
            margin-top: 0px;
            margin-right: 4px;
            margin-bottom: 0px;
            margin-left: 4px;
            line-height: 100%;
            font-weight: 600;
          `}
        >
          Primary
        </div>
      </div>
    </div>
  </A>
)

export const FabricStyles = css`
  & {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    min-width: 80px;
    height: 32px;
    background-color: rgb(0, 120, 212);
    color: rgb(255, 255, 255);
    user-select: none;
    outline: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    text-decoration: none;
    border-radius: 0px;
    overflow: visible;
    margin: 0;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
  }

  &:hover {
    background-color: #106ebe;
    color: white;
  }
`

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  ${FabricStyles}
`
