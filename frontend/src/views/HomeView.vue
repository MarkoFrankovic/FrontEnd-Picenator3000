<template>
  <div class="container">
    <div class="centered">
      <div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div class="w3-display-middle">
          <h1 class="w3-jumbo w3-animate-top">Pičenator 3000</h1>
          <hr class="w3-border-grey" style="margin: auto; width: 20%" />
        </div>

        <i>
          <div class="col d-flex justify-content-center">
            <button
              v-on:click="korisnik"
              type="button"
              class="btn btn-outline-light"
              style="margin: 0.5em"
            >
              Pičenator
            </button>

            <button
              v-on:click="login"
              type="button"
              class="btn btn-outline-light"
              style="margin: 0.5em"
            >
              Admin
            </button>
          </div>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brojilo: 0,
    };
  },

  methods: {
    login() {
      this.$router.push("/admin");
    },
    korisnik() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
body,
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "Raleway", gelve;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  width: 1000px;
  height: 100px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

hr {
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  width: 50%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

i {
  font-family: "Raleway", sans-serif;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

body,
html {
  min-height: 100%;
  min-width: 100%;
}

body {
  background-image: url("@/assets/img/thumbnail.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
}
</style>
