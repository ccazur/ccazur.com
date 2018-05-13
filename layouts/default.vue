<template>
  <div class="layout__default">
	<header>
	  <h1>
		<nuxt-link :to="localePath('index')">
		<img src="/img/app/logo_ccazur.png" alt="CCAZUR FRANCE" />
		</nuxt-link>
	  </h1>
	  <nav>
		<ul>
		  <li><nuxt-link class="header__link" :to="localePath('services')" active-class="none" exact>{{ $t('nav_services') }}</nuxt-link></li>
		  <li><nuxt-link class="header__link" :to="localePath('contact')" active-class="none" exact>{{ $t('nav_contact') }}</nuxt-link></li>
		</ul>
	  </nav>
	</header>
	
	<section class="nuxt"><nuxt/></section>
	

	<footer>
	  <p class="langswitcher">
		<nuxt-link class="header__link" v-if="$i18n.locale === 'fr'" :to="switchLocalePath('en')" active-class="none" exact>{{ $t('locale_en') }}</nuxt-link>
		<nuxt-link class="header__link" v-else :to="switchLocalePath('fr')" active-class="none" exact>{{ $t('locale_fr') }}</nuxt-link>
	  </p>
	  <div class="footer">
		<p>{{ $t('footer_ics') }}</p>
		<p>{{ $t('footer_copyright') }} — <nuxt-link :to="localePath('legalnotice')">{{ $t('footer_legalnotice') }}</nuxt-link></p>
		<p>{{ $t('footer_coo') }}</p>
	  </div>

	</footer>
  </div>
</template>

<style lang="scss" scoped>
.layout__default{
  text-align:center;

  header{
	max-width:500px;
	margin:3rem auto;

	img{
	  width:100%;
	  max-width:450px;
	  padding:0 1rem;
	  box-sizing:border-box;
	}
  }

  nav{
	margin-top:4rem;
	ul{
	  display:block;
	  padding:0.5rem 0;
	  border-top:1px #993838 solid;
	  border-bottom:1px #993838 solid;
	}
	li{
	  display:inline-block;
	  margin:0 1rem;
	}

	a{
	  text-decoration:none;
	  color:var(--color-secondary);
	}
  }


  footer{

	font-family:arial, sans-serif;
	margin-top:2rem;

	a{
	  text-decoration:none;
	  color:var(--color-secondary);
	}

	.langswitcher{
	  margin:0.5rem 0;
	}

	.footer{
	  background:#570A0B;
	  font-size:0.7rem;
	  padding:1rem 0;
	  line-height:1.1rem;

	  a{
		text-decoration:underline;
	  }

	  p{
		margin:0;
	  }
	}
  }
}
</style>

<style lang="scss">
	article{
		text-align:left;
		font-family: arial;
		padding:1rem 0;
		max-width:500px;
		margin:0 auto;

		h2{
			border-bottom: 1px #dcd7af solid;
			font-size: 23px;
			margin-bottom: 20px;
			line-height:26px;
			padding-bottom:3px;
			font-family: Georgia, Georgia, serif;
			font-weight:normal;
		}

		h3{
			text-decoration:underline;
			font-weight:normal;
			margin-top:2rem;
			margin-bottom:10px;
		}

		p{
			margin-top:0;
			line-height:1.4rem;
		}

		a{
			color:var(--color-secondary);
		}
	}

</style>