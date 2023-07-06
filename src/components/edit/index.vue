<template>
  <component :is="page"></component>
</template>

<script>
import ParseHtml from '@/components/edit/parseHtml.vue'
import PreviewHtml from '@/components/edit/previewHtml.vue'
import { useAppStore } from '@/store/app';
import { events } from '@/bus'

export default {
    name: 'EditPage',
    setup(){
        const appStore = useAppStore()
        return { appStore }
    },
    components: {
        ParseHtml, PreviewHtml
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
        }
    },
    mounted(){
        events.on('reCheck', () => {
            this.check()
            location.reload()
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