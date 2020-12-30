<script>
import Vue from 'vue';
import VueVcard from '@/vue-vcard.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueVcard
  }
});
</script>

<template>
  <div id="app">
    <vue-vcard firstName="Lasantha" lastName="Sanjeewa" />
  </div>
</template>
