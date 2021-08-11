const schema = {
  type: 'object',
  properties: {
    provider: { type: 'string', enum: ['git'] },
    remote: { type: 'string' }
  }
}

module.exports = {
  name: 'version-control-git',
  main: 'lib/main.js',
  dependencies: ['templates', 'fs-store', 'version-control'],
  optionsSchema: {
    versionControl: { ...schema },
    extensions: {
      'version-control': { ...schema }
    }
  }
}
