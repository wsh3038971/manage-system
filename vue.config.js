module.exports = {
    devServer: {
        // 端口号
        port: 8971,
        // 自动打开浏览器
        open: true
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}