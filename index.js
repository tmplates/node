const fs = require('fs')
const path = require('path')

module.exports = async function(prompts) {
  const lib = await prompts({
    name: 'value',
    initial: true,
    type: 'confirm',
    message: 'Create a library project?',
  })

  if (lib.value) {
    return {
      ts: true,
      lib: true,
      test: true,
      dirs: ['src'],
      files: [
        ['src/index.ts', fs.readFileSync(resolve('files/src/index.ts'))],
        ['test/hello.test.ts', fs.readFileSync(resolve('files/test/hello.test.ts'))]
      ],
      lint: ['stylelint', 'eslint', 'commitlint']
    }
  } else {
    return {
      ts: true,
      dirs: ['src'],
      files: [
        ['src/index.ts', fs.readFileSync(resolve('files/src/index.ts'))]
      ],
      lint: ['stylelint', 'eslint', 'commitlint']
    }
  }
}

function resolve(filePath) {
  return path.join(__dirname, filePath)
}
