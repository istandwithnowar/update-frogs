<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-hammer-wrench" />
      Recursive frogs update tools
    </v-app-bar-title>
    <template v-slot:append>
        <v-btn @click="clear">Clean Data</v-btn>
        <v-switch style="margin-top: 20px;" :label="store.theme" v-model="themeName" true-value="dark" false-value="light" @update:indeterminate="changeValue"></v-switch>
        <v-btn prepend-icon="mdi-twitter" target="_blank" :href="twitterUrl">Twitter</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useTheme } from 'vuetify'
  import { events } from '@/bus';



  // import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app';
  const store = useAppStore()
  // const useAppStoreEr = useAppStore()
  // console.log('store: ', store, store.theme)
  const theme = useTheme()
  // store.theme = 'dark'
  // console.log('store: ', store, store.theme)
  const themeName = ref(store.theme)
  const twitterUrl = ref('https://twitter.com/Recursive_Frog');
  // const { theme } = storeToRefs(useAppStoreEr)
  watch(themeName, function(a, b) {
    store.theme = a
    theme.global.name.value = store.theme
  } )
  // const hasLight = theme.global.name === 'light' ? true: false
  // const toggleTheme = () => {
  //   // useAppStoreEr.$patch({
  //   //   theme: theme === 'light' ? 'dark' : 'light'
  //   // })
  //   store.theme = theme.global.current.value.dark ? 'light' : 'dark'
  //   theme.global.name.value = store.theme
  //   console.log('store.theme: ', store.theme, theme.global.name.value)
  // }
  const changeValue = (key) => {
    console.log('key: ', key)
    // toggleTheme()
  }
  const clear = () => {
    store.setHtmlCode('', '', '')
    events.emit('reCheck', {})
    location.reload()
  }

</script>
