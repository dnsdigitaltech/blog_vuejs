import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: "Campeonato Brasileiro",
        clubName: "Vue Js Treinamentos",
        news: [
            {
              id: 1,
              title: "Começam os treinos para nova temporada",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima.",
              date: "2021-01-21",
              img: "news1.jpg",
              imgInfo: "Notícia 1",
            },
            {
              id: 2,
              title: "Jogo de quarta-feira termina empatado",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima.",
              date: "2021-01-11",
              img: "news2.jpg",
              imgInfo: "Notícia 2",
            },
            {
              id: 3,
              title: "A inauguração do novo estádio será semana  que vem",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima.",
              date: "2021-01-28",
              img: "news3.jpg",
              imgInfo: "Notícia 3",
            },
          ],
    },
    getters: {
        getChampionship(state) {
            return state.championship

        },
        getClubName(state) {
            return state.clubName
        },
        getNews(state){
            return state.news
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue
        },
        setClubName(state, newName) {
            state.clubName = newName
        }
    },
    actions: {
        changeChampionship(context, value) {
            context.commit('setChampionship', value)
        },
        updateClubName(context, value) {
            context.commit('setClubName', value)
        }
    }
})