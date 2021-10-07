<template>
  <div class="settings-form">
    <p style="padding: 16px 0; text-align: left"><span>Add location</span></p>
    <form @submit.prevent="$emit('add-location', query)">
      <input v-model="query" type="text"/>
      <icon-button type="submit">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
              fill="#727170"
              d="M20 4V10.5C20 14.09 17.09 17 13.5 17H7.83L10.92 20.09L9.5 21.5L4 16L9.5 10.5L10.91 11.91L7.83 15H13.5C16 15 18 13 18 10.5V4H20Z"
          />
        </svg>
      </icon-button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import IconButton from "@/components/IconButton/IconButton.vue";
import {Nullable} from "@/types/utility-types";

@Component({
  components: {IconButton}
})
export default class SettingsForm extends Vue {
  private query: Nullable<string> = null;
}
</script>

<style scoped>
form {
  display: flex;
}

form input {
  height: 42px;
  width: auto;
  max-width: 90%;
  margin-right: 8px;
  padding: 0 8px;
  font-size: 16px;
}
</style>
