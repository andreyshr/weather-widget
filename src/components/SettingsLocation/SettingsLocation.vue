<template>
  <div class="settings-location">
    <icon-button class="drag-handle">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#727170"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      </svg>
    </icon-button>
    <p class="settings-location__name">
      {{ location.city }}, {{ location.country }}
    </p>
    <icon-button @click="$emit('remove-location', location.id)">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#727170"
          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
        />
      </svg>
    </icon-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton/IconButton.vue";
import { TLocation } from "@/api/location-api/types";

@Component({
  components: { IconButton },
})
export default class SettingsLocation extends Vue {
  @Prop({ required: true }) readonly location!: TLocation;
}
</script>

<style scoped>
.settings-location {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 8px;
  background: #edebe9;
}

.settings-location__name {
  margin-right: auto;
  text-align: left;
  padding-left: 8px;
  font-size: 14px;
}
</style>
