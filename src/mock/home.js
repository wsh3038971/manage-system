import Mock from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 2000,
            data: {
                videoData: [
                    {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'JavaScript',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'PHP',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'dart',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }
                ]
            }
        }
    }
}