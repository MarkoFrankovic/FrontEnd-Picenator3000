<template>
  <div class="signup">
    <h1>Prijava</h1>
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
                v-bind:value="ime"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-bind:value="loz"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Nemojte djeliti svoje podatke s drugima</small
              >
            </div>
            <button
              @click="persist()"
              type="submit"
              class="btn btn-primary"
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
</template>

<script>
export default {
  data() {
    return {
      ime: "",
      loz: "",
    };
  },
  mounted() {
    if (localStorage.name) {
      this.ime = localStorage.getItem("ime");
      this.loz = localStorage.getItem("loz");
    }
  },

  methods: {
    autentifikacija() {
      if (this.ime == "korisnik" || this.loz == "korisnik") {
        this.$router.push("/AboutView");
      } else if (this.ime == "admin" || this.loz == "admin") {
        this.$router.push("/AdminView");
      }
    },
  },
};
</script>
