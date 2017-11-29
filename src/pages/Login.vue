<template>
    <div class="wrapper">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <el-button style="padding: 3px 0" type="text">首页</el-button>
            <span>/</span>
            <el-button style="padding: 3px 0" type="text">登录</el-button>
        </div>
        <div class="content">
            <el-form ref="form" label-width="0px" size="mini">
                <el-form-item label="">
                    <!-- <el-input style="width: 270px;"></el-input> -->
                    <el-input v-model="input" placeholder="请输入32位accesstoken"></el-input>
                </el-form-item>
                <!-- <el-form-item label="密码">
                    <el-input style="width: 270px;"></el-input>
                </el-form-item> -->
                <el-form-item size="large" style="text-align: center;">
                    <el-button type="primary" @click="submit">登录</el-button>
                    <!-- <el-button type="primary">通过 GitHub 登录</el-button> -->
                    <!-- <el-button style="padding: 3px 0" type="text" class="forget">忘记密码了?</el-button> -->
                </el-form-item>               
            </el-form>           
        </div>
    </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                input: ''
            }
        },
        methods: {
            submit () {
                if (this.input =='') {
                    alert('您输入的信息有误')
                } else {
                    console.log(typeof this.input)
                    this.$http({
                        url:'https://cnodejs.org/api/v1/accesstoken',
                        method:'post',
                        params:{
                            accesstoken:this.input
                        },
                    }).then((res) => {
                        console.log(res)
                        if (res.status == 200) {
                            alert('登录成功')
                        }
                        
                    }).catch((res) => {
                        console.log(res)
                    })
                }
            }
        }
    }
//063c5f65-b528-4fef-b44c-f1803fddae4d   
</script>

<style scoped>
.wrapper{
    padding: 10px 52px;
}
.content{
   display: flex;
   justify-content: center;
}
.forget{
    color: #778087;
}
</style>