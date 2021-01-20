<template>
    <section>
         <div class="container">
            <ComponentSectionNewsIndividual/>   
            <ComponentSectionNewsIndividual/> 
            <ComponentSectionNewsIndividual/>           
         </div>
     </section>
</template>

<script>
    import ComponentSectionNewsIndividual from './ComponentSectionNewsIndividual'
    export default {
        components: {
            ComponentSectionNewsIndividual
        }
    }
</script>

<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #f37520;
    }
</style>