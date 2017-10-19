const fs = require('graceful-fs')

const repelDir = `${process.env.HOME}/Repel/scripts`

module.exports = function (filename, content, callback) {
  fs.writeFile(`${repelDir}/${filename}.js`, content, (error) => {
    if (error) console.log(error)

    console.log(`Saved file ${filename}.js at ${repelDir}`)
    if (callback !== undefined) {
      callback()
    }
  })
}
