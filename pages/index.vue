<script setup lang="ts">
const { data, error, status } = await useFetch("/api/tasks", { lazy: true });
</script>

<template>
	<div>
		<h2 v-if="data">
			Tasks
		</h2>
		<h2 v-else>
			No tasks yet, create one!
		</h2>
		<article
			v-if="status == 'pending'"
			aria-busy="true"
		/>
		<article
			v-else-if="status == 'error'"
			class="error"
		>
			{{ error?.statusMessage || 'An unknown error occurred' }}
		</article>

		<article
			v-for="task in data"
			:key="task.id"
			class="card"
		>
			<label>
				<input
					:checked="task.done"
					type="checkbox"
					@input="() => {}"
				>
				<span :class="{ done: task.done }">{{ task.title }}</span>
			</label>
			<div class="btn-container">
				<NuxtLink
					role="button"
					:to="{
						name: 'tasks-id',
						params: {
							id: task.id,
						},
					}"
				>View</NuxtLink>
			</div>
		</article>
	</div>
</template>

<style scoped>
.task-list {
    margin-top: 1rem;
}

.done {
    text-decoration: line-through;
}

.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
