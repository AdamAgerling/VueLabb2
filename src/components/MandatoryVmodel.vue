<script>
  export default {
    name: 'MandatoryVmodel',
    data() {
      return {
        agentName: '',
        isInvalid: true
      }
    },
    methods: {
      btnMessage() {
        this.inputValue = `Why would you ever pick ${this.agentName} over Sova? I prefer my boy Sova.`
        this.isInvalid = !this.isInvalid
      }
    }
  }
</script>

<template>
  <div class="box">
    <p>Which Agent do you prefer to play?</p>
    <input v-model="agentName" placeholder="Agent of your choosing" />
    <button @click="btnMessage" v-if="agentName">Send</button>
    <p v-if="!isInvalid">{{ inputValue }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    margin-left: 2rem;
  }
</style>
