<template>
  <div class="py-2">
    <UiFormLabel>{{ getEditorTranslation('label') }}</UiFormLabel>
    <SfInput v-model="searchMaxWidth" type="text" placeholder="auto" data-testid="search-max-width" class="mt-1" />
    <div class="py-3">
      <span class="typography-text-xs text-neutral-700">
        {{ getEditorTranslation('description') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfInput } from '@storefront-ui/vue';

const { updateSetting, getSetting } = useSiteSettings('searchMaxWidth');

const searchMaxWidth = computed({
  get: () => getSetting(),
  set: (value) => updateSetting(value),
});
</script>

<i18n lang="json">
{
  "en": {
    "label": "Search field width",
    "description": "Maximum width of the search field in the header. Enter a pixel value (e.g. 400) or 'auto' for no limit."
  },
  "de": {
    "label": "Breite des Suchfelds",
    "description": "Maximale Breite des Suchfelds im Header. Pixelwert (z.B. 400) oder 'auto' für keine Begrenzung eingeben."
  }
}
</i18n>
