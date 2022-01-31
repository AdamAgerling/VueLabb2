<script>
  export default {
    props: {
      headertext: {
        type: String,
        required: true
      }
    }
  }
</script>
<template>
  <h2>{{ headertext }}</h2>
</template>
