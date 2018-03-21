<template>
    <div class="container">
        <h1>Hello!</h1>
        <p>Tekst in raar font</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                70%
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Arizonia");

    p {
        font-family: Arizonia;
        font-size: 12em;
    }
</style>
