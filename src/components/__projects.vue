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
                console.log(response)
            })
        }
    }
</script>


<template>
    <div>
        Projects
    </div>
</template>