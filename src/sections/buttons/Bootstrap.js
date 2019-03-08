import React from "react"
import styled from "styled-components"
import BaseButton from "./Button.base"
import { Bootstrap as BaseStyles, UnsetA } from "utils/styles"

export const Bootstrap = () => <A href="https://getbootstrap.com/">Primary</A>

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;

  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`
