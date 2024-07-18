import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --blackBrown: #000000;
    --beige: #fdfde1;
    --brightGreen: #bff747;
    --lightBlack: #0c0c0c;
    --grey: #9e9e9e;
  }
`

export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  white: 'var(--white)',
  black: 'var(--black)',
  blackBrown: 'var(--blackBrown)',
  beige: 'var(--beige)',
  brightGreen: 'var(--brightGreen)',
  lightBlack: 'var(--lightBlack)',
  grey: 'var(--grey)',
}

export type Colors = keyof typeof colors
