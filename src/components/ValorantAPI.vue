<script>
  export default {
    created() {
      fetch('https://valorant-api.com/v1/agents/')
        .then((response) => response.json())
        .then((agents) => {
          this.agents = agents.data
        })
    },
    data() {
      return {
        agents: {}
      }
    }
  }
</script>

<template>
  <section class="flex-container">
    <div :key="agent.id" v-for="agent in agents">
      <router-link :to="`/${agent.uuid}`">
        <div class="card">
          <img :src="agent.displayIcon" />
          <div class="container">
            <h3>{{ agent.displayName }}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
  $text-primary-color: #000;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: $text-primary-color;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
</style>

<style lang="scss" scoped>
  $card-color: lightblue;
  .flex-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-gap: 1rem;
    padding-top: 2rem;
    margin-left: 3rem;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
  .card {
    background-color: $card-color;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    cursor: pointer;
    display: grid;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .card:hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8);
  }
  .container {
    padding: 2px 16px;
  }
  img {
    width: 110px;
  }
</style>
