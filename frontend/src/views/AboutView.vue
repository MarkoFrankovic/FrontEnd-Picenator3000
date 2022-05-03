<template>
  <div>
    <div>
      <button-group>
        <img src:
        aria-required="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
        class="img-thumbnail" alt="Stock" />
        <button
          v-on:click="prebacivanje"
          type="button"
          class="btn btn-outline-primary"
        >
          Bambus
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="prebacivanje"
          type="button"
          class="btn btn-outline-primary"
        >
          Jager-Cola
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="prebacivanje"
          type="button"
          class="btn btn-outline-primary"
        >
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
        <button
          v-on:click="prebacivanje"
          type="button"
          class="btn btn-outline-primary"
        >
          Jack s ledom
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="prebacivanje"
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
          v-on:click="prebacivanje"
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
          v-on:click="prebacivanje"
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
        <button
          v-on:click="prebacivanje"
          type="button"
          class="btn btn-outline-primary"
        >
          Voda
        </button>
        <img
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\bambus.jpg"
          class="img-thumbnail"
          alt="Stock"
        />
        <button
          v-on:click="prebacivanje"
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
    prebacivanje() {
      this.$router.push("/pjesme");
    },
  },
};
</script>
