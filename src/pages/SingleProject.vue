<script>
    import axios from "axios";
    export default {
        name: 'SingleProject',
        data() {
            return {
                project: []
            }
        },
        created() {
            axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data;
                console.log(this.project);
            })
            .catch((err) => {
            // console.log(err);
                this.$router.push({ name: "page-404" });
            });
        }
    }
</script>

<template>
    <div v-if="project">
        <img :src="project.image_url" :alt="project.title" />
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
    </div>
</template>