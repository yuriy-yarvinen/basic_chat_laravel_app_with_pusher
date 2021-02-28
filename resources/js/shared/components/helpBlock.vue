<template>
	<div class="helpBlog">
		<button :class="custom_class_button" class="helpBlogBtn">{{ btnText }}</button>
		<div :class="custom_class_content" v-html="value" :style="`width:${width};min-width:${width}`" class="helpBlog-content row m-0">
		</div>
	</div>
</template>

<script>
export default {
	props:{
		btnText:{
			default:'[?]'
		},
		value:{
			default:null
		},
		custom_class_button:{
			default:null
		},
		custom_class_content:{
			default:null
		},
		width:{
			default:'100px'
		},
	}
}
</script>