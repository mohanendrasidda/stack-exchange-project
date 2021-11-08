<!--
    - Use slot when child component does not "know" the HTML structure that is to be shown (only the parent knows it)
    - The HTML structure becomes customizable just like props by using slots
-->
<template>
    <div
        :class="`alert alert-${theme}`"
        role="alert"
    >
        <header class="alert-heading">
            <!-- Any arbitrary HTML passed by parent can now come here instead of a fixed HTML structure -->
            <slot name="heading"></slot>
        </header>
        <div class="alert-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
import ThemeMixin from '@/mixins/theme';

export default {
    name: 'AppAlert',
    mixins: [ ThemeMixin ]
}
</script>

<style scoped>
.alert-heading {
    font-weight: bold;
}
</style>