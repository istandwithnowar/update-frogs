<template>
  <div class="com-list">
    <v-expansion-panels >
        <v-expansion-panel v-for="(cate, index) in componentsList" :key="cate.name" 
            :id="'category-'+index"
        >
            <v-expansion-panel-title>
                <v-icon :icon="cateIcon(index)"
                size="large" class="pd"></v-icon> 
                {{  cate.name }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pd-0">
                <div class="d-flex flex-wrap justify-center ll">
                    <v-card v-for="(item) in cate.child" :key="item.name"
                        height="10vw"
                        width="10vw"
                        @click="clickSetComponent(cate.name, item, index)"
                        :class="['item d-flex flex-wrap justify-center align-center bg' ]"
                        >
                        <div class="img">
                            <v-img  width="100%"
                                aspect-ratio="1/1"
                                cover
                                :src="cid2Url(item.cid)"></v-img>
                        </div>
                        <div class="name">{{ item.name  }}</div>
                    </v-card>
                </div>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
// import { ref, onMounted } from 'vue'
// import inscriptions from '../assets/datas/collections/inscriptions.json'
import category from '../assets/datas/components/category.json'

export default {
    name: 'ComList',
    data(){
        return {
            componentsList: category
        }
    },
    onMounted(){

    },
    emits: ['setComponent'],
    methods: {
        cid2Url(cid){
            return ['https://ordinals.com/content/', cid].join('')
        },
        cateIcon(index){
            return [
                'mdi-image',
                'mdi-theme-light-dark',
                'mdi-palette-swatch-variant',
                'mdi-currency-sign',
                'mdi-eye-minus-outline',
                'mdi-head-dots-horizontal'
            ][index]
        },
        clickSetComponent(category, component, index){
            this.$emit('setComponent', {category, component, index})
        }
    }
}

</script>

<style lang="scss" scoped>
.com-list{
    .pd{
        padding-right: 10px;
    }
    .ll{
        margin: 15px auto;
        .item{
            margin-top: 10px;
            margin-right: 10px;
            &.bg{
                background-color: rgb(244, 235, 246);
            }
            .name{
                position: relative;
                margin-top: 20px;
            }
            .img{

            }
        }
    }
    .pd-0{
       ::v-deep .v-expansion-panel-text__wrapper{
            padding: 0px;
        }
    }
}

</style>