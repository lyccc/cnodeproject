<template>
    <div class="wrapper">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <el-button style="padding: 3px 0" type="text">首页</el-button>
            <span>/</span>
            <el-button style="padding: 3px 0" type="text">登录</el-button>
        </div>
        <div class="content">
            <el-form ref="form" label-width="80px" size="mini">
                <el-form-item label="用户名">
                    <el-input style="width: 270px;"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input style="width: 270px;"></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary">登录</el-button>
                    <el-button type="primary">通过 GitHub 登录</el-button>
                    <el-button style="padding: 3px 0" type="text" class="forget">忘记密码了?</el-button>
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

            }
        }
    }
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