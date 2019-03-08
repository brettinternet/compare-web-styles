import beautify from "cssbeautify"

export default str => {
  const repStr = replaceAmpersand(str)
  const newStr = beautify(repStr, {
    indent: "  ",
    autosemicolon: true,
  })
  return sort(newStr)
}

function replaceAmpersand(str) {
  return str.replace(/&/g, "button")
}

function sort(str) {
  return str
    .split("\n}")
    .map(styleBlock =>
      styleBlock
        .split(/\r?\n/)
        .sort((a, b) => {
          if (b.includes("button")) return 0
          if (a < b) {
            return -1
          }
          if (a > b) {
            return 1
          }
          return 0
        })
        .join("\n")
    )
    .join("\n}")
}
