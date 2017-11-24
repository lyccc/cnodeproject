<template>
	<div id="contain" class="contain">
		<div class="pane-list">
			<a v-for="(item,index) in paneList" href="javascript:;" :class="{ative: index == tabIndex}" @click="topicsTab(item.tab, index)">{{item.title}}</a>
		</div>
		<ul>
			<li v-for="(item, index) in resData" :key="item.id">
				<div class="person-info">
					<img :src='item.author.avatar_url' :title='item.author.loginname'/>
					<div class="reply">
						<span class="reply-count">{{item.reply_count}}</span>/<span class="visit-count">{{item.visit_count}}</span>
					</div>
					<div class="title-info">				
						<router-link class="list-title" :to="{name:'Details',params:{id:item.id}}">[{{item.title}}]</router-link>
					</div>					
				</div>				
				<div class="create-time">
						{{$utils.goodTime(item.create_at)}}
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
import { Loading } from 'element-ui'
export default {
  name: 'main',
  data () {
    return {
      resData: [],		
      msg: 'Welcome',
	  limit: 10,
	  loadingInstance: '',
	  scrollWatch: true,
	  tab: 'all',
	  tabIndex: 0,
	  paneList:[
		  {title: '全部',tab: 'all'},
		  {title: '精华',tab: 'good'},
		  {title: '分享',tab: 'share'},
		  {title: '问答',tab: 'ask'},
		  {title: '招聘',tab: 'job'},
		  {title: '客户端测试',tab: 'dev'}
	  ]
    }
  },
  created: function() {
	//console.log(this.$http);
	this.loadingInstance = Loading.service({
		fullscreen: true,
		lock: true
		// spinner: 'el-icon-loading',
		// background: 'rgba(0, 0, 0, 0.7)'
		})
  	window.addEventListener('scroll', () => {
		  	if (this.scrollWatch) {
				  this.listenSrcoll()	
				  console.log(123)			  
		 	}
		  
	  })
    this.getData();
  },
  methods: {
  		getData() {
  			this.limit += 10;
  			this.$http({
                url: 'https://cnodejs.org/api/v1/topics?tab='+this.tab,
                method: 'get',
                params: {
                    page: 1,
                    limit: this.limit,
                    mdrender: 'false',
                },
            }).then((res) => {
				this.resData = res.data.data;
				// setTimeout(() => {
					this.loadingInstance.close();	
				// }, 1000);
				console.log(res);
            }).catch((res) => {
                console.log('mainCom.vue: ', res);
            });
  		},
  		listenSrcoll() { 			
  			if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
  				console.log('到底了');
				  this.getData();
				  this.loadingInstance = Loading.service({
					fullscreen: true,
					lock: true
					// spinner: 'el-icon-loading',
					// background: 'rgba(0, 0, 0, 0.7)'
				  })
  			}
  		},
  		//滚动条高度
  	 	getScrollTop() {
			　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
			　　if(document.body){
			　　　　bodyScrollTop = document.body.scrollTop;
			　　}
			　　if(document.documentElement){
			　　　　documentScrollTop = document.documentElement.scrollTop;
			　　}
			　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
			　　return scrollTop;
		},
		//文档的总高度
		getScrollHeight() {
			　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
			　　if(document.body){
			　　　　bodyScrollHeight = document.body.scrollHeight;
			　　}
			　　if(document.documentElement){
			　　　　documentScrollHeight = document.documentElement.scrollHeight;
			　　}
			　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
			　　return scrollHeight;
		},
		//浏览器视口的高度
		getWindowHeight() {
			　　var windowHeight = 0;
			　　if(document.compatMode == "CSS1Compat"){
			　　　　windowHeight = document.documentElement.clientHeight;
			　　}else{
			　　　　windowHeight = document.body.clientHeight;
			　　}
			　　return windowHeight;
		},
		topicsTab(tabs, tabIndex) {
			
			this.tab = tabs
			this.limit = 0
			this.tabIndex = tabIndex
			this.getData();
			console.log(this.tab)
		}
  },
  destroyed: function() {
	  console.log(456)
	  this.scrollWatch = false
  } 
}

</script>

<style scoped>
.contain{
	background-color: white;
}
.pane-list{
	padding: 10px;
	background-color: #f6f6f6;
}
.pane-list a{
	color: #80bd01;
	margin: 0 10px;
	font-size: 14px;
}
.pane-list .ative{
	background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
}
.contain ul li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #ccc;
}
.person-info{
	display: flex;
	justify-content: center;
	align-items: center;
}
.person-info img{
	width: 30px;
    height: 30px;
	border-radius: 2px;
}
.reply{
	width: 70px;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.reply-count{
	color: #9e78c0;
}
.visit-count{
	color: #b4b4b4;
}
.title-info{
	align-items: center;
}

.create-time{
	font-size: 12px;
	color: #778087;
}
</style>