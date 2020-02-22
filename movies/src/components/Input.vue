<template>
  <div class="input-control">
    <div class="input-background">
      <div class="input-text">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.input-control {
  min-height: 48px;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
}
.input-background {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 0 12px;
  cursor: text;
  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  align-items: center;
  color: inherit;
  display: flex;
  margin-bottom: 8px;
  min-height: inherit;
  position: relative;
  width: 100%;
}
</style>