<template>
  <router-view />
  <v-snackbar
      v-model="snackbar"
      multi-line
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: ``,
    timeout: 2000,
  }),
  methods: {
    _alert(text, timeout = 2000) {
      this.snackbar = true
      this.text = text
      this.timeout = timeout
    }
  }
}
</script>
