<script>
  export default {
    methods: {
      specificAgent() {
        if (this.$route.params.uuid !== undefined) {
          fetch(`https://valorant-api.com/v1/agents/${this.$route.params.uuid}`)
            .then((response) => response.json())
            .then((agent) => {
              this.agent = agent.data
            })
        }
      },
      goBackButton() {
        this.$router.push('/')
      }
    },
    created() {
      this.specificAgent()

      this.$watch(
        () => this.$route.params,
        () => {
          this.specificAgent()
        }
      )
    },
    data() {
      return {
        agent: {}
      }
    }
  }
</script>
<template>
  <div v-if="agent.data !== null">
    <button @click="goBackButton">Reset</button>
    <div class="center">
      <h2>{{ agent.displayName }}</h2>
      <h3>{{ agent.description }}</h3>
    </div>

    <section class="flex-container-2">
      <img class="heroFull" :src="agent.fullPortrait" />
      <div class="box-1">
        <h4>{{ agent.abilities[0].displayName }}</h4>
        <img :src="agent.abilities[0].displayIcon" />
        <p>{{ agent.abilities[0].description }}</p>
      </div>
      <div class="box-1">
        <h4>{{ agent.abilities[1].displayName }}</h4>
        <img :src="agent.abilities[1].displayIcon" />
        <p>{{ agent.abilities[1].description }}</p>
      </div>
      <div class="box-1">
        <h4>{{ agent.abilities[2].displayName }}</h4>
        <img :src="agent.abilities[2].displayIcon" />
        <p>{{ agent.abilities[2].description }}</p>
      </div>
      <div class="box-1">
        <h4>{{ agent.abilities[3].displayName }}</h4>
        <img :src="agent.abilities[3].displayIcon" />
        <p>{{ agent.abilities[3].description }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .center {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .heroFull {
    width: 40rem;
    display: flex;
    margin: 0;
  }
  .box-1 {
    text-align: center;
    width: 10.1rem;
  }
  .flex-container-2 {
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    width: 10.1rem;
  }
  button {
    margin-left: 2rem;
    width: 4rem;
    height: 2rem;
  }
</style>
