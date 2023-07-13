var generalQuotes = [
  { author: "― Frank Zappa", quote: "So many books, so little time." },
  {
    author: "― Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "― Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "― Friedrich Nietzsche",
    quote: "Without music, life would be a mistake.",
  },
  {
    author: "― Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "― Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];

let lastElement = null;

function elementOutput() {
  let random = Math.floor(Math.random() * generalQuotes.length);
  while (random === lastElement) {
    random = Math.floor(Math.random() * generalQuotes.length);
  }
  lastElement = random;
  document.getElementById("quoteOutput").innerHTML =
    generalQuotes[random].quote;
  document.getElementById("authorOutput").innerHTML =
    generalQuotes[random].author;
  console.log(generalQuotes[random].author);
}
