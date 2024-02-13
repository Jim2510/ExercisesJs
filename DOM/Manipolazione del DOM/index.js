const addProduct = () => {
  const input = document.querySelector("input").value;
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const textNode = document.createTextNode(input);
  li.appendChild(checkbox);
  li.appendChild(textNode);
  ul.appendChild(li);
};