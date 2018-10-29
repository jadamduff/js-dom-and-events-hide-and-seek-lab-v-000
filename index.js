function getFirstSelector(element) {
  return document.querySelector(element);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('div.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}
