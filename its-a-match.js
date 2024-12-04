// Its A Match
console.log('---------- Its A Match ----------')

const normal = /(hi)/;
const begin = /^(hi)/;
const end = /(hi)$/;
const beginEnd = /^(hi)$/;

const sentences = [
    { text: "hi there", label: "sentence1" },
    { text: "hi", label: "sentence2" },
    { text: "test here", label: "sentence3" },
    { text: "hello hi there", label: "sentence4" },
    { text: "wow hihi", label: "sentence5" },
  ];

sentences.forEach(({ text, label }) => {
    console.log('\n');
    console.log(`${label} ("${text}") results:`);
    console.log("  Matches 'normal':", normal.test(text));
    console.log("  Matches 'begin':", begin.test(text));
    console.log("  Matches 'end':", end.test(text));
    console.log("  Matches 'beginEnd':", beginEnd.test(text));
  });