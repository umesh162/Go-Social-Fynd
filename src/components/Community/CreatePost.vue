<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="px-6 py-2 text-white bg-blue-600 rounded shadow"
        type="button"
      >
        Open Model
      </button>

      <div
        v-show="true"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between w-96">
            <h3 class="text-2xl">Create Post</h3>
            <svg
              @click="toggle"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <div class="flex justify-center">
              <div
                class="flex items-center justify-center w-full h-60 border-2 border-dashed border-red-400"
              >
                <button>Click Here to Upload</button>
              </div>
            </div>

            <div class="my-2">
              <textarea
                type="text"
                placeholder="Description"
                class="w-full rounded-md"
              />
            </div>
            <div>
              <p>Choose Channel</p>
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1"> I have a bike</label><br />
              <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> I have a car</label><br />
            </div>

            <div class="flex justify-center my-2">
              <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style></style>
