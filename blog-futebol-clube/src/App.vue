<template>
  <div id="app">
    <ComponentHeader
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <ComponentSection
      :championship="championship"
      :current-component="currentSectionComponent"
    />
    <ComponentFooter />
  </div>
</template>

<script>
import ComponentHeader from "./components/ComponentHeader";
import ComponentFooter from "./components/ComponentFooter";
import ComponentSection from "./components/ComponentSection";
export default {
  name: "App",
  components: {
    ComponentHeader,
    ComponentFooter,
    ComponentSection,
  },
  //selected options per sectios
  data() {
    return {
      championship: "Campeonato Brasileiro",
      currentSectionComponent: "ComponentSectionBanner",
    };
  },
  methods: {
    changeChampionship(value) {
      this.championship = value;
    },
    changeComponent(value) {
      let component;
      switch (value) {
        case "home":
        default:
          component = "ComponentSectionBanner";
          break;

        case "news":
          component = "ComponentSectionNews";
          break;
      }

      this.currentSectionComponent = component;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
