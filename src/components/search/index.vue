<template>
  <v-container>
    <v-layout>
      <v-flex>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      alert: 0,
      alertMsg: '',
      alertVariant: ''
    }
  },
  components: {
    AppNavBar,
  },
  computed: {
    ...mapState('art', ['errorMsg', 'successMsg'])
  },
  methods: {
    showAlert(variant, msg, duration) {
      this.alert = duration;
      this.alertVariant = variant;
      this.alertMsg = msg;
    },
  },
  watch: {
    errorMsg(val) {
      if (val) {
        this.showAlert('danger', val, 5);
      }
    },
    successMsg(val) {
      if (val) {
        this.showAlert('success', val, 2);
      }
    }
  }
}
</script>

<style scoped>

#alert {
  display: block;
  position: fixed;
}

</style>
