<template>
  <div>
    <h1>Detalji za pice {{ pice }}</h1>
    <div>
      <div class="col d-flex justify-content-center">
        <div class="card">
          <li>
            {{ podatci }}
          </li>
        </div>
      </div>
    </div>
    <button v-on:click="natrag" class="btn btn-dark" style="margin: 0.2em">
      Natrag
    </button>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      pice: "",
      podatci: [""],
    };
  },

  async mounted() {
    this.pice = localStorage.getItem("pice");
    console.log(this.pice);
    let podatci = await fetch("http://localhost:5000/api/pjesme/" + this.pice);
    let rezultati = await podatci.json();
    this.podatci = rezultati;
    this.komentar = localStorage.getItem("komentar");
    console.log(rezultati);
  },

  methods: {
    izbrisi() {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", "http://localhost:5000/api/pjesme/delete");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      let podatci = {
        ime: this.izvodac_ime_pjesme,
        url: this.url,
        ocjena: this.ocjena,
        pice: this.pice,
      };

      console.log(podatci);
      alert("Uspješno ste obrisali iz databaze");
      xhr.send(JSON.stringify(podatci));
    },
    biranje(pice) {
      localStorage.setItem("pice", pice);
      this.$router.push("/specific");
    },

    natrag() {
      this.$router.push("/delete");
    },
  },
};
</script>
