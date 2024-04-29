const chars = "qwertyuiop[asdfghjkl;zxcvbnm,".split("");

const translateRightShift = (str: string) =>
  str
    .split("")
    .map((el) =>
      el === " " ? " " : chars.at(chars.findIndex((chEl) => chEl === el) - 1)
    )
    .join("");

console.log(translateRightShift(";p; epeor"));
console.log(translateRightShift("ejp s, o"));
