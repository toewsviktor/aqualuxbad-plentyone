<template>
  <div class="py-2">
    <UiFormLabel>{{ getEditorTranslation('label') }}</UiFormLabel>
    <div class="flex gap-3 mt-1">
      <label class="flex-1">
        <span class="block typography-text-xs text-neutral-700 mb-1">{{ getEditorTranslation('width-label') }}</span>
        <SfInput v-model="logoMaxWidth" type="number" min="0" data-testid="logo-max-width" />
      </label>
      <label class="flex-1">
        <span class="block typography-text-xs text-neutral-700 mb-1">{{ getEditorTranslation('height-label') }}</span>
        <SfInput v-model="logoMaxHeight" type="number" min="0" data-testid="logo-max-height" />
      </label>
    </div>
    <div class="py-3">
      <span class="typography-text-xs text-neutral-700">
        {{ getEditorTranslation('description') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfInput } from '@storefront-ui/vue';

const { updateSetting: updateWidth, getSetting: getWidth } = useSiteSettings('logoMaxWidth');
const { updateSetting: updateHeight, getSetting: getHeight } = useSiteSettings('logoMaxHeight');

const logoMaxWidth = computed({
  get: () => getWidth(),
  set: (value) => updateWidth(value),
});

const logoMaxHeight = computed({
  get: () => getHeight(),
  set: (value) => updateHeight(value),
});
</script>

<i18n lang="json">
{
  "en": {
    "label": "Logo size",
    "width-label": "Max width (px)",
    "height-label": "Max height (px)",
    "description": "Maximum logo dimensions in pixels. The aspect ratio is kept."
  },
  "de": {
    "label": "Logo-Größe",
    "width-label": "Max. Breite (px)",
    "height-label": "Max. Höhe (px)",
    "description": "Maximale Logo-Abmessungen in Pixeln. Das Seitenverhältnis bleibt erhalten."
  }
}
</i18n>
