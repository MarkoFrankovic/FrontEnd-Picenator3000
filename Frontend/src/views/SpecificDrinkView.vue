<template>
  <div>
    <h1>Detalji za pjesmu {{ resursi.ime }}</h1>
    <div>
      <div class="col d-flex justify-content-center">
        <div class="card">
          <l1>
            {{ resursi }}
          </l1>
        </div>
      </div>
    </div>
    <button v-on:click="izbrisi" class="btn btn-dark" style="margin: 0.2em">
      Izbriši
    </button>
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
      resursi: "",
      id: { ObjectId: "" },
    };
  },

  async mounted() {
    let podatci = await fetch("http://localhost:5000/api/pjesme/" + this.id);
    let rezultati = await podatci.json();
    this.resursi = rezultati;
    this.komentar = localStorage.getItem("komentar");
    this.id = localStorage.getItem("_id");
    console.log(this.resursi);
    console.log(this.id);
  },

  methods: {
    izbrisi() {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", "http://localhost:5000/api/pjesme/" + this.id);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      let podatci = {
        _id: this.id,
      };

      console.log(podatci);
      alert("Uspješno ste obrisali iz databaze");
      xhr.send(JSON.stringify(podatci));
    },

    natrag() {
      this.$router.push("/specific");
    },
  },
};
</script>
