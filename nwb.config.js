module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactD',
      externals: {
        react: 'React'
      }
    }
  }
}
