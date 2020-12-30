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
    <vue-vcard orgPost="00000" orgStreet="Some Street" orgRegion="Some Region" orgCity="Some City" orgCountry="LRK" orgName="OrganizationName" firstName="John" lastName="Doe" workPhone="5555555555"  homePhone="5555555555" />
  </div>
</template>
