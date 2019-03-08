import React from "react"
import styled from "styled-components"
import BaseButton from "./Button.base"
import { Mapbox as BaseStyles, UnsetA } from "utils/styles"

export const Mapbox = () => <A href="https://www.mapbox.com/">Start building</A>

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  color: #fff;
  background-color: #4264fb;
  width: 180px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 9999px;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  transition: background-color 0.125s, border-color 0.125s, color 0.125s;

  &:hover {
    color: #fff;
    background-color: #314ccd;
    text-decoration;
  }
`
