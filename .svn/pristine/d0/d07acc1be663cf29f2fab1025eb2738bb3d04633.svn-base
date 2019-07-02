<template>
    <div class="d-submenu-wrap">
        <Scroll always ref="scrollbar">
            <div class="d-submenu-body">
                <div class="d-submenu-title">目录</div>
                    <ul class="d-submenu-section" v-for="(item,index) in menu" :key="index">
                        <li class="d-submenu-title submenu-title-p" :data="'title-'+(index+1)" :index="index"
                        :class="{
                            active:
                            (
                                ((index!==(menu.length-1))&&(pTops[index]<=standartHeight)&&(pTops[index+1]>standartHeight))||
                                ((index===menu.length-1)&&(pTops[index]<=standartHeight))
                            )
                        }" 
                        @click="handleClickTitle">{{index+1}}. {{item.title}}</li>
                    </ul>
            </div>
        </Scroll>
    </div>
</template>
<script>
    import { on, off } from '../../assets/js/dom';
    export default {
        name: 'DMenu',
        props:{
        },
        data () {
            return {
                scrollTop:0,
                standartHeight:0,
                pTops:[],
                targetTitleTop:0,
                menu:[]
            }
        },
        computed:{
            scroll_main(){
                if(this.$parent.$parent.$parent.$parent){
                    return this.$parent.$parent.$parent.$parent;
                }
            }
        },
        watch:{
            scrollTop(){
                this.getTops();
            },
        },
        created () {
        },
        methods: {
            getTops(){
                var pTitles = document.getElementById("J_contentMain").getElementsByClassName('title2');
                this.pTops = [];
                for(var i = 0;i<pTitles.length;i++){
                    this.pTops.push(pTitles[i].offsetTop-this.scrollTop);
                }
            },
            handleScroll () {
                this.scrollTop = this.scroll_main.$el.children[0].scrollTop;
            },
            handleClickTitle (e){
                // const id = e.target.getAttribute('data');
                // this.targetTitleTop = document.getElementById(id).offsetTop;
                const index = e.target.getAttribute('index');
                this.targetTitleTop = document.getElementById("J_contentMain").getElementsByClassName('title2')[index].offsetTop;
                this.scroll_main.$el.children[0].scrollTop = this.targetTitleTop; 
            },
        },
        mounted () {
            let titles = document.getElementById("J_contentMain").getElementsByClassName('title2');
            for(let i = 0;i<titles.length;i++){
                let temp = {
                    title:titles[i].innerText.replace('：','')
                }
                this.menu.push(temp);
            }
            this.$nextTick(()=>{
                    this.standartHeight = this.$refs.scrollbar.$el.offsetParent.offsetTop;
                    this.getTops();
                    on(this.scroll_main.$el.children[0], 'scroll', this.handleScroll);
            })    
        }
    }
</script>
