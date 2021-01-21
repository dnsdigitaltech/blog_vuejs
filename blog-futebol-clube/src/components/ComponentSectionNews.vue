<template>
  <section>
    <div class="container">
      <ComponentSectionNewsIndividual
        v-for="notice in news"
        :key="notice.id"
        :img-name="notice.img"
        :img-info="notice.imgInfo"
        :news-title="notice.title"
        :news-date="notice.date"
      >
        <p>{{ notice.content | truncate(200) }}</p>
      </ComponentSectionNewsIndividual>
    </div>
  </section>
</template>

<script>
import ComponentSectionNewsIndividual from "./ComponentSectionNewsIndividual";
export default {
  components: {
    ComponentSectionNewsIndividual,
  },
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.news = [
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
    ];
  },
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>
