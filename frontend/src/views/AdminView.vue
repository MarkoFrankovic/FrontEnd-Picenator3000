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
      v-model="izvodac_ime_pjesme"
    />
    <span class="input-group-text">Url:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      v-model="url"
    />
    <span class="input-group-text">Ocjena:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      v-model="ocjena"
    />
    <span class="input-group-text">Piće:</span>
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      v-model="pice"
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
  data() {
    return {
      izvodac_ime_pjesme: "",
      url: "",
      ocjena: "",
      pice: "",
    };
  },
  mounted() {
    if (localStorage.ime) {
      this.izvodac_ime_pjesme = localStorage.getItem("izvodac_ime_pjesme");
      this.url = localStorage.getItem("url");
      this.ocjena = localStorage.getItem("ocjena");
      this.pice = localStorage.getItem("pice");
    }
  },
  methods: {
    posalji() {},

    natrag() {
      this.$router.push("/");
    },
  },
};
</script>
