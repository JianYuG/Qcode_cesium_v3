<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as Cesium from 'cesium'
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzM2RjYjJlOC01ZTQwLTQwODYtOTEwMy02M2U4OGEzYjQyNGUiLCJpZCI6MjI5NjUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODI0NTYwMzF9.VG2_T9ry8EnBWAh4msJ3s6m2jW_5hgAZQvfEQDh-WQs"
const cesiumContainer = ref<HTMLDivElement | null>(null)
let viewer: Cesium.Viewer | null = null

onMounted(() => {
  // Initialize Cesium Viewer
  viewer = new Cesium.Viewer('cesiumContainer', {
    // Terrain provider
    terrain: Cesium.Terrain.fromWorldTerrain(),
    // Base layer picker
    baseLayerPicker: true,
    // Animation widget
    animation: true,
    // Timeline widget
    timeline: true,
    // Full screen button
    fullscreenButton: true,
    // VR button
    vrButton: false,
    // Geocoder (search)
    geocoder: true,
    // Home button
    homeButton: true,
    // Info box
    infoBox: true,
    // Scene mode picker
    sceneModePicker: true,
    // Selection indicator
    selectionIndicator: true,
    // Navigation help button
    navigationHelpButton: true,
    // Shadows
    shadows: false,
  })

  // Fly to initial position (China)
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(116.4074, 39.9042, 15000000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0,
    },
  })
})

onUnmounted(() => {
  if (viewer) {
    viewer.destroy()
    viewer = null
  }
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
