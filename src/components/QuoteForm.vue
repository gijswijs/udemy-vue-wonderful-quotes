<template>
    <div id="quoteForm">
        <label for="quoteInput">Quote</label>
        <textarea v-model="quote" class="form-control" rows="3" id="quoteInput"></textarea>
        <button class="btn btn-primary" type="submit" @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
export default {
    data: function() {
        quote: ''
    },
    props: {
        Quotes: Array
    },
    methods: {
        addQuote() {
            if (this.Quotes.length < 10){
                this.Quotes.push(this.quote)
            }
        }
    }
}
</script>

<style scoped>
    #quoteForm{
        padding: 0% 20%;
    }

    label {
        float: left;
    }

    button {
        margin: 10px 0px;
    }

    textarea {
        resize: vertical;
    }
</style>
