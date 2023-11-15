/** @type {import('tailwindcss').Config} */
import {
        black as _black,
        white as _white,
        slate as _slate,
        gray as _gray,
        red as _red,
      } from "tailwindcss/colors";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {},
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: _black,
    white: _white,
    slate: _slate,
    gray: _gray,
    red: _red,
    blue: "#33CAFF",
  },
};
export const plugins = [];
