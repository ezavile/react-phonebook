const sayHi = name => {
  const element = document.createElement("div");
  element.innerHTML = `My name is ${name}`;
  return element;
};

export default sayHi;
