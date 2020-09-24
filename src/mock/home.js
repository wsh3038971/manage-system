import Mock from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 2000,
            data: {
                videoData: [
                    {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2),
                        image: Mock.Random.image('300x300', '#50B347', '#FFF', 'Mock.js')
                    },
                    {
                        name: 'JavaScript',
                        value: Mock.Random.float(1000, 10000, 0, 2),
                        image: Mock.Random.image('300x300', '#50B347', '#FFF', 'Mock.js')
                        
                    },
                    {
                        name: 'Java',
                        value: Mock.Random.float(1000, 10000, 0, 2),
                        image: Mock.Random.image('300x300', '#50B347', '#FFF', 'Mock.js')
                    },
                    {
                        name: 'PHP',
                        value: Mock.Random.float(1000, 10000, 0, 2),
                        image: Mock.Random.image('300x300', '#50B347', '#FFF', 'Mock.js')
                    },
                    {
                        name: 'dart',
                        value: Mock.Random.float(1000, 10000, 0, 2),
                        image: Mock.Random.image('300x300', '#50B347', '#FFF', 'Mock.js')
                    }
                ],
                tableData: [
                    {
                        monthBuy: Mock.Random.float(1000, 10000, 0, 0),
                        name: '京东',
                        todayBuy: Mock.Random.float(1000, 10000, 0, 0),
                        totalBuy: Mock.Random.float(1000, 10000, 0, 0),
                    },
                    {
                        monthBuy: Mock.Random.float(1000, 10000, 0, 0),
                        name: '国美',
                        todayBuy: Mock.Random.float(1000, 10000, 0, 0),
                        totalBuy: Mock.Random.float(1000, 10000, 0, 0),
                    },
                    {
                        monthBuy: Mock.Random.float(1000, 10000, 0, 0),
                        name: '天猫',
                        todayBuy: Mock.Random.float(1000, 10000, 0, 0),
                        totalBuy: Mock.Random.float(1000, 10000, 0, 0),
                    },
                    {
                        monthBuy: Mock.Random.float(1000, 10000, 0, 0),
                        name: '淘宝',
                        todayBuy: Mock.Random.float(1000, 10000, 0, 0),
                        totalBuy: Mock.Random.float(1000, 10000, 0, 0),
                    },
                    {
                        monthBuy: Mock.Random.float(1000, 10000, 0, 0),
                        name: '亚马逊',
                        todayBuy: Mock.Random.float(1000, 10000, 0, 0),
                        totalBuy: Mock.Random.float(1000, 10000, 0, 0),
                    }
                ]
            }
        }
    },
    datas: () => {
        return {
            code: 2000,
            data: {
                content: [
                    123,456
                ]
            }
        }
    }
}