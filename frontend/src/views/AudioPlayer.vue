<template>
  <div>
    {{ currentAudioName || audioList[0].name }}
    <audio-player
      ref="audioPlayer"
      :audio-list="audioList.map((elm) => elm.url)"
      :before-play="handleBeforePlay"
      theme-color="#00ccff"
    />
  </div>
</template>

<script>
import AudioPlayer from "@liripeng/vue-audio-player";
export default {
  components: {
    AudioPlayer,
  },
  data() {
    return {
      currentAudioName: "",
      audioList: [
        {
          name: "audio1",
          url: "https://drive.google.com/file/d/1yke6Su5TsZgpwobZ_YTN7H4udT4f8uWE/view?usp=sharing",
        },
        {
          name: "audio2",
          url: "https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3",
        },
      ],
    };
  },

  methods: {
    // Something to do before playing
    handleBeforePlay(next) {
      // There are a few things you can do here...
      this.currentAudioName =
        this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;
      next(); // Start playing
    },
  },
};
</script>
