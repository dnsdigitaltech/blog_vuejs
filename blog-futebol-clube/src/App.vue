<template>
  <div id="app">
    <component-header/>
    <component-section/>
    <component-footer/>
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
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
