<template>
    <section>
         <div class="container">
            <ComponentSectionNewsIndividual
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima."
                news-date="20/02/2021"
            /> 

            <ComponentSectionNewsIndividual
                img-name="news2.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima."
                news-date="20/02/2021"
            /> 

            <ComponentSectionNewsIndividual
                img-name="news3.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minima minus laboriosam sequi iste eius quae maiores obcaecati exercitationem aperiam voluptatibus dicta accusamus, necessitatibus, ipsa quaerat eveniet? Sequi, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos dolores! Inventore ipsum saepe commodi nihil voluptas repellat veniam quod animi praesentium tenetur iste accusantium, vel nesciunt accusamus porro minima."
                news-date="20/02/2021"
            />            
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