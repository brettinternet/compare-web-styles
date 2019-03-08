import React from "react"
import styled, { css } from "styled-components"
import BaseButton from "./Button.base"
import { SemanticUi as BaseStyles, UnsetA } from "utils/styles"

export const SemanticUiButton = () => (
  <A href="https://semantic-ui.com">Primary</A>
)

export const SemanticUiStyles = css`
  & {
    box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    background-color: #2185d0;
    color: #fff;
    text-shadow: none;
    font-size: 14px;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    margin: 0 0.25em 0 0;
    padding: 0.78571429em 1.5em 0.78571429em;
    text-transform: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    user-select: none;
    overflow: visible;
    border-radius: 5px;
  }

  &:hover {
    background-color: #1678c2;
    color: #fff;
    text-shadow: none;
  }
`

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  ${SemanticUiStyles}
`
