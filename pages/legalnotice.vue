<template>
	<article>
		<h2>{{ $t('footer_legalnotice') }}</h2>

		<div v-html="$t('page_legalnotice_content')"></div>
		
		<h2>{{ $t('team_title') }}</h2>

		<h3>{{ $t('team_member1_name') }}</h3>
		<p>{{ $t('team_member1_position') }}</p>

		<h3>{{ $t('team_member2_name') }}</h3>
		<p>{{ $t('team_member2_position') }}</p>

		<h3>{{ $t('team_member3_name') }}</h3>
		<p>{{ $t('team_member3_position') }}</p>

		<p class="weintoltd" v-html="$t('team_collaboration')"></p>

	</article>
</template>

<style lang="scss" scoped>
	.weintoltd{
		margin-top:3rem;
	}
</style>