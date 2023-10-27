<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useCurrentUser, useFirebaseAuth} from "vuefire";
import {useUserStore} from "~/store/user";

const router = useRouter()
const route = useRoute()
const user = useCurrentUser()
const auth = useFirebaseAuth()
const userStore: UserStore = useUserStore();
//로그 아웃 감지
onMounted(() => {
  watch(user, (newUser, prevUser) => {
    if (prevUser !== null && newUser === null) {
      userStore.clearUser();
    }
  })
})
</script>