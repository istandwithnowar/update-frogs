<template>
  <component :is="page"></component>
  <UpdateTxt v-show="editUpdateTxt"></UpdateTxt>
</template>

<script>
import ParseHtml from '@/components/edit/parseHtml.vue'
import PreviewHtml from '@/components/edit/previewHtml.vue'
import UpdateTxt from '@/components/edit/updateTxt.vue'
import { useAppStore } from '@/store/app';
import { events } from '@/bus'

export default {
    name: 'EditPage',
    setup(){
        const appStore = useAppStore()
        return { appStore }
    },
    components: {
        ParseHtml, PreviewHtml, UpdateTxt
    },
    watch: {
        'appStore.nftInfo.tokenId': function() {
            this.check()
        }
    },
    created(){
        this.check()
    },
    data() {
        return {
            page: 'ParseHtml',
            editUpdateTxt: false,
        }
    },
    mounted(){
        events.on('reCheck', () => {
            this.check()
            location.reload()
        })
        events.on('editUpdateTxt', () => {
            this.editUpdateTxt = !this.editUpdateTxt 
        })
        
    },
    methods: {
        check(){
            if(this.appStore.nftInfo.tokenId) {
                this.page = 'PreviewHtml'
            }
        }
    }
}
</script>

<style>

</style>