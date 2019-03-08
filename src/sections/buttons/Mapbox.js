import React from "react"
import styled, { css } from "styled-components"
import BaseButton from "./Button.base"
import { Mapbox as BaseStyles, UnsetA } from "utils/styles"

export const MapboxButton = () => (
  <A href="https://www.mapbox.com/">Start building</A>
)

export const MapboxStyles = css`
  & {
    color: #fff;
    background-color: #4264fb;
    width: 180px;
    padding: 12px 24px;
    border-radius: 9999px;
    font-size: 12px;
    line-height: 18px;
    display: inline-block;
    font-weight: 700;
    text-align: center;
    transition: background-color 0.125s, border-color 0.125s, color 0.125s;
  }

  &:hover {
    color: #fff;
    background-color: #314ccd;
  }
`

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  ${MapboxStyles}
`
