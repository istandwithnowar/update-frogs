<template>
  <v-container class="home fill-height" fluid>
    <v-responsive class="align-center text-center fill-height" min-height="100%" content-class="fill-height">
      <v-row class="d-flex flex-fill align-stretch fill-height" align="start">
        <v-col cols="6" class="fill-height bar-left" align-self="start">
          <div class="header">
            <v-btn
              min-width="164"
              rel="noopener noreferrer"
              variant="text"
              :ripple="false"
              block
            >
              <v-icon
                icon="mdi-video-input-component"
                size="large"
                start
              />
              Component Catalog & List
            </v-btn>
          </div>
          <div class="body">
            <com-list @setComponent="setComponent"></com-list>
          </div>
        </v-col>
        <v-col cols="6" class="border-left fill-height bar-right">
          <div class="header">
            <v-btn
              block
              :ripple="false"
              rel="noopener noreferrer"
              variant="text"
            >
              <v-icon
                icon="mdi-eye"
                size="large"
                start
              />
              Current effect display
            </v-btn>
          </div>
          <div class="body">
            <editor></editor>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import ComList  from './ComList'
import Editor  from './edit/index.vue'
import { events } from '@/bus'

export default {
  components: {
    ComList, Editor
  },
  methods: {
    setComponent({category, component, index }) {
      // console.log('被点击 :', category, component, index )
      events.emit('setComponent', {category, component, index })
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  .border-left{
    border-left: 1px solid rgb(234, 233, 233);
  }
  .bar{
    &-left{
      height: 100%;
    }
    &-right{
      height: 100%;
    }
  }
}
</style>
