<template>
<div>
	<li class="list-group-item" :class="liClassName" >{{value}}</li>
	<small class="badge float-right" :class="badgeClassName">You</small>
</div>

</template>

<script>
export default {
	data(){
		return {
		}
	},
	props: ['value', 'color'],
	computed:{
		liClassName(){
			return `list-group-item-${this.color}`;
		},
		badgeClassName(){
			return `badge-${this.color}`;
		}
	}
}
</script>
