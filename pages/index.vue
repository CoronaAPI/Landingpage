<template>
  <div>
    <h1 class="title">
      Corona-API-Landingpage
    </h1>
    <h2 class="subtitle">
      The CoronaAPI that scales :-) Here you can find all information to consume
      or contribute data of the COVID-19 virus.
    </h2>
    <div class="links">
      <a
        href="https://corona.ndo.dev/api-docs/swagger-ui/#/default/get_"
        target="_blank"
        class="button--green"
      >
        Documentation
      </a>
    </div>
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() {
      return faGithub
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
