<template>
  <div class="container">
    <h1>Admin sučelje</h1>
    <span class="input-group-text">Izvođač i ime pjesme:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
    <span class="input-group-text">Url:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
    <span class="input-group-text">Ocjena:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
    <span class="input-group-text">Piće:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
    <button type="button" class="btn btn-dark" style="margin: 1em">
      Submit
    </button>
    <div>
      <button v-on:click="natrag" class="btn btn-primary" style="margin: 1em">
        Natrag na login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    natrag() {
      this.$router.push("/");
    },
  },
};
</script>
