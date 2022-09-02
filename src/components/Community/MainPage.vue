<template>
  <div class="overflow-hidden h-screen">
    <NavBar />
    <div class="grid grid-cols-3 h-screen px-10 pt-5 bg-white">
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
import NavBar from "../Utils/NavBar.vue";

export default {
  components: { ProfileSection, PostSection, CommList, NavBar },
};
</script>

<style></style>
