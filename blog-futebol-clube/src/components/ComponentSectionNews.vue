<template>
    <section class="container">
        <ComponentSectionNewsIndividual/>
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
        margin-top: 25px;
    }
    .container .row {
        height: 300px;
    }
    .container .row .col-5:first-child {
        background-color: rgba(0, 0, 0. 0.5);
        background-image: url('../assets/football.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .container .row .col-5:nth-child(2) {
        background-image: url('../assets/football2.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    h2 {
        margin: 25% 0;
        color: #f6b64e;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 10px;
    }
    .principal-news {
        cursor: pointer;
    }
</style>