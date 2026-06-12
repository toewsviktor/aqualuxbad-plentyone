<template>
  <picture>
    <template v-if="imageExtension === 'svg'">
      <NuxtImg
        ref="logo"
        :src="headerLogo"
        :alt="`${storeName} logo`"
        class="py-2"
        :style="logoStyle"
        preload
      />
    </template>
    <template v-else>
      <img
        id="logo"
        ref="logo"
        :src="headerLogo"
        :alt="`${storeName} logo`"
        :width="imgWidth"
        :height="imgHeight"
        :style="logoStyle"
        preload
      />
    </template>
  </picture>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { getSetting: getHeaderLogo } = useSiteSettings('headerLogo');
const { getSetting: getLogoWidth } = useSiteSettings('logoWidth');
const { getSetting: getLogoHeight } = useSiteSettings('logoHeight');

const headerLogo = computed(() => getHeaderLogo());

// Accepts a raw pixel number (e.g. "150"), an explicit unit ("150px"), or "auto"/empty for proportional scaling.
const toDimension = (value: string): string => {
  const trimmed = (value ?? '').toString().trim();
  if (!trimmed || trimmed.toLowerCase() === 'auto') return 'auto';
  return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
};

const logoStyle = computed(() => ({
  width: toDimension(getLogoWidth()),
  height: toDimension(getLogoHeight()),
}));

const storeName = runtimeConfig.public.storename;

const imageExtension = computed(() => headerLogo.value.split('.').pop());
const logo = ref<HTMLImageElement | null>(null);
const imgWidth = ref<string>('');
const imgHeight = ref<string>('');
onMounted(() => {
  if (logo.value) {
    imgWidth.value = logo.value.clientWidth + '';
    imgHeight.value = logo.value.clientHeight + '';
  }
});
</script>
