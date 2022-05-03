<template>
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3wnb054c5l0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div>
      <button v-on:click="natrag" type="button" class="btn btn-outline-primary">
        Natrag na odabir
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    natrag() {
      this.$router.push("/about");
    },
  },
};
</script>
