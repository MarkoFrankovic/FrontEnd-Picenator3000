<template>
  <div>
    <div>
      <button-group>
        <img
          alt="stock"
          src="C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\stock.jpgg"
        />
        <button v-on:click="prebacivanje">Button 1</button>
        <button v-on:click="prebacivanje">Button 2</button>
        <button v-on:click="prebacivanje">Button 3</button>
      </button-group>
    </div>
    <div>
      <button-group>
        <button v-on:click="prebacivanje">Button 4</button>
        <button v-on:click="prebacivanje">Button 5</button>
        <button v-on:click="prebacivanje">Button 6</button>
      </button-group>
    </div>
    <div>
      <button-group>
        <button v-on:click="prebacivanje">Button 7</button>
        <button v-on:click="prebacivanje">Button 8</button>
        <button v-on:click="prebacivanje">Button 9</button>
      </button-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    prebacivanje() {
      this.$router.push("/player");
    },
  },
};
</script>
