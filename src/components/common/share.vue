<template>
	<div class="share">
		<ul class="shareul">
			<li>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_wei@2x.png" />
					</div>
					<p>微信好友</p>
				</div>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_peng@2x.png" />
					</div>
					<p>朋友圈</p>
				</div>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_qq@2x.png" />
					</div>
					<p>QQ好友</p>
				</div>
			</li>
			<li>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_kong@2x.png" />
					</div>
					<p>QQ空间</p>
				</div>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_weibo@2x.png" />
					</div>
					<p>微博</p>
				</div>
				<div class="sharebox">
					<div class="imgbox">
						<img src="../../../static/img/icon_fen_copy@2x.png" />
					</div>
					<p>复制链接</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		props:{

        },
		data() {
			return {

  		    }
        },
        methods:{
           
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../assets/css/public.less";
.share{
	background: #fff;
	.shareul{
		padding: 1.3rem 0;
		li{
			padding-bottom: 1.5rem;
			.flex;
		}
		li:last-child{
			padding-bottom:0;
		}
		
	}
	.sharebox{
			flex:1;
			text-align: center;
			display: inline-block;
			padding: 0 1.4rem;
			
			.imgbox{
				width: 2.9rem;
				height: 2.9rem;
				border-radius: 100px;
				background: #f5f5f5;
				// padding: .5rem;
				margin-bottom: .4rem;
			}
			img{
				width: 100%;
			}
			p{
				font-size: .6rem;
				color: #333333;
				text-align: center;
			}
		}

}

</style>
