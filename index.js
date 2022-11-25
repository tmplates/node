const fs = require('fs')
const path = require('path')

module.exports = async function(prompts) {
  const lib = await prompts({
    name: 'value',
    initial: true,
    type: 'confirm',
    message: 'Create a library project?',
  })

  const ts = await prompts({
    name: 'value',
    initial: true,
    type: 'confirm',
    message: 'Use the TypeScript language?',
  })

  if (lib.value) {
    return {
      lib: true,
      test: true,
      ts: ts.value,
      dirs: ['src'],
      files: ts.value ? [
        ['src/index.ts', fs.readFileSync(resolve('files/src/index.ts'))],
        ['test/hello.test.ts', fs.readFileSync(resolve('files/test/hello.test.ts'))]
      ] : [
        ['src/index.js', fs.readFileSync(resolve('files/src/index.js'))],
        ['test/hello.test.js', fs.readFileSync(resolve('files/test/hello.test.js'))]
      ],
      lint: ['stylelint', 'eslint', 'commitlint']
    }
  } else {
    return {
      ts: ts.value,
      dirs: ['src'],
      files: ts.value ? [
        ['src/index.ts', fs.readFileSync(resolve('files/src/index.ts'))]
      ] : [
        ['src/index.js', fs.readFileSync(resolve('files/src/index.js'))]
      ]
    }
  }
}

function resolve(filePath) {
  return path.join(__dirname, filePath)
}
