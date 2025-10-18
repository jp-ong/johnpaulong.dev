<script lang="ts">
	import type { Experience } from '$lib/types/experience';

	interface ExperienceBlockProps {
		experience: Experience;
		active?: boolean;
	}

	const { experience, active }: ExperienceBlockProps = $props();
	const { company, date, description, position } = experience;
</script>

<div class="flex flex-row gap-4">
	<div class="flex flex-col items-center gap-5">
		<div class="flex h-6 items-center">
			<div class="size-2 rounded-full bg-black"></div>
		</div>
		<div
			class="h-full w-1 rounded-full"
			class:bg-gray-200={!active}
			class:bg-gray-400={active}
		></div>
	</div>

	<div class="flex flex-col pb-10">
		<div
			class="flex h-6 w-min items-center rounded-full bg-black px-2 text-xs font-medium whitespace-nowrap text-white"
		>
			{date}
		</div>
		<div class="mt-5">
			<div>
				<h3 class="font-medium">{company}</h3>
				<small class="text-xs">{position}</small>
			</div>
			<p class="mt-5 whitespace-pre-wrap">{description}</p>
		</div>
	</div>
</div>
