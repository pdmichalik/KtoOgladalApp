// pages/index.vue

<template>
  <div>
    <h1>Weather Forecast</h1>
    {{ response }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: []
    }
  },
  async mounted() {
    console.log(this.$auth.getToken('auth0'))
    let token = this.$auth.getToken('auth0')
    this.$axios.setToken(token)
    this.response = await this.$axios.$get('weatherforecast')
    console.log(this.response)
    //this.response = await this.$axios.$get('weatherforecast',null,{headers: { Authorization: `${token}` }})
  }
}
</script>