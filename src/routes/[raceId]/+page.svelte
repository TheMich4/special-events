<script lang="ts">
	export let data;
</script>

{#if data.race}
	<div class="flex h-screen flex-col items-center gap-4 p-12">
		<div class="container max-w-[800px]">
			<div class="card bg-initial flex flex-row w-full overflow-hidden h-[300px]">
				<img alt="{data.race.name} cover" src={data.race.cover} class="object-cover" />

				<div class="p-6 flex flex-col gap-2 h-full justify-between">
					<div class="flex flex-col gap-2">
						<h2 class="h2">
							{data.race.fullName ?? data.race.name}
						</h2>
						<h6 class="h6 opacity-80">{data.race.track}</h6>

						{#if data.race.cars}
							<div class="flex flex-col">
								{#each data.race.cars as carClass}
									<h6 class="h6 opacity-80">{carClass}</h6>
								{/each}
							</div>
						{/if}
					</div>

					<small class="relative bottom-0">{data.race.date}</small>
				</div>
			</div>
		</div>

		<h6 class="h6">Results coming soon...</h6>
	</div>
{/if}
