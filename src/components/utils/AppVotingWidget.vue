<template>
    <div class="d-flex flex-column text-center">
        <i class="fas fa-caret-up" @click="upvote"></i>
        {{numVotes}}
        <i class="fas fa-caret-down" @click="downvote"></i>
    </div>
</template>

<script>
export default {
    name: 'AppVotingWidget',
    props: {
        numVotes: {
            type: Number,
            required: true
        }
    },
    methods: {
        upvote() {
            this.$emit( 'upvote' );
        },
        downvote() {
            this.$emit( 'downvote' );
        }
    }
}
</script>

<style scoped>
/* .fas {
    font-size: 2em;
    cursor: pointer;
    color: #aaa;
}

.fas:hover {
    color: black;
} */
</style>