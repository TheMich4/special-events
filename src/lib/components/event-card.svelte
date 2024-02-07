<script lang="ts">
	import type { SpecialEvent } from '$lib/types';

	export let race: SpecialEvent;

	const done = race.endDate ? race.endDate < new Date() : false;
</script>

<a class={`card bg-initial card-hover overflow-hidden ${done && 'opacity-50'}`} href="/">
	<div class="p-4 space-y-4">
		<h3 class="h3">{race.name}</h3>
		<h6 class="h6">{race.track}</h6>

		{#if race.cars?.length}
			<p class="text-xs">{race.cars.join(', ')}</p>
		{/if}
	</div>

	<hr class="opacity-50" />

	<footer class="p-4 flex justify-between items-center space-x-4">
		<small>{race.date}</small>

		<div class="flex flex-row gap-2">
			{#if done}
				<span class="badge variant-filled-success">Finished</span>
			{/if}
			{#if race.type}
				<span
					class={`badge ${race.type === 'Team Event' ? 'variant-filled-primary' : 'variant-filled-secondary'}`}
					>{race.type}</span
				>
			{/if}
		</div>
	</footer>
</a>
