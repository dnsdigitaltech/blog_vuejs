<template>    
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as nostícias do: {{ championship }}</h3>
            </div>
        </div>
        <ComponentSectionBanner/>
        <ComponentSectionNews/>
    </div>
</template>

<script>
    import ComponentSectionBanner from './ComponentSectionBanner'
    import ComponentSectionNews from './ComponentSectionNews'
    export default {
        components: {
            ComponentSectionBanner,
            ComponentSectionNews
        },
        props: {
            championship: String
        }
    }
</script>

<style scoped>
    
</style>