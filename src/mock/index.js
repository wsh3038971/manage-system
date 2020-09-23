import Mock from 'mockjs'
import homeApi from './home'

// 设置请求延时
Mock.setup({
    timeout: '200-600'
})

// 拦截请求(拦截home/getDate路径下的ajax请求),拦截get请求
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)
Mock.mock(/\/home\/getDatas/, 'get', homeApi.datas)