let text = "boulevard";
let count = 0;
for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}
console.log(count);