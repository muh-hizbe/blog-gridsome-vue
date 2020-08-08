<template>
	<div class="author">

		<!-- <g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" /> -->

		<h1 v-if="showTitle" class="author__site-title">
			<g-link to="/about"> {{ $static.metadata.siteName }} </g-link>
		</h1>

		<p class="author__intro">
			{{ $static.metadata.siteDescription }}
		</p>

		<p class="author__links">
			<g-link to="//linkedin.com/in/muhammad-hizbullah-736109168/"><i class="fa fa-linkedin" aria-hidden="true"></i></g-link>
            <g-link to="//github.com/muh-hizbe"><i class="fa fa-github" aria-hidden="true"></i></g-link>
            <g-link to="//twitter.com/muh__hizbullah"><i class="fa fa-twitter" aria-hidden="true"></i></g-link>
            <g-link to="mailto:muh.saferagic@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></g-link>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName,
	siteDescription
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}

.author h1{
    font-size: 50px;
    font-family: 'Courier','Brush Script MT','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;;
    
    a{
        text-decoration: none !important;
    }
}
</style>
