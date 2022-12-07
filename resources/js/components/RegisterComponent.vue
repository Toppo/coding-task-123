<template>
    <div class="container">

        <div class="row">
            <form action="#" @submit.prevent="handleRegister">
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

                    <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>
                    <div class="col-md-6">
                        <input id="name"
                               type="text"
                               class="form-control"
                               name="name"
                               required

                               v-model="formData.name">
                    </div>

                </div>
                <div class="row mb-3">

                    <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required v-model="formData.password">
                    </div>

                </div>
                <div class="row mb-3">

                    <label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Password confirmation</label>
                    <div class="col-md-6">
                        <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" required v-model="formData.password_confirmation">
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="offset-md-4 col-md-12">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                formData: {
                    email: '',
                    name: '',
                    password: '',
                    password_confirmation: '',
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
            handleRegister() {
                // handle login
                /*axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/login', this.formData).then(response => {
                        console.log('User signed in!');
                    }).catch(error => console.log(error)); // credentials didn't match
                });*/

                this.$store.dispatch('register', this.formData);
            }
        },
    }
</script>
