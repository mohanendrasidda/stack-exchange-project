<template>
    <div class="d-flex justify-content-center">
        <div
            class="spinner-border"
            :class="[ spinnerSizeClass, spinnerThemeClass ]"
            role="status"
        >
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
import ThemeMixin from '@/mixins/theme';

export default {
    name: 'AppSpinner',
    mixins: [ ThemeMixin ],
    props: {
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        spinnerSizeClass() {
            return {
                'spinner-border-large' : this.size === 'large',
                'spinner-border-medium' : this.size === 'medium',
                'spinner-border-small' : this.size === 'small'
            };
        },
        spinnerThemeClass() {
            return {
                'text-primary': this.theme === 'primary',
                'text-secondary': this.theme === 'secondary',
                'text-success': this.theme === 'success',
                'text-info': this.theme === 'info',
                'text-warning': this.theme === 'warning',
                'text-danger': this.theme === 'danger',
                'text-light': this.theme === 'loght',
                'text-dark': this.theme === 'dark'
            };
        }
    }
}
</script>

<!-- scoped styles => the styles we give here only affect the HTML of this component -->
<!-- if we DO NOT use scoped, the styles defined will affect other components -->
<style scoped>
.spinner-border-large {
    width: 3rem;
    height: 3rem;
}

.spinner-border-medium {
    width: 1.75rem;
    height: 1.75rem;
}

.spinner-border-small {
    width: 1rem;
    height: 1rem;
    border-width: 1px;
}
</style>