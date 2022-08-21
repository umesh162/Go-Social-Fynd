<template>
  <div class="">
    <button>Click</button>
    <JoinRequest />
    <CommList />
  </div>
</template>

<script>
import CommList from "./CommList.vue";
import JoinRequest from "./JoinRequest.vue";
export default {
  name: "HomePage",
  components: { CommList, JoinRequest },
};
</script>

<style></style>
