<template>
  <div className="spinner">
    <img src="../assets/icons/ball-triangle.svg" alt="Loading..." />
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.spinner {
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 180px;
}
</style>
