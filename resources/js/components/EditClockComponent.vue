<template>
    <div class="container">

        <div class="row">
            <form action="#" @submit.prevent="handleUpdate">
                <div class="row mb-3">

                    <label for="time" class="col-md-4 col-form-label text-md-end">Time</label>
                    <div class="col-md-6">
                        <input id="time"
                               type="text"
                               class="form-control"
                               name="time"
                               required
                               autofocus
                        v-model="formData.time">
                    </div>

                </div>

                <div class="row mb-3">
                    <div class="offset-md-4 col-md-12">
                        <button type="submit" class="btn btn-primary">Update</button>
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
            axios.get('/api/clock/1', {
                headers : {
                    'Authorization': `Bearer ${this.$store.getters.userToken}`
                }
            })
                .then(response => {
                    this.formData.time = response.data.time;
                    console.log(response);
                })
                .catch(error => {
                    //this.advice = 'There was an error: ' + error.message
                    console.log(error);
                })
        },
        data() {
            return {
                formData: {
                    time: '',
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
            handleUpdate() {
                // handle login
                axios.put('/api/clock/1', { time: this.formData.time
                }, {
                    headers : {
                        'Authorization': `Bearer ${this.$store.getters.userToken}`
                    }
                })
                    .then(response => {
                        this.formData.time = response.data.time;
                        console.log(response);
                    })
                    .catch(error => {
                        //this.advice = 'There was an error: ' + error.message
                        console.log(error);
                    })
            }
        },
    }
</script>
