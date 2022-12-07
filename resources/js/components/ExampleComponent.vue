<template>
    <div class="container">
        <div class="row">
            <form action="#" @submit.prevent="handleLogin">
                <div class="row mb-3">

                    <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>
                    <div class="col-md-6">
                        <input id="email"
                               type="email"
                               class="form-control"
                               name="email"
                               required
                               autocomplete="email"
                               autofocus
                        v-model="formData.email">
                    </div>

                </div>
                <div class="row mb-3">

                    <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required v-model="formData.password">
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="offset-md-4 col-md-12">
                        <button type="submit" class="btn btn-primary">Sign In</button>
                    </div>

                </div>
            </form>
        </div>
        <div v-if="isAuthenticated">
            <Clock />
        </div>
    </div>
</template>

<script>
import Clock from './ClockComponent.vue';

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                formData: {
                    email: '',
                    password: '',
                }
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;
            },
            user() {
                return this.$store.getters.user;
            }
        },
        methods: {
            handleLogin() {
                // handle login
                /*axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/login', this.formData).then(response => {
                        console.log('User signed in!');
                    }).catch(error => console.log(error)); // credentials didn't match
                });*/

                this.$store.dispatch('login', this.formData);
            }
        },
        components: {
            Clock
        }
    }
</script>
