import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import MovieList from './components/MovieList.vue'
import MovieDetail from './components/MovieDetail.vue'

const routes = [
    { name: 'ListPage', path: '/', component: MovieList},
    { name: 'DetailPage', path: '/Detail/:movieTitle', component: MovieDetail },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)

app.use(router)
app.mount('#app')

app.config.globalProperties.$MovieList = [
    {
        title : "공조 2 : 인터네셔널",
        actors : "유해진, 현빈, 다니엘 허니" ,
        releaseDate : "2022.09.07",
        number : 1,
        img : "https://search.pstatic.net/common?type=o&size=174x246&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220826_188%2F1661489945659Su2RI_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "육사오",
        actors : "고경표, 이이경, 음문석" ,
        releaseDate : "2022.08.24",
        number : 2,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220824_252%2F1661324514413czYBf_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "헌트",
        actors : "이정재, 정우성" ,
        releaseDate : "2022.08.10",
        number : 3,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220805_227%2F1659685387586PIORG_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "탑건: 매버릭",
        actors : "톰 크루즈" ,
        releaseDate : "2022.09.07",
        number : 4,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220509_176%2F1652081912471yhg3N_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "블랙폰",
        actors : "에단호크, 메이슨 테임즈, 매들린 맥그로" ,
        releaseDate : "2022.09.07",
        number : 5,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220804_150%2F1659579599678eRHpT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "한산 : 용의 출현",
        actors : "박해일, 변요한, 안성기" ,
        releaseDate : "2022.07.27",
        number : 6,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220727_209%2F1658912961873lVd2W_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "미니언즈2",
        actors : "미니언들" ,
        releaseDate : "2022.07.20",
        number : 7,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220720_283%2F1658284839003UzxoT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "불릿 트레인",
        actors : "브래드 피트, 조이 킹, 애런 존슨, 배드 버니" ,
        releaseDate : "2022.08.24",
        number : 8,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220824_255%2F1661317464724GgJpf_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "비상선언",
        actors : "임시완, 송강호, 김남길" ,
        releaseDate : "2022.08.03",
        number : 9,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220718_224%2F1658121739465fgRof_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    },{
        title : "놉",
        actors : "다니엘 칼루야, 케케파머, 스티븐 연, 마이클 윈콧" ,
        releaseDate : "2022.08.17",
        number : 10,
        img : "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220729_1%2F1659070685587fXfeh_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
    }
];

