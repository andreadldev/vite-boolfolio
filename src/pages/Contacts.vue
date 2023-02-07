<script>
import axios from "axios";
export default {
    name: "Contacts",
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        sendEmail() {
            console.log(this.formData);
            axios
            .post(`http://localhost:8000/api/contact-form`, {
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message,
            })
            .then((res) => {
                console.log(res.data);
            });
            this.$router.push({path: '/contatti'});
        },
    },
};
</script>

<template>
    <div class="container">
        <h1>Contattaci</h1>
        <form @submit.prevent="sendEmail()">
            <div class="mt-3">
                <label for="name">Nome</label>
                <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Inserisci il tuo nome"
                v-model="this.formData.name"
                />
            </div>
            <div class="mt-3">
                <label for="email">Email</label>
                <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Inserisci la tua email"
                v-model="this.formData.email"
                />
            </div>
            <div class="mt-3">
                <label for="message">Messaggio</label>
                <textarea
                class="form-control"
                id="message"
                cols="30"
                rows="10"
                placeholder="Inserisci il messaggio*"
                v-model="this.formData.message"
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">
                Invia richiesta
            </button>
        </form>
    </div>
</template>
