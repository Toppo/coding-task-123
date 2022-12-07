<template>
    <div class="container">
        <div class="row">

            <h2>Time is {{ this.time }}</h2>
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
