<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo as nostícias do: {{ championship }}</h3>
      </div>
    </div>
    <router-view> </router-view>

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu Clube é: {{ myClub }}</h2>
        </div>
        <div class="col-6">
          <ComponentInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentInput from "./ComponentInput";
import { mapGetters } from "vuex";
export default {
  components: {
    ComponentInput,
  },
  data() {
    return {};
  },
  props: {
    currentComponent: String,
  },
  computed: {
    ...mapGetters({
      championship: "getChampionship",
      myClub: "getClubName",
    }),
  },
};
</script>

<style scoped></style>
