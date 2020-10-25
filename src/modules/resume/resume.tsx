import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { CartResumeApp } from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CartResumeApp,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  domElementGetter() {
    return document.querySelector(`[data-app='cart-resume']`)!;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
