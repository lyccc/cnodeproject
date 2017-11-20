<template>

	<div class="pane">
		<div class="header">
			<h2 class="topic-title">{{articleData.title}}</h2>
			<div class="changes">
				<span>发布于: {{createTime}}</span>|
				<span>作者:{{loginname}}</span>|
				<span>最后一次回复是在:{{lastReply}}</span>
			</div>
		</div>
		
		<div class="content" v-html="articleData.content"></div>
		<div class="discuss-box">
			<div class="replies">{{this.replies.length}}  回复</div>
			<div class="menu" v-for="(item, index) in replies" :key="index">
				<div>
					<img :src='item.author.avatar_url' alt="" class="user_avatar">
					<span>{{item.author.loginname}}</span>
				</div>
				<div class="repliesContent" v-html="item.content">

				</div>
		</div>
		</div>	
	</div>
	
</template>

<script>
	export default {
		data () {
			return {
				articleData: '',
				createTime: '',
				lastReply: '',
				loginname: '',
				replies: ''
			}
		},
		beforeCreate: function () {
	        console.log(this.$route.params.id);//获取路由传过来的id值
	        this.$http({
	            url: 'https://cnodejs.org/api/v1/topic/'+this.$route.params.id,
	            method: 'get',
	        }).then((res) => {
	            if (res.data.success === true) {	                
	                this.articleData = res.data.data;
					this.createTime =  String(this.articleData.create_at).match(/.{10}/)[0];
					this.lastReply = String(this.articleData.last_reply_at).match(/.{10}/)[0];
					this.loginname = res.data.data.author.loginname;
					this.replies = res.data.data.replies;
					console.log(this.articleData);
				
	            } else {
	               
	            }
	        }).catch((res) => {
	            console.log('articleCom.vue: ', res);
	        });
      	}
	}
</script>

<style scoped>
.pane{
	/* background-color: white; */
}
.header{
	padding: 10px;
	background-color: white;
}
.header h2{
	font-size: 22px;
	font-weight: 700;
}
.content{
	padding: 0 10px;
	background-color: white;
}
.changes{
	color: #838383;
	font-size: 14px;
	border-bottom: 1px solid #eee;
}
.discuss-box{
	margin-top: 10px;
	background-color: white;	
}
.replies{
	padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
	font-size: 14px;
}
.menu{
	padding: 10px;
	border-bottom: 1px solid #eee;
}
.user_avatar{
	width: 30px;
    height: 30px;
    border-radius: 3px;
}
</style>