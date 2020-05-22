window.addEventListener('load', start);

function start() {
  const button = document.querySelector('button');
  button.addEventListener('click', result);
}

function result(event) {
  const string = event.target.value;
  camelcase(string);
}

function camelcase(s) {
  let letters = s.split('');
  let word = 1;
  for (var i = 0; i < letters.length; i++) {
    if (
      letters[i] === letters[i].toUpperCase() &&
      letters[i] !== letters[i].toLowerCase()
    ) {
      word++;
    }
  }
  console.log(word);
  return word;
}
