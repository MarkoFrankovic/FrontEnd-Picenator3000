<template>
  <a>
    <div class="signup">
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Korisničko ime</label>
                <input
                  type="username"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Upiši korisničko ime"
                  v-model="ime"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="loz"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >Nemojte djeliti svoje podatke s drugima</small
                >
              </div>
              <button
                @click="autentifikacija()"
                type="button"
                class="btn btn-dark"
                style="margin: 1em"
              >
                Submit
              </button>
            </form>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      ime: "",
      loz: "",
      podatci: [{ username: "", password: "" }],
    };
  },
  async mounted() {
    let podatci = await fetch("http://localhost:5000/autentifikacija");
    let rezultati = await podatci.json();
    this.commits = rezultati;
    console.log(rezultati);
    this.podatci = rezultati;
    if (localStorage.ime) {
      this.ime = localStorage.getItem("ime");
      this.loz = localStorage.getItem("loz");
    }
  },

  methods: {
    autentifikacija() {
      if (
        this.ime == this.podatci[0].username &&
        this.loz == this.podatci[0].password
      ) {
        this.$router.push("/about");
      } else if (
        this.ime == this.podatci[1].username &&
        this.loz == this.podatci[1].password
      ) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style>
body,
a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
