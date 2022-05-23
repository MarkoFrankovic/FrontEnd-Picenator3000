<template>
  <div class="container">
    <div class="centered">
      <div class="col d-flex justify-content-center">
        <div
          class="bgimg w3-display-container w3-animate-opacity w3-text-white"
        >
          <div class="w3-display-middle">
            <h1 class="w3-jumbo w3-animate-top">Pičenator 3000</h1>
            <hr class="w3-border-grey" style="margin: auto; width: 20%" />
            <p class="w3-large w3-center">Moraš popit sve...</p>
          </div>

          <i>
            <div class="col d-flex justify-content-center">
              <button
                v-on:click="login"
                type="button"
                class="btn btn-outline-light"
                style="margin: 0.5em"
              >
                Prijava
              </button>
            </div>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
body,
h1 {
  font-family: "Raleway", sans-serif;
  color: whitesmoke;
  outline-color: grey;
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
  outline-color: grey;
  width: 50%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

p {
  font-family: "Raleway", sans-serif;
  color: whitesmoke;
  outline-color: grey;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  margin: auto;
  text-align: center;
}

i {
  font-family: "Raleway", sans-serif;
  color: whitesmoke;
  outline-color: grey;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

body,
html {
  min-height: 100%;
  min-width: 100%;
}
.bgimg {
  background-image: url("@/assets/img/thumbnail.jpg");
  background-position: center;
  background-size: auto;
  background-position: center center;
  width: 3000px;
  height: 950px;
}
</style>
