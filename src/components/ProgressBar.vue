<template>
    <div>
        <h1>Quotes added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (nrOfQuotes * 10) + '%'}">
                {{ nrOfQuotes }} / 10
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nrOfQuotes: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
h1 {
    text-align: left;
}

</style>
