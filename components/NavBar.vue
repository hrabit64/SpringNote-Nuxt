<template>
  <DefaultNavBar v-if="!mobile"></DefaultNavBar>
  <MobileNavBar v-if="mobile"></MobileNavBar>
</template>

<script setup lang="ts">
import {useRuntimeConfig} from "nuxt/app";
import {ref} from "vue";

const runtimeConfig = useRuntimeConfig();

//모바일
import { useDisplay } from 'vuetify'
import DefaultNavBar from "~/components/default/DefaultNavBar.vue";
import MobileNavBar from "~/components/mobile/MobileNavBar.vue";
const { mobile } = useDisplay()
</script>
<style scoped>

</style>