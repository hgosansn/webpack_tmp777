import "./style.scss";

const initLog = () => {
  console.log(` + ${VERSION} + `)
  console.log(`Tag ${VERSION}`);
  console.log(`Built on ${BUILT}`);
}

window.addEventListener('DOMContentLoaded',() => {
  initLog();
})
