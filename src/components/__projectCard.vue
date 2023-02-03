<script>
    import axios from "axios";
    export default {
        name: 'Projects',
        data() {
            return {
                projects: [],
            }
        },
        created() {
            this.getResults(1)
        },
        methods: {
            buttonHtml(link) {
                if (link.label == '&laquo; Previous') {
                    return '<i class="fa-solid fa-chevron-left fa-2xs"></i>'
                }
                else if (link.label == 'Next &raquo;') {
                    return '<i class="fa-solid fa-chevron-right fa-2xs"></i>'
                }
                else {
                    return link.label
                }
            },

            getResults(page) {
                if (page == '&laquo; Previous') {
                    axios.get(this.projects.prev_page_url)
                    .then(response => {
                        this.projects = response.data;
                        // console.log(this.projects)
                    });
                }

                else if (page == 'Next &raquo;') {
                    axios.get(this.projects.next_page_url)
                    .then(response => {
                        this.projects = response.data;
                        // console.log(this.projects)
                    });
                }

                else {
                    axios.get('http://localhost:8000/api/projects?page=' + page)
                    .then(response => {
                        this.projects = response.data;
                        // console.log(this.projects)
                    });
    
                    // if (page > 1) {
                    //     this.$router.push({ path: "/", query: { page: page } });
                    // } else {
                    //     this.$router.push('');
                    // }
                }
            }
        }
    }
</script>

<template>
    <div class="h-100 d-flex flex-wrap">
        <div class="card mx-1 mb-5" style="width: 18rem;" v-for="project in this.projects.data">
            <h4>{{ project.id }}</h4>
            <img v-if="project.image_url" :src="project.image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">Visualizza</router-link>
            </div>
        </div>
    </div>
    <div class="d-flex position-absolute bottom-0 pb-5">
        <div v-for="link in this.projects.links">
            <button :class='{active : (link.active == true)  }' v-html="buttonHtml(link)" @click="getResults(link.label)" class="custom-btn border"></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .custom-btn {
        padding: 0.625rem 0.9375rem;
        background-color: white;
        color: #0275d8;
    }

    .active {
        background-color: #0275d8 ;
        color: white;
    }

</style>