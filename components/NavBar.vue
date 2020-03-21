<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">CoronaAPI</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="https://corona.ndo.dev/api-docs/swagger-ui/#/default/get_"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          API
        </a>
      </div>
      <div>
        <a
          class="inline-block font-semibold text-xl px-2 rounded py-2 leading-none text-white hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          href="https://github.com/CoronaAPI"
        >
          <fa size="lg" :icon="faGithub" />
        </a>
      </div>
    </div>
  </nav>
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
