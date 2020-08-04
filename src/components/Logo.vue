<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
	    &larr; Home
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
    color: var(--body-color)!important;
    font-size: .9em;
    padding: 10px;
    border-radius: var(--radius);
    background-color: var(--bg-color);
    box-shadow: var(--box-shadow);

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}
}
</style>
