<template>
  <div id="app">
    <component-header @select-championship="changeChampionship" />
    <component-section :championship="championship" />
    <component-footer />
  </div>
</template>

<script>
import ComponentHeader from './components/ComponentHeader'
import ComponentFooter from './components/ComponentFooter'
import ComponentSection from './components/ComponentSection'
export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentFooter,
    ComponentSection
  },
  //selected options per sectios
  data() {
    return {
      championship: 'Campeonato Brasileiro'
    }
  },
  methods: {
    changeChampionship(value){
      this.championship = value;
    }
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
