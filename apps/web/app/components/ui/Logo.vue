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

const logoStyle = computed(() => ({
  width: toCssDimension(getLogoWidth()),
  height: toCssDimension(getLogoHeight()),
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
