<template>

	<div class="w-50 mr-auto ml-auto justify-content-center">
		<div class="card card-body pt-4">
			<div>
				<h4 class="enterModalText pb-2">Чтобы использовать эту страницу вам сначала нужно выйти.</h4>

				<a class="mainButton mr-auto ml-auto mt-4 mb-4 w-25 text-center text-white" href="#" @click.prevent="logout()">Выйти</a>

			</div>
		</div>
	</div>

</template>

<script>
import logout from '../mixins/logout';
export default {
  mixins: [logout]
}
</script>