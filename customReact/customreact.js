function customRender(reactElement, container) {
  /*
  const domElemet = document.createElement(reactElement.type);
  domElemet.innerHTML = reactElement.children;
  domElemet.setAttribute("href", reactElement.props.href);
  domElemet.setAttribute("target", reactElement.props.target);

  container.appendChild(domElemet);
  */

  const domElemet = document.createElement(reactElement.type);
  domElemet.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === "children") continue;
    domElemet.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElemet);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
