<script>
    export default {
        name: "AppHeader",
    }
</script>

<template>
    <nav class="navbar navbar-dark bg-dark bg-gradient navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand me-5" href="#">Boolean</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-3 nav-link">
                        <router-link class="router-link" active-class="router-active" :to="{ name: 'homepage' }">
                            <small><i class="me-2 fa-solid fa-house"></i>Home</small>
                        </router-link>
                    </li>
                    <li class="nav-item mx-3 nav-link">
                        <router-link class="router-link" active-class="router-active" :to="{ name: 'about-us' }">
                            <small><i class="me-2 fa-solid fa-users"></i>Chi siamo</small> 
                        </router-link>
                    </li>
                    <li class="nav-item mx-3 nav-link">
                        <router-link class="router-link" active-class="router-active" :to="{ name: 'contacts' }">
                            <small><i class="me-2 fa-solid fa-phone"></i>Contatti</small>
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>