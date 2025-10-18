<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>John Paul Ong | Software Engineer</title>
	<meta
		name="description"
		content="Software Engineer with nearly 4 years of experience across frontend, backend, mobile, and AI-driven solutions. Strong passion for frontend development and user experience, while also adept at building scalable backend systems and exploring emerging technologies. Skilled in modern frameworks and tools, delivering high-quality, responsive, and performant applications. Eager to contribute versatile expertise to innovative projects and help drive business success."
	/>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-5TFP5QXWX1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-5TFP5QXWX1');
	</script>
</svelte:head>

<main class="mx-auto max-w-prose px-5 py-10">{@render children?.()}</main>
