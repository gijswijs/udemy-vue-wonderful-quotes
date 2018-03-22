<template>
    <div class="panel panel-default">
        <div class="panel-body">
            {{ quote }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.panel {
    width: 23%;
    float: left;
    font-family: Arizonia;
    margin: 1%;
    font-size: 1.75em;
    cursor: pointer;
}

.panel:hover { 
    background-color: #d9edf7;
}

@media (max-width: 992px) {
    .panel {
        width: 46%;
        margin: 2%;
    }
}

@media (max-width: 400px) {
    .panel {
        width: 100%;
        margin: 0%;
    }
}
</style>
