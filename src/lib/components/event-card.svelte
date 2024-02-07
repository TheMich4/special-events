<script lang="ts">
	import type { SpecialEvent } from '$lib/types';

	export let race: SpecialEvent;
	console.log({ race });
</script>

<a class="card bg-initial card-hover overflow-hidden" href="/">
	<div class="p-4 space-y-4">
		<h3 class="h3">{race.name}</h3>
		<h6 class="h6">{race.track}</h6>
	</div>

	<hr class="opacity-50" />

	<footer class="p-4 flex justify-start items-center space-x-4"><small>{race.date}</small></footer>
</a>
