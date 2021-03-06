import React from "react"
import styled, { css } from "styled-components"
import BaseButton from "./Button.base"
import { Stripe as BaseStyles, UnsetA } from "utils/styles"

export const StripeButton = () => <A href="https://stripe.com/">Start Now</A>

export const StripeStyles = css`
  & {
    white-space: nowrap;
    display: inline-block;
    color: #fff;
    background: #3ecf8e;
    text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    text-decoration: none;
    transition: all 0.15s ease;
    outline: none;
  }

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    color: white;
    text-decoration: none;
    transform: translateY(-1px);
  }
`

const A = styled(BaseButton)`
  ${UnsetA}
  ${BaseStyles}
  ${StripeStyles}
`
