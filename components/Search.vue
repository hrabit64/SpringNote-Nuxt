<template>
  <v-dialog
      v-model="isOpen"
      persistent
      :scrim="false"
      width="800"
      transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="nanumsquare-bold">포스트 검색</v-toolbar-title>
      </v-toolbar>
      <v-card-title class="my-4">
        <v-text-field
            v-model="searchText"
            density="compact"
            variant="solo"
            color="info"
            label="검색어를 입력해주세요."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            class="elevation-0"
            @click:append-inner="onClick"
        ></v-text-field>
      </v-card-title>
      <p class="text-center my-4">*검색어를 2글자 이상 12자이하로 입력해주세요.</p>
      <v-snackbar color="primary"
                  v-model="raiseError "
                  :timeout="10000"
                  v-if="raiseError "
                  multi-line
      >
        {{ errorMsg }}

        <template v-slot:actions>
          <v-btn
              color="secondary"
              variant="text"
              @click="raiseError = false"
          >
            <v-icon>mdi-close-box</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>

  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const isOpen = toRef(props, 'open')

const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}

const searchText = ref('')
const router = useRouter()
const onClick = () => {
  if(searchText.value.length < 2 || searchText.value.length > 12) {
    raiseError.value = true
    errorMsg.value = '검색어를 2글자 이상 12자이하로 입력해주세요.'
    return
  }
  close()
  router.push(`/search/${searchText.value}`)
}

const raiseError  = ref(false)
const errorMsg = ref('')


</script>

<style scoped>

</style>