import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_KEY } from '$env/static/public';

export const load = async () => {
	console.log('111');
	if (browser) {
		console.log('222');
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: 'https://app.posthog.com'
		});
	}
	return;
};
