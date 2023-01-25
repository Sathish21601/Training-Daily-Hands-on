let quote = " With great power comes great responsibility. ";

rquote = quote.replace("responsibility", "electricity bill");

console.log(rquote);

console.log(quote.indexOf("great"));

console.log(quote.substring(0, 10));

console.log(quote.trim());

upperString = [];
noSquote = quote.replaceAll(" ", "").replaceAll(".", "");
for (let i = 0; i < noSquote.length; i++) {
  if (noSquote[i] == noSquote[i].toUpperCase()) {
    upperString.push(noSquote[i]);
  }
}
console.log(upperString);

console.log(quote.toUpperCase());

console.log(quote.split(" "));
