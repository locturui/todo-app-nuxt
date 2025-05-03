<template>
	<nav class="container">
		<ul>
			<li>
				<NuxtLink to="/">
					<strong>Todo App</strong>
				</NuxtLink>
			</li>
		</ul>
		<ul>
			<li><NuxtLink :to="{ name: 'create' }">Create Tasks</NuxtLink></li>
		</ul>
	</nav>
</template>
