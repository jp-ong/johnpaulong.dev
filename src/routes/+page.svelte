<script lang="ts">
	import ExperienceBlock from '$lib/components/ExperienceBlock.svelte';
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import { ACTIVE_EXPERIENCE, EXPERIENCES } from '$lib/constants/data';
</script>

<section>
	<div class="flex flex-wrap items-end gap-4">
		<img src="/me.jpg" alt="" class="size-40 rounded-full object-cover" />
		<div>
			<span>Hello, I'm</span>
			<h1 class="text-5xl font-semibold">John Paul Ong</h1>
			<p class="mt-4 tracking-wider">
				<span>Software Engineer</span>
				<span class="ml-2 border-l pl-2">Frontend, Backend, Mobile</span>
			</p>
		</div>
	</div>

	<div class="mt-10 flex flex-col gap-4">
		<p>
			Software Engineer with nearly 4 years of experience across frontend, backend, mobile, and
			AI-driven solutions.
		</p>
		<p>
			Strong passion for frontend development and user experience, while also adept at building
			scalable backend systems and exploring emerging technologies.
		</p>
		<p>
			Skilled in modern frameworks and tools, delivering high-quality, responsive, and performant
			applications.
		</p>
		<p>
			Eager to contribute versatile expertise to innovative projects and help drive business
			success.
		</p>
	</div>

	<div class="mt-10">
		Send your project details today at <a href="mailto:jpong5202@gmail.com" class="underline"
			>jpong5202@gmail.com</a
		>
	</div>

	<div class="mt-2 flex flex-row flex-wrap gap-4">
		<a
			href="https://github.com/jp-ong"
			class="flex h-10 items-center gap-2 rounded border-2 px-4 font-medium"
			target="_blank"
		>
			<GitHubIcon class="size-4" />
			<span>GitHub</span>
		</a>
		<a
			href="https://linkedin.com/in/johnpaulong"
			class="flex h-10 items-center gap-2 rounded border-2 px-4 font-medium"
			target="_blank"
		>
			<LinkedInIcon class="size-4" />
			<span>LinkedIn</span>
		</a>
		<a
			href="/resume.pdf"
			class="flex h-10 items-center gap-2 rounded border-2 border-black bg-black px-4 font-medium text-white"
			target="_blank"
			download=""
		>
			<span>Download Resume</span>
		</a>
	</div>
</section>

<section class="mt-20">
	<h2 class="text-2xl font-semibold">Technical Skills</h2>
	<div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
		<ul class="list-inside list-disc">
			<h3 class="font-medium">Frontend Development</h3>
			<li>HTML / CSS</li>
			<li>JavaScript / TypeScript</li>
			<li>React / Next</li>
			<li>Svelte / SvelteKit</li>
		</ul>
		<ul class="list-inside list-disc">
			<h3 class="font-medium">Backend Development</h3>
			<li>Node + Express</li>
			<li>Nest</li>
			<li>Python</li>
			<li>Django</li>
			<li>FastAPI</li>
		</ul>
		<ul class="list-inside list-disc">
			<h3 class="font-medium">Mobile Development</h3>
			<li>React Native</li>
			<li>Flutter</li>
		</ul>
		<ul class="list-inside list-disc">
			<h3 class="font-medium">Database</h3>
			<li>MongoDB</li>
			<li>PostgreSQL</li>
		</ul>
		<ul class="list-inside list-disc">
			<h3 class="font-medium">Tools</h3>
			<li>Git</li>
			<li>GitHub / GitLab</li>
			<li>Figma</li>
		</ul>
	</div>
</section>
<section class="mt-20">
	<h2 class="text-2xl font-semibold">Work Experience</h2>
	<ul class="mt-10 flex flex-col gap-5">
		{#each EXPERIENCES as experience}
			<li><ExperienceBlock {experience} active={ACTIVE_EXPERIENCE === experience.id} /></li>
		{/each}
	</ul>
</section>
