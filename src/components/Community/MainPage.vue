<template>
  <div class="overflow-hidden">
    <div class="grid grid-cols-3 gap-4 grid-rows-6 h-96">
      <CommList />

      <PostSection />
      <ProfileSection />
    </div>
  </div>
</template>

<script>
import ProfileSection from "../Profile/ProfileSection.vue";
import PostSection from "./PostSection.vue";
import CommList from "./CommList.vue";
export default { components: { ProfileSection, PostSection, CommList } };
</script>

<style></style>
