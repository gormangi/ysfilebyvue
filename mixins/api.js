export default {
  mounted() {
    console.log('믹스인 mounted!');
  },
  methods: {
    async $callApi(url, data) {
      return await this.$axios.$post(url, data).catch(e => {console.log(e)});
    }
  }
}
