import { start, registerApplication, pathToActiveWhen } from "single-spa";

declare global {
  interface Window {
    System: any;
    singleSpaNavigate: any;
  }
}

function getLifeCycles(path: string) {
  return () => window.System.import(path);
}

registerApplication({
  name: "cart-details",
  app: getLifeCycles(`/cart/details.js`),
  activeWhen: pathToActiveWhen("/preview"),
  customProps: {},
});

registerApplication({
  name: "cart-resume",
  app: getLifeCycles(`/cart/resume.js`),
  activeWhen: pathToActiveWhen("/preview"),
  customProps: {},
});

if (!window.location.pathname || window.location.pathname === "/") {
  window.singleSpaNavigate("/preview");
}

start();
