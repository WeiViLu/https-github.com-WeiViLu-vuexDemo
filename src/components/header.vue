<template>
    <header class="layout">
         <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    工作中心
                </Menu-item>
                <Menu-item name="2">
                    客户档案
                </Menu-item>
                <Menu-item name="3">
                    报告管理
                </Menu-item>
                <Menu-item name="4">
                    合同管理
                </Menu-item>
            </div>
            <Input v-model="inputTxt" class="inputauthor">
                <Button slot="append" icon="ios-search" @click="setAuthor"></Button>
            </Input>
        </Menu>
    </header>
</template>
<script>
    export default{
        data(){
            return{
                inputTxt:''
            }
        },
        methods:{
            setAuthor:function(){
                // this.$store.state.author=this.inputTxt
                this.$store.commit('newAuthor',this.inputTxt)
            }
        }
    }
</script>
<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .inputauthor{
        width: 200px;
        top: 15px;
        left: 20px;
        position: relative;
    }
</style>