<template>
    <div class="container">
        <progress-bar :nr-of-quotes="Quotes.length"></progress-bar>
        <quote-form :quotes="Quotes"></quote-form>
        <div class="clearfix">
            <quote v-for="(quote, index) in Quotes" :key="index" :quote="quote" @click.native="deleteQuote(index)"></quote>
        </div>
        <div class="alert alert-info" role="alert">Tip: Click on a quote to delete it.</div>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue';
    import QuoteForm from './components/QuoteForm.vue';
    import Quote from './components/Quote.vue';

    export default {
        data: function() {
            return {
                Quotes: ['Dit is een quote']
            }
        },
        components: {
            progressBar: ProgressBar,
            quoteForm: QuoteForm,
            quote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.Quotes.splice(index,1);
            }
        }
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Arizonia");

body {
    padding-top: 50px;
}
.container {
    padding: 40px 15px;
    text-align: center;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

</style>
