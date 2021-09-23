module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/styles/base/_variables.scss';
        `
      }
    }
  }
}