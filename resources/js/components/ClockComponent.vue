<template>
    <div class="container">
        <div class="row">
            <div v-if="isAuthenticated">
                <h1>Welcome {{ user.name }}</h1>
                <h2>Time is {{ this.time }}</h2>
            </div>
            <div v-else>
                <h2>You have to login first</h2>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    mounted() {

        console.log('Component mounted.')

        //if (this.$store.getters.isAuthenticated()) {
            axios.get('/api/clock/1', {
                headers : {
                    'Authorization': `Bearer ${this.$store.getters.userToken}`
                }
            })
                .then(response => {
                    this.time = response.data.time;
                    console.log(response);
                })
                .catch(error => {
                    //this.advice = 'There was an error: ' + error.message
                    console.log(error);
                })
        //}
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        user() {
            return this.$store.getters.user;
        }
    },
    data() {
        return {
            time: null,
        }
    }
}
</script>
