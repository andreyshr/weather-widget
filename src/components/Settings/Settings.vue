<template>
  <div class="settings">
    <div class="settings__header">
      <span>Settings</span>
      <icon-button @click="$emit('close')">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="#727170"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </icon-button>
    </div>

    <container
      @drop="$emit('change-location-order', $event)"
      drag-handle-selector=".drag-handle"
    >
      <draggable v-for="location in locations" :key="location.id">
        <settings-location
          :location="location"
          @remove-location="$emit('remove-location', $event)"
        ></settings-location>
      </draggable>
    </container>

    <setting-form @add-location="$emit('add-location', $event)"></setting-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Container, Draggable } from "vue-smooth-dnd";
import SettingsLocation from "@/components/SettingsLocation/SettingsLocation.vue";
import SettingForm from "@/components/SettingsForm/SettingForm.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { TLocation } from "@/api/location-api/types";

@Component({
  components: {
    IconButton,
    SettingForm,
    SettingsLocation,
    Container,
    Draggable,
  },
})
export default class Settings extends Vue {
  @Prop({ required: true }) readonly locations!: TLocation[];
}
</script>

<style scoped>
.settings {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  padding: 24px 16px;
  background: #fff;
}

.settings__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
