<template>
  <div id="home-page">
    <div :class="{ 'main-blurred': showModal }">
      <HeroSection />
      <FeaturedSection />
      <LiveScores />
      <RecentWinnings />
      <FooterSection />
    </div>

    <IntroModal v-if="showModal" @close="closeModal" />
    <Odd2FloatingWidget v-if="showWidget" @open="reopenModal" />
    <WhatsAppButton />
  </div>
</template>

<script>
import IntroModal from '../components/IntroModal.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedSection from '../components/FeaturedSection.vue'
import LiveScores from '../components/LiveScores.vue'
import RecentWinnings from '../components/RecentWinnings.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import Odd2FloatingWidget from '../components/Odd2FloatingWidget.vue'

export default {
  name: 'HomePage',
  components: {
    IntroModal,
    HeroSection,
    FeaturedSection,
    LiveScores,
    RecentWinnings,
    FooterSection,
    WhatsAppButton,
    Odd2FloatingWidget
  },
  data() {
    return {
      showModal: true,
      showWidget: false
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
      this.showWidget = true
    },
    reopenModal() {
      this.showWidget = false
      this.showModal = true
    }
  }
}
</script>

<style>
#home-page {
  min-height: 100vh;
}
.main-blurred {
  filter: blur(4px);
  pointer-events: none;
  user-select: none;
  transition: filter 0.3s ease;
}
</style>
