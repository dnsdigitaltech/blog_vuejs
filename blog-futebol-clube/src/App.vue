<template>
  <div id="app">
    <component-header/>
    <component-footer/>
  </div>
</template>

<script>
import ComponentHeader from './components/ComponentHeader'
import ComponentFooter from './components/ComponentFooter'
export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentFooter
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
