import React from "react"
import styled, { css } from "styled-components"
import BaseButton from "./Button.base"
import { AntDesign as BaseStyles, UnsetA } from "utils/styles"

export const AntDesignButton = () => <A href="https://ant.design">Primary</A>

export const AntDesignStyles = css`
  & {
    display: inline-block;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    outline: 0;
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    overflow: visible;
    line-height: 32px;
  }
  &:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  &:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }
`

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  ${AntDesignStyles}
`
