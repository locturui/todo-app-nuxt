<script setup lang="ts">
import type { FetchError } from "ofetch";

const errorMsg = ref("");
const loading = ref(false);
const taskName = ref("");

async function onSubmit() {
	if (!(taskName.value.trim())) {
		errorMsg.value = "Task name is required";
		return;
	}
	loading.value = true;
	errorMsg.value = "";
	try {
		const res = await $fetch("/api/tasks", {
			method: "POST",
			body: {
				title: taskName.value,
			},
		});
		console.log(res);

		navigateTo({
			name: "tasks-id",
			params: {
				id: res.id,
			},
		});
	}
	catch (e) {
		const error = e as FetchError;
		errorMsg.value = error.statusMessage || "An unknown error occurred";
	}
	loading.value = false;
	taskName.value = "";
}
</script>

<template>
	<div>
		<article
			v-if="loading"
			aria-busy="true"
		/>
		<article v-else-if="errorMsg">
			{{ errorMsg }}
		</article>
		<form
			v-else
			@submit.prevent="onSubmit"
		>
			<label>
				Task
				<input
					v-model="taskName"
					type="text"
					name="title"
					@input="errorMsg = ''"
				>
			</label>
			<div class="btn-container">
				<button>Create</button>
			</div>
		</form>
	</div>
</template>
