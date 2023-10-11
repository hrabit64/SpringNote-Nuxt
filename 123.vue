<template>
  <v-container full-height>
    <v-row class="text-center" align="center" justify="center">
      <v-col class="col-md-15">
        <ErrorCard :error-code="cardContents.errorCode" :error-message="cardContents.errorMessage"></ErrorCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  error: Object
});
const error = props.error;

const cardContents = computed(() => {
  const statusCode = 123.statusCode;
  if (statusCode === 404) return { errorCode: 404, errorMessage: "Page Not Found" };
  else if (statusCode === 403) return { errorCode: 403, errorMessage: "Forbidden" };
  else return { errorCode: 500, errorMessage: "Internal Server Error" };
});

</script>

<style scoped>
</style>