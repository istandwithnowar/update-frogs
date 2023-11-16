<template>
    <div class="parseHtml">
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        persistent
        width="80vw"
      >
        <v-card>
            <v-card-title v-if="!editHtml">
                Please enter the original HTML
            </v-card-title>
            <v-card-title v-if="editHtml">
                You can continue editing
            </v-card-title>
            <v-card-text v-if="!editHtml">
                Recursive frogs InscriptionNo: 
                <v-text-field label="InscriptionNo" v-model="inscription" variant="underlined"></v-text-field>
                <v-btn :href="'https://ordiscan.com/inscription/'+inscription" target="_blank"  v-if="inscription">View source</v-btn>
                (* click "view source code")
            </v-card-text>
            <v-card-text v-if="copied">
                <v-textarea label="HTML" variant="solo-inverted" clearable counter auto-grow v-model="htmlCode"></v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-btn v-if="!copied && inscription" block @click="copied = true">Have copied</v-btn>
                <v-btn v-if="htmlCode && htmlCode.length > 100" block @click="setHtmlCode">Start update</v-btn>
            </v-card-actions>
            </v-card>
      </v-dialog>
    </div>
</template>
  
<script>
import * as cheerio from 'cheerio';
import { useAppStore } from '@/store/app';
import { events } from '@/bus'
//   const store = useAppStore()
  export default {
      name: 'ParseHtml',
      setup(){
        const appStore = useAppStore()
        return { appStore }
      },
      components: {
  
      },
      data() {
          return {
            dialog: true,
            inscription: '',
            copied: false,
            htmlCode: '',
            editHtml:  false,
          }
      },
      watch: {
        'htmlCode': function(a) {
            if(a && a.length > 100) {
                this.editHtml = true
            }else{
                this.editHtml = false
            }
        }
      },
      created(){
        // this.$root._alert('Invalid html')
        this.htmlCode = this.appStore.htmlCode || ''
      },
      methods: {
        verifyHtml(){
            // const cheerio = require('cheerio');
            const doc = cheerio.load(this.htmlCode+'')
            if(!doc 
                || doc('#Frogs').length <= 0
                || !doc('meta').eq(1).attr('id')
                ) {
                console.log('error: ', [
                    doc('#Frogs').length <= 0,
                    !doc('meta').eq(1).attr('id')
                ])
                this.$root._alert('Invalid html')
                return 
            }
            const tokenId = doc('meta').eq(1).attr('id')
            return { tokenId, inscriptionNo: this.inscription }
        },
        setHtmlCode(){
            var s = false
            try {
                s = this.verifyHtml()    
            } catch (error) {
                console.error('verifyHtml on error : ', error)
                this.$root._alert('Please enter a valid HTML')
            }
            if(s) {
                const { tokenId, inscriptionNo } = s
                this.appStore.setHtmlCode(this.htmlCode, tokenId, inscriptionNo)
                events.emit('reCheck', tokenId)
                this.dialog = false
            }
        }
      }
  }
  </script>
  
  <style lang="scss" scoped>
  .parseHtml{
    // position: fixed;
    // top: 7vh;
    // left: 0vw;
    // width: 100vw;
    // height: 93vh;
    // background: white;
    // padding: 0px;
    // margin: 0px;
  }
  </style>