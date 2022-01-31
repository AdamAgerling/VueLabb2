<script>
  import PropHehe from '../components/PropHehe.vue'
  import MandatoryVmodel from '../components/MandatoryVmodel.vue'

  export default {
    name: 'AllAgentsView',
    components: {
      PropHehe,
      MandatoryVmodel
    },
    data() {
      return {
        s: 'All Agents'
      }
    }
  }
</script>

<template>
  <MandatoryVmodel />
  <PropHehe :headertext="s" />
</template>
