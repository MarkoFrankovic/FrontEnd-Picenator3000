<template>
  <div id="app">
    <LazyYoutube
      ref="youtubeLazyVideo"
      :src="youtubeLink"
      max-width="720px"
      aspect-ratio="16:9"
      thumbnail-quality="standard"
    />

    <div class="buttons">
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
    </div>
    <button v-on:click="natrag" class="btn btn-primary" style="margin: 1em">
      Natrag na odabir pića
    </button>
    <div>
      <button class="btn btn-dark" style="margin: 1em">Submit</button>
      <input
        class="input"
        type="text"
        @keydown.enter="handleSearch($event, 'youtube')"
        placeholder="Upišite svoju ocjenu"
        :value="youtubeLink"
      />
    </div>
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
      youtubeLink: "https://www.youtube.com/watch?v=vco21gmOPiY",
    };
  },

  mounted() {
    // this.$refs['lazyVideo'].playVideo();
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]();
    },
    natrag() {
      this.$router.push("/about");
    },
  },
};
</script>
