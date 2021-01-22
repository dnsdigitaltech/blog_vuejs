<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo as nostícias do: {{ championship }}</h3>
      </div>
    </div>

    <component :is="currentComponent"></component>

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu Clube é: {{ myClub }}</h2>
        </div>
        <div class="col-6">
          <ComponentInput v-model="myClub" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSectionBanner from "./ComponentSectionBanner";
import ComponentSectionNews from "./ComponentSectionNews";
import ComponentInput from "./ComponentInput";
export default {
  components: {
    ComponentSectionBanner,
    ComponentSectionNews,
    ComponentInput,
  },
  data() {
    return {
      myClub: "Vue Js Treinamentos",
    };
  },
  props: {
    championship: String,
    currentComponent: String,
  },
};
</script>

<style scoped></style>
