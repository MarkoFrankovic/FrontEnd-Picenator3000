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
    <button
      v-on:click="posalji_opet()"
      type="button"
      class="btn btn-dark"
      style="margin: 1em"
    >
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
    posalji() {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/upis");
      //xhr.setRequestHeader("Accept", "text/html");
      //xhr.setRequestHeader("Content-Type", "text/html");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      let data = {
        ime: this.izvodac_ime_pjesme,
        url: this.url,
        ocjena: this.ocjena,
        pice: this.pice,
      };

      console.log(data);
      xhr.send(data);
    },

    async posalji_opet() {
      const response = await fetch("http://localhost:5000/upis", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          ime: this.izvodac_ime_pjesme,
          url: this.url,
          ocjena: this.ocjena,
          pice: this.pice,
        },
      });

      response.json().then((data) => {
        console.log(data);
      });
    },

    natrag() {
      this.$router.push("/");
    },
  },
};
</script>
