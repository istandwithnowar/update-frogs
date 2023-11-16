// Utilities
import { defineStore } from 'pinia'
// import { useTheme } from 'vuetify'
// const theme = useTheme()
const localNftSave = localStorage.getItem('_nftInfo')
const nftInfo = localNftSave && localNftSave.substring(0,1) === '{' && localNftSave.substring(localNftSave.length-1, localNftSave.length) ? JSON.parse(localNftSave) : undefined
export const useAppStore = defineStore('app', {
  state: () => ({
    //
    theme: 'light',
    htmlCode: localStorage.getItem('_htmlCode') || '',
    nftInfo: {
      tokenId: nftInfo && nftInfo.tokenId?nftInfo.tokenId:'', 
      inscriptionNo: nftInfo && nftInfo.inscriptionNo?nftInfo.inscriptionNo:''
    },
    updateData: null
  }),
  getters: {
    updateData: () => {
      return this.updateData ? JSON.parse(this.updateData) : null
    },
  },
  actions: {
    setTheme(themeName){
      this.theme = themeName
    },
    setHtmlCode(htmlCode,  tokenId, inscriptionNo) {
      this.htmlCode = htmlCode
      localStorage.setItem('_htmlCode', htmlCode)
      localStorage.setItem('_nftInfo', JSON.stringify({tokenId, inscriptionNo}))
    },
    setUpdateData(updateData){
      this.updateData = JSON.stringify(updateData)
    }
  }
})
