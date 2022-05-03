<template>
  <div>
    <div>
      <button-group>
        <img src:
        aria-required="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
        class="img-thumbnail" alt="Stock" />
        <button
          v-on:click="bambus"
          type="button"
          class="btn btn-outline-primary"
        >
          Bambus
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\đeger-cola.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="jaeger"
          type="button"
          class="btn btn-outline-primary"
        >
          Jager-Cola
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\gin-tonic.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button v-on:click="gin" type="button" class="btn btn-outline-primary">
          Gin-Tonic
        </button>
      </button-group>
    </div>
    <div>
      <button-group>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button v-on:click="jack" type="button" class="btn btn-outline-primary">
          Jack s ledom
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="merlot"
          type="button"
          class="btn btn-outline-primary"
        >
          Merlot
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="stock"
          type="button"
          class="btn btn-outline-primary"
        >
          Stock-Cola
        </button>
      </button-group>
    </div>
    <div>
      <button-group>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="travarica"
          type="button"
          class="btn btn-outline-primary"
        >
          Travarica
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button v-on:click="voda" type="button" class="btn btn-outline-primary">
          Voda
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="vodka"
          type="button"
          class="btn btn-outline-primary"
        >
          Vodka-Juice
        </button>
      </button-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    bambus() {
      this.$router.push("/pjesmebambus");
    },
    jaeger() {
      this.$router.push("/pjesmejaeger");
    },
    gin() {
      this.$router.push("/pjesmegin");
    },
    jack() {
      this.$router.push("/pjesmejack");
    },
    merlot() {
      this.$router.push("/pjesmemerlot");
    },
    stock() {
      this.$router.push("/pjesmestock");
    },
    travarica() {
      this.$router.push("/pjesmetravarica");
    },
    voda() {
      this.$router.push("/pjesmevoda");
    },
    vodka() {
      this.$router.push("/pjesmevodka");
    },
  },
};
</script>
