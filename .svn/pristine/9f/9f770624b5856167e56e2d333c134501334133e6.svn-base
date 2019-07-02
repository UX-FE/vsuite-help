<template>
    <!--sidebar left start-->
    <aside class="sider">
        <Scroll>
            <ul id="J_siderList">
                <li v-for="(item,index) in sider" :key="index" :class="[
                        item.class,
                        {
                            active: item.href === $route.path
                        }
                    ]">
                    <template v-if="item.href">
                        <router-link tag="span" v-text="item.name" :to="item.href"></router-link>
                    </template>
                    <template v-else>
                        <span v-text="item.name"></span>
                    </template>
                </li>
            </ul>
        </Scroll>
    </aside>
    <!--sidebar left end-->
</template>
<script>
    export default {
      name: 'DSider',
      props: ['sider'],
      data () {
        return {
          siderBar: {
            index: 'i_sider',
            component: 'c_sider',
            util: 'u_sider',
            document: 'd_sider'
          },
        }
      },
      watch: {},
      created () {},
      methods: {

      },
      mounted () {
        this.$nextTick(function () {

        })
      }
    }
</script>
<style lang="scss">

.sider {
    position: fixed;
    z-index: 2;
    width: 400px;
    padding-left: 200px;
    height: 100%;
    background-color: #fff;
	padding-top: 36px;
	padding-bottom: 70px;
    top: 60px;
	&>ul{
		position: relative;
		margin-top: -20px;
	}
    li{
		font-size: 14px;
		margin-bottom: 20px;
		&.active{
			&>span{
				color: #4B61D9;
				font-weight: bold;
			}
		}
        &.title1{
            font-size: 16px;
            font-weight: bold;
        }
        &.title2{
            font-size: 12px;
            color: #999;
		}
		&:not(.title)>span{
			&:hover{
				color: #4B61D9;
				cursor: pointer;
			}
		}
    }
}
@media screen and (max-width: 1280px) {
	.sider{
		width: 300px;
		padding-left: 100px;
	}
}
</style>