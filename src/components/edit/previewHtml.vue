<template>
    <div class="PreviewHtml">
        <v-tabs
            fixed-tabs
            v-model="tab"
            color="deep-purple-accent-4"
        >
            <v-tab value="preview">
                Preview
            </v-tab>
            <v-tab value="code">
                Source
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item
                key="preview"
                value="preview"
            >
                <v-container fluid>
                    <iframe ref="previewCon" id="preview" allowTransparency="true" border="0" frameborder="0" scrolling="no"></iframe>
                    <div>
                        <v-btn @click="download">Download html</v-btn>
                    </div>
                </v-container>
            </v-window-item>
            <v-window-item
                key="code"
                value="code"
            >
                <v-container fluid>
                    <v-textarea readonly label="HTML" clearable counter auto-grow v-model="htmlCode"></v-textarea>
                </v-container>
            </v-window-item>
        </v-window>
        
    </div>
</template>
  
<script>
import { events } from '@/bus'
import * as cheerio from 'cheerio';
import { useAppStore } from '@/store/app';

export default {
    name: 'PreviewHtml',
    setup(){
    const appStore = useAppStore()
    return { appStore }
    },
    components: {

    },
    data() {
        return {
            htmlCode: '',
            tab: 'preview',
            previewUrl: '',
            tokenId: ''
        }
    },
    mounted(){
        this.htmlCode = this.appStore.htmlCode
        this.tokenId = this.appStore.nftInfo.tokenId
        events.on('setComponent', (code) => {
            console.log('mounted.onsetComponent 被点击 :', code )
            this.updateHtmlCode(code)
        })
    },
    watch: {
        previewSrc() {
        // 监听预览URL变化事件
            this.updatePreview()
            this.$refs.previewCon.contentWindow.location.replace(this.previewUrl);
            // console.log('this.$refs.preview.: ', this.$refs.previewCon)
        }
    },
    computed: {
        previewSrc() {
            if(this.htmlCode=="") {
                return 'about:blank';
            }
            // 将代码转换为HTML文本
            // const html = `<html><head><style>${this.css}</style></head><body>${this.html}</body></html>`;
            var html = this.htmlCode + '';
            html= html.replace('https://Ordinals.com', 'https://ordiscan.com')
            html= html.replace(/\/content\//g, 'https://ordiscan.com/content/')
            console.log('html: ', html)
            // 将HTML文本作为Blob对象创建URL
            const blob = new Blob([html], { type: 'text/html' });
            return URL.createObjectURL(blob);
        },
        html() {
            // 使用正则表达式从代码中提取HTML文本
            const match = this.htmlCode.match(/<body>([\s\S]*?)<\/body>/);
            return match ? match[1].trim() : '';
        },
        css() {
            // 使用正则表达式从代码中提取CSS文本
            const match = this.htmlCode.match(/<style[\s\S]*?>([\s\S]*?)<\/style>/);
            return match ? match[1].trim() : '';
        }
    },
    methods: {
        updatePreview() {
        // 更新预览URL
            console.log('this.previewSrc: ', this.previewSrc)
            this.previewUrl = this.previewSrc;
        },
        updateHtmlCode({category, component, index }){
            const { name, cid } = component
            const doc = cheerio.load(this.htmlCode+'')
            const img = doc('#Frogs').find('img').eq(index)
            if(img){
                img.attr('src', '/content/'+cid)
                img.attr('alt', name)
                img.attr('category', category)
            }
            this.htmlCode = doc.html().replace(/24rem/g, '100%')
            return this.htmlCode
        },
        download() {
            var eleLink = document.createElement('a');
            eleLink.download = [this.tokenId, 'html'].join('.');
            eleLink.style.display = 'none';
            // 字符内容转变成blob地址
            const doc = cheerio.load(this.htmlCode+'')
            doc('base').eq(1).remove()
            doc('base').eq(0).remove()
            var imgs = doc('#Frogs').find('img')
            for(var i = 0 ; i < imgs.length ; i++){
                imgs.eq(i).attr('src', imgs.eq(i).attr('src').replace('https://ordiscan.com', ''))
            }

            var blob = new Blob([doc.html()+'']);
            eleLink.href = URL.createObjectURL(blob);
            // 触发点击
            document.body.appendChild(eleLink);
            eleLink.click();
            // 然后移除
            document.body.removeChild(eleLink);
        }
    }
}
</script>

<style lang="scss" scoped>
.PreviewHtml{
    height: 100%;
    #preview{
        background-color: white;
        border: 0px;
        height: 500px;
        width: 500px;
    }

}
</style>
