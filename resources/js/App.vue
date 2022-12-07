<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div id="nav">
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/registration" class="nav-link">Registration</router-link>
                        </li>
                        <li class="nav-item" v-if="isAuthenticated">
                            <router-link to="/clock" class="nav-link">Clock</router-link>
                        </li>
                        <li class="nav-item" v-if="isAuthenticated">
                            <router-link to="/edit-clock" class="nav-link">Edit Clock</router-link>
                        </li>
                    </ul>
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
}
</script>
