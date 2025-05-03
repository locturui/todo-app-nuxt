<script setup lang="ts">
const route = useRoute();
const { data, error, status } = await useFetch(`/api/tasks/${route.params.id}`, {
	lazy: true,
});

const deleteTask = async () => {
	const res = await $fetch(`/api/tasks/${route.params.id}`, {
		method: "DELETE",
	});
	console.log(res);
	navigateTo({
		name: "index",
	});
};
</script>

<template>
	<article
		v-if="status == 'pending'"
		aria-busy="true"
	/>
	<article
		v-else-if="error"
		class="error"
	>
		{{ error.statusMessage || 'An unknown error occurred' }}
	</article>
	<div v-else-if="data">
		<article>
			{{ data?.title }}
		</article>
		<div class="btn-container">
			<button @click="deleteTask">
				Delete
			</button>
		</div>
	</div>
</template>
