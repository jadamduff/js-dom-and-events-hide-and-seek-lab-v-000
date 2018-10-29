function getFirstSelector(element) {
  return document.querySelector(element);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div div');
}
