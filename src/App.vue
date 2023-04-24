<template>
  <div class="block container">
    <div class="block__header header">
      <div class="header__title">Modes</div>
      <VIcon name="LinkIcon" class="header__link" />
    </div>
    <div class="block__content">
      <Button @onClick="clickHandler" className="btn--primary" text="primary" />
      <Button
        @onClick="clickHandler"
        className="btn--secondary"
        text="secondary"
      />
      <Button
        @onClick="clickHandler"
        className="btn--secondary-destructive"
        text="secondary-destructive"
      />
      <Button @onClick="clickHandler" className="btn--accent" text="accent" />
      <Button @onClick="clickHandler" className="btn--flat" text="flat" />
      <Button @onClick="clickHandler" className="btn--outline" text="outline" />
      <Button @onClick="clickHandler" className="btn" text="x" />
    </div>
  </div>

  <div class="block container">
    <div class="block__header header">
      <div class="header__title">Rotating</div>
      <VIcon name="LinkIcon" class="header__link" />
    </div>
    <div class="block__content">
      <Button
        @onClick="clickHandler"
        className="btn--primary"
        text="Where could I find such an arrow...?"
        icon="LinkIcon"
        iconPos="left"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "./components/Button/CButton.vue";
import VIcon from "./components/VIcon.vue";

function clickHandler(e) {
  console.log(e);
}
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 4rem;
}

.block {
  display: inline-block;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;

    margin-bottom: 2rem;

    &__title {
      color: $white;

      font: $heanding-5;

      margin-right: 0.7rem;
    }

    &__link {
      color: $grey;

      height: 1.5rem;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    border: 1px solid $grey;
    border-radius: 0.5rem;

    padding: 2rem;

    & > * {
      margin-bottom: 0.7rem;

      &:not(:last-child) {
        margin-right: 0.7rem;
      }
    }
  }
}
</style>
