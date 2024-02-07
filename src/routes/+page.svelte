<script lang="ts">
	import EventCard from '$lib/components/event-card.svelte';
	import type { SpecialEvent } from '$lib/types';

	export let data: { races: SpecialEvent[] };
</script>

<div class="flex h-screen w-screen flex-col items-center gap-4 p-12">
	<h1 class="h1 mb-8">iRacing Special Events 2024</h1>

	<div class="grid w-full grid-cols-1 gap-4 md:w-fit md:grid-cols-2 xl:grid-cols-3">
		{#each data.races as race (race.name)}
			<EventCard {race} />
		{/each}
	</div>
</div>
