<template>
  <div id="app">
    <h1>Piće: Bambus</h1>
    <LazyYoutube
      ref="youtubeLazyVideo"
      :src="youtubelinks[brojilo].url"
      max-width="720px"
      aspect-ratio="16:9"
      thumbnail-quality="standard"
    />
    <div>
      <span>{{ youtubelinks[brojilo].ime }}</span>
    </div>

    <div class="buttons">
      <button @click="prev()" class="btn btn-dark" style="margin: 1em">
        Prev
      </button>
      <button
        @click="handleClick('playVideo', 'youtubeLazyVideo')"
        class="btn btn-success"
        style="margin: 1em"
      >
        Play
      </button>
      <button
        @click="handleClick('stopVideo', 'youtubeLazyVideo')"
        class="btn btn-danger"
        style="margin: 1em"
      >
        Stop
      </button>
      <button
        @click="handleClick('pauseVideo', 'youtubeLazyVideo')"
        class="btn btn-warning"
        style="margin: 1em"
      >
        Pause
      </button>
      <button @click="next()" class="btn btn-dark" style="margin: 1em">
        Next
      </button>
    </div>

    <button v-on:click="natrag" class="btn btn-primary" style="margin: 1em">
      Natrag na odabir pića
    </button>

    <div>
      <button-group class="text-center">
        <button class="btn btn-dark">1</button>
        <button class="btn btn-dark">2</button>
        <button class="btn btn-dark">3</button>
        <button class="btn btn-dark">4</button>
        <button class="btn btn-dark">5</button>
      </button-group>
    </div>
    Odaberite ocjenu
  </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";

export default {
  name: "App",
  components: {
    LazyYoutube,
  },
  data() {
    return {
      //youtubeLink: "https://www.youtube.com/watch?v=vco21gmOPiY",
      youtubelinks: [{ url: "" }],
      brojilo: 0,
    };
  },

  async mounted() {
    // this.$refs['lazyVideo'].playVideo();

    let podatci = await fetch("http://localhost:5000/bambus");
    let rezultati = await podatci.json();
    this.commits = rezultati;
    console.log(rezultati);
    //this.youtubeLink = rezultati[2].url;
    this.youtubelinks = rezultati;
    this.ime_ocjena = rezultati;
  },
  methods: {
    prev() {
      if (this.brojilo == 0) {
        this.brojilo = this.youtubelinks.length - 1;
      } else {
        this.brojilo -= 1;
      }
    },

    next() {
      if (this.brojilo == this.youtubelinks.length - 1) {
        this.brojilo = 0;
      } else {
        this.brojilo += 1;
      }
    },

    handleClick(event, ref) {
      this.$refs[ref][event]();
    },
    natrag() {
      this.$router.push("/about");
    },
  },
};
</script>
