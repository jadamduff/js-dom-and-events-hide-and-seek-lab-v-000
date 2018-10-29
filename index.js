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
  let lists = document.querySelectorAll('div.ranked-list')
  for (const list of lists) {
    for (const rank of list) {
      rank.innerHTML(parseInt(rank.innerHTML) + n);
    }
  }
}
