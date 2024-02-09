import specialEvents from '$lib/data/special-events.js';

export function load({ params }) {
	return {
		race: specialEvents.find((event) => event.id === params.raceId)
	};
}
