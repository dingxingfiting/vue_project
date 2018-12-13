const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    // 基本路径
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('style', resolve('src/assets/style'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    }
}