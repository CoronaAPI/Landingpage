<template>
  <div v-click-outside="hide" class="changelog" />
</template>

<script>

export default {
  name: "headway",
  mounted() {
    const HW_config = {
      selector: ".links",
      account: "J5ggqx"
    };
    Headway.init(HW_config);
  }
}
</script>
