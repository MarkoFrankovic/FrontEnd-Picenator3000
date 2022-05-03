<template>
  <div>
    <div>
      <div>
        <button-group class="text-center">
          <img
            :src="require(`@/assets/img/bambus.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="bambus"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Bambus
          </button>
          <img
            :src="require(`@/assets/img/đeger-cola.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="jaeger"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Jäger Cola
          </button>
          <img
            :src="require(`@/assets/img/gin-tonic.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="gin"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Gin Tonic
          </button>
        </button-group>
      </div>
      <div>
        <button-group class="text-center">
          <img
            :src="require(`@/assets/img/jack_s_ledom.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="jack"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Jack s ledom
          </button>
          <img
            :src="require(`@/assets/img/merlot.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="merlot"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Merlot
          </button>
          <img
            :src="require(`@/assets/img/stock.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="stock"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Stock Cola
          </button>
        </button-group>
      </div>
      <div>
        <button-group class="text-center">
          <img
            :src="require(`@/assets/img/travarica.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="travarica"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Travarica
          </button>
          <img
            :src="require(`@/assets/img/voda.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="voda"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Voda
          </button>
          <img
            :src="require(`@/assets/img/vodka-juice.jpg`)"
            height="150px"
            width="150px"
            style="margin: 1em"
          />
          <button
            v-on:click="vodka"
            type="button"
            class="btn btn-outline-primary"
            style="width: 6rem"
          >
            Vodka Juice
          </button>
        </button-group>
      </div>
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
