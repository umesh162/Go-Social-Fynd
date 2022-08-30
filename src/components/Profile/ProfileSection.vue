<template>
  <div
    class="border-t-2 border-r-2 border-b-2 border-slate-300 overflow-auto row-span-full rounded-r-lg overflow-auto scroll-hidden"
  >
    <div>
      <div class="sticky top-0 py-7 bg-white">
        <div class="flex mx-11 my-3 justify-end">
          <button
            class="text-lg font-semibold text-black-500 bg-blue-400 px-3 py-1 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      </div>
      <div class="shadow-lg p-3 rounded-lg mt-5">
        <h3 class="text-left py-2 font-semibold">Profile Details</h3>
        <div class="grid justify-items-center">
          <div class="grid justify-center w-1/3">
            <img
              src="../../assets/home-comm.png"
              alt="Home community"
              class="h-24"
            />
            <div class="text-center">
              <p class="">Umesh Palival jkhkhkhkhkjjjjj</p>
            </div>
          </div>
        </div>
        <div class="flex justify-evenly m-2">
          <div>
            <button class="bg-blue-400 px-3 py-1 rounded" @click="toggle">
              <i class="fa-solid fa-plus"></i>
              Create Post
            </button>
          </div>
          <div>
            <button class="bg-blue-400 px-3 py-1 rounded" @click="editToggle">
              <i class="fa-solid fa-pen-to-square"></i>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div class="shadow-lg p-3 rounded-lg">
        <h3 class="text-left py-2 font-semibold">Channel Details</h3>

        <div class="flex items-center">
          <div class="w-16">
            <img
              :src="singleChannel.data.communityImage"
              alt="Home community"
              class="h-16 rounded-full"
            />
          </div>
          <div class="flex flex-col flex-1 ml-2">
            <p>{{ singleChannel.data.communityName }}</p>
            <p>Private</p>
            <p>Admin: <span>Mark </span></p>
          </div>
          <div class="w-32">
            <button
              class="bg-blue-400 py-1 rounded w-full"
              @click="editChnToggle"
            >
              <i class="fa-solid fa-pen-to-square"></i>
              Edit Channel
            </button>
          </div>
        </div>
      </div>
      <JoinRequest />
    </div>
    <div v-show="visible">
      <CreatePost :toggle="toggle" />
    </div>
    <div v-show="editVisible">
      <EditProfile :toggle="editToggle" />
    </div>
    <div v-show="editChannel">
      <EditChannel :toggle="editChnToggle" />
    </div>
  </div>
</template>

<script>
import JoinRequest from "../Community/JoinRequest.vue";
import CreatePost from "../Community/CreatePost.vue";
import EditProfile from "./EditProfile.vue";
import EditChannel from "../Community/EditChannel.vue";
import { mapState } from "vuex";
export default {
  name: "ProfileSection",
  components: { JoinRequest, CreatePost, EditProfile, EditChannel },
  data() {
    return { visible: false, editVisible: false, editChannel: false };
  },
  computed: {
    ...mapState("comm", ["singleChannel"]),
  },
  methods: {
    toggle() {
      console.log("clickkk", this.visible);
      this.visible = !this.visible;
    },
    editToggle() {
      console.log("edit visible Call", this.editVisible);
      this.editVisible = !this.editVisible;
    },
    editChnToggle() {
      console.log("edit Channel Call", this.editChannel);
      this.editChannel = !this.editChannel;
    },
  },
};
</script>

<style>
.scroll-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.scroll-hidden::-webkit-scrollbar {
  /* Firefox */
  display: none;
}
</style>
