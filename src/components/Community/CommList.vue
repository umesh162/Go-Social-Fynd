<template>
  <div
    class="border-t-2 border-l-2 border-b-2 row-span-full border-slate-300 overflow-auto scroll-hidden before rounded-l-lg"
  >
    <div class="sticky top-0 bg-white p-5">
      <h2 class="font-bold text-lg text-center">Community</h2>

      <input
        type="text"
        placeholder="Search"
        class="w-full rounded-md"
        v-model="searchKey"
        @change="srcProd"
      />
    </div>
    <div></div>
    <div class="px-3">
      <h3>Joined Community</h3>
      <div v-for="item in srcProd()" :key="item._id" class="">
        <div
          class="flex items-center m-2 border-2 p-1 rounded-lg shadow-lg"
          v-on:click="singleChannel(item._id)"
        >
          <div class="w-16">
            <img
              :src="item.communityImage"
              alt="Home community"
              class="h-14 rounded-full"
            />
          </div>
          <div class="mx-5">
            <p>{{ item.communityName }}</p>
            <p>{{ item.type }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="px-3">
        <h3>All Community</h3>
        <div
          class="flex items-center w-full my-5 shadow-lg rounded-lg border p-3"
          v-for="index in commList"
          :key="index._id"
        >
          <div class="w-24 px-2">
            <img
              :src="index.communityImage"
              alt="Home community"
              class="h-16 w-24 rounded-full"
            />
          </div>
          <div class="mx-3">
            <div class="flex">
              <h3>{{ index.communityName }}</h3>
              <p class="text-cyan-500 mx-3">{{ index.type }}</p>
            </div>
            <p>
              {{ index.description }}
            </p>
          </div>
          <div class="self-center w-44">
            <button
              class="bg-violet-400 px-5 py-1 w-full rounded-lg hover:bg-violet-500"
              @click.prevent="joinNewChannel(index._id)"
            >
              Join
            </button>
          </div>

          <!-- <div class="self-center w-44">
                <button class="bg-red-500 px-5 py-1 w-full rounded-lg hover:bg-red-700">
                  Join Request
                </button>
              </div>  -->
          <!-- <div class="self-center w-44">
                <button class="bg-cyan-300 px-5 py-1 w-full rounded-lg ">
                  Request Send
                </button>
              </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommList",
  data() {
    return { searchKey: "" };
  },
  computed: {
    ...mapState("comm", ["userJoinComm", "commList"]),
  },
  methods: {
    async singleChannel(id) {
      await this.$store.dispatch("comm/singleChannInfo", { _id: id });
      await this.$store.dispatch("comm/CommAllPost", { getByCommunity: id });
    },
    async joinNewChannel(id) {
      let payload = {
        communityId: id,
      };
      await this.$store.dispatch("comm/joinCommunity", payload);
      await this.$store.dispatch("comm/getAllCOmmunity");
      await this.$store.dispatch("comm/getUserJoinComm");
    },
    srcProd() {
      let data = this.userJoinComm.length > 0 ? this.userJoinComm : [];

      return data.filter((item) =>
        item.communityName.toLowerCase().includes(this.searchKey.toLowerCase())
      );
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
