<script>
    import axios from "axios";
    export default {
        name: 'Projects',
        data() {
            return {
                projects: []
            }
        },
        created() {
            axios.get('http://localhost:8000/api/projects').then((response) => {
                this.projects = response.data;
                console.log(this.projects);
            })
        }
    }
</script>

<template>
    <div class="h-100 d-flex flex-wrap">
        <div class="card mx-1 mb-5" style="width: 18rem;" v-for="project in this.projects">
            <h4>{{ project.id }}</h4>
            <img v-if="project.image_url" :src="project.image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">Visualizza</router-link>
            </div>
        </div>
    </div>
</template>