<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- <AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Special Events</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="variant-ghost-surface btn btn-sm" href="" target="_blank" rel="noreferrer"
					>Twitter</a
				>
				<a class="variant-ghost-surface btn btn-sm" href="" target="_blank" rel="noreferrer">
					GitHub
				</a>
			</svelte:fragment>
		</AppBar> -->
	</svelte:fragment>

	<slot />
</AppShell>
