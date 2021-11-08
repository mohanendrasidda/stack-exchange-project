const ThemeMixin = {
    props: {
        theme: {
            type: String,
            default: 'info',
            validator( value ) {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'info',
                    'warning',
                    'danger',
                    'light',
                    'dark'
                ].includes( value );
            }
        }
    }
}

export default ThemeMixin;