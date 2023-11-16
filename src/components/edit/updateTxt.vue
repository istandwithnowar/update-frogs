<template>
  <div class="updateTxt">
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        persistent
        width="80vh"
        >
        <v-card class="pa-4">
            <v-card-title>
                Proof of Change: Minting and Submission
            </v-card-title>
            <v-card-text class="h-75">
                <v-sheet class="text-gray ma-auto">Before officially submitting your changes, you need to transfer your original Recursive Frog to the following Official address. The obtained transaction ID will serve as the transferTxID field value in the file below.</v-sheet>
                <v-form ref="form" @submit.prevent="saveChange" class="ma-4">
                    <v-text-field v-model="form.id" label="Token ID" required :rules="rules.id" readonly />
                    <v-text-field v-model="form.transferTxID" label="transaction ID of the original Inscription transfer"  :rules="rules.transferTxID" required />
                    <v-text-field v-model="form.update.txid" label="$rFrg payment transaction ID" :rules="rules.transferTxID"  required />
                    <v-text-field v-model="form.update.amount"  type="number" label="$rFrg payment amount" :rules="rules.amount"  required />
                    <v-text-field v-model="form.oldID" type="number" label="Original Inscription number" required />
                    <v-text-field v-model="form.newID" type="number" label="New Inscription number" required />
                    <v-sheet>
                        Update number of parts
                        <v-slider
                        required
    v-model="form.update.parts"
    :min="1"
    :max="6"
    :step="1"
    thumb-label ></v-slider>
                    </v-sheet>
                    
                    <v-text-field v-model="form.update.tokenName" label="new name, leave blank if not renaming" />
                    <div>
                        <v-btn type="submit" class="me-2">Save change</v-btn>
                        <v-btn @click="download" class="me-2">Download update.txt file</v-btn>
                        <v-btn @click="cancel">Cancel</v-btn>
                    </div>
                </v-form>
               
            </v-card-text>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useAppStore } from '@/store/app';
import { events } from '@/bus'

export default {
    name: 'EditPage',
    setup(){
        const appStore = useAppStore()
        return { appStore }
    },
    data() {
        return {
            dialog: false,
            items: [],
            form: {
                o:"Recursive Frogs",
                op:"update",
                id:"",
                update: {
                    txid: "",
                    parts: 1,
                    amount: 9000,
                    tokenName: ""
                },
                transferTxID:"",
                oldID:"",
                newID:""
            },
            rules: {
                id : [
                    v => !!v || 'id is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                transferTxID : [
                    v => !!v || 'transferTxID is required',
                    v => (v && v.length === 66) || 'transferTxID must be less than 66 characters',
                ],
                amount : [
                    v => !!v || 'transfer amount is required',
                    v => (v && Number(v) >= 3000 && Number(v) % 3000 === 0) || 'transfer amount must be less than 66 characters',
                ],
            }
        }
    },
    mounted(){
        events.on('editUpdateTxt', () => {
            this.dialog = !this.dialog 
        })
        this.form.id = this.appStore.nftInfo.tokenId
    },
    methods: {
        saveChange(){
            const sendData = Object.assign({}, this.form.update)
            console.log('this.form.update:',sendData)

            if(sendData.update.amount >= 3000) {
                if(sendData.update.tokenName && sendData.update.tokenName.length >= 1) {
                    const ar = sendData.update.tokenName.split(' ')
                    if(ar.length > 2) {
                        return this.$root._alert('The name is a maximum of two English words')
                    }
                }
            }else{
                return this.$root._alert('The amount transferred is wrong')
            }
            return
            this.appStore.setUpdateData(Object.assign({}, this.form))
        },
        download(){
            var eleLink = document.createElement('a');
            eleLink.download = ['update_'+this.tokenId, 'txt'].join('.');
            eleLink.style.display = 'none';
            // 字符内容转变成blob地址
           
            const doc = JSON.stringify(Object.assign({}, this.form), null, 2)
            var blob = new Blob([doc]);
            eleLink.href = URL.createObjectURL(blob);
            // 触发点击
            document.body.appendChild(eleLink);
            eleLink.click();
            // 然后移除
            document.body.removeChild(eleLink);
        },
        cancel(){
            this.dialog = false
        }
    }
}
</script>

<style>

</style>