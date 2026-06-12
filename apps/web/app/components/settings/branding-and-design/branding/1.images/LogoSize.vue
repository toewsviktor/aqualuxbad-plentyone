<template>
  <div class="py-2">
    <UiFormLabel>{{ getEditorTranslation('label') }}</UiFormLabel>
    <div class="flex gap-3 mt-1">
      <label class="flex-1">
        <span class="block typography-text-xs text-neutral-700 mb-1">{{ getEditorTranslation('width-label') }}</span>
        <SfInput v-model="logoWidth" type="text" placeholder="auto" data-testid="logo-width" />
      </label>
      <label class="flex-1">
        <span class="block typography-text-xs text-neutral-700 mb-1">{{ getEditorTranslation('height-label') }}</span>
        <SfInput v-model="logoHeight" type="text" placeholder="auto" data-testid="logo-height" />
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

const { updateSetting: updateWidth, getSetting: getWidth } = useSiteSettings('logoWidth');
const { updateSetting: updateHeight, getSetting: getHeight } = useSiteSettings('logoHeight');

const logoWidth = computed({
  get: () => getWidth(),
  set: (value) => updateWidth(value),
});

const logoHeight = computed({
  get: () => getHeight(),
  set: (value) => updateHeight(value),
});
</script>

<i18n lang="json">
{
  "en": {
    "label": "Logo size",
    "width-label": "Width",
    "height-label": "Height",
    "description": "Enter a pixel value (e.g. 150) or 'auto' for one side. With one side set to auto, the other scales proportionally."
  },
  "de": {
    "label": "Logo-Größe",
    "width-label": "Breite",
    "height-label": "Höhe",
    "description": "Pixelwert (z.B. 150) oder 'auto' pro Seite eingeben. Steht eine Seite auf auto, skaliert die andere proportional."
  }
}
</i18n>
