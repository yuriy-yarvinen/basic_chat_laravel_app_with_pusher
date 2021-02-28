<template>
	<div class="back" @click="goBack">
		<i class="fas fa-arrow-left"></i> Назад
	</div>
</template>

<script>
export default {
	props:{
		link:{
			default:null
		}
	},
	methods:{
		goBack(){
			if(this.link){
				this.$router.push(this.link);
			}
			else{
				this.$router.go(-1)
			}
		}
	}
}
</script>