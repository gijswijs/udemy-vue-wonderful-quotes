<template>
    <div id="quoteForm">
        <label for="quoteInput">Quote</label>
        <textarea v-model="quote" class="form-control" rows="3" @keyup.enter="addQuote"></textarea>
        <button class="btn btn-primary" type="submit" @click="addQuote">Add Quote</button>
        <button class="btn btn-secondary" type="submit" @click="getRandomQuote">Get Random Quote</button>
    </div>
</template>

<script>

export default {
    data: function() {
        return { quote: '' }
    },
    props: {
        quotes: Array
    },
    methods: {
        addQuote() {
            if (this.quotes.length < 10){
                this.quotes.push(this.quote);
                this.quote = '';
            }
        },
        getRandomQuote() {
            var vm = this;
            var rand = Math.random() + 'rand'
            var dataUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1' + rand;
            this.$http.get(dataUrl).then(response => { 
                var jsonResponse = response.body;
                var tmp = document.createElement("DIV");
                tmp.innerHTML = jsonResponse[0].content;
                vm.quote =  tmp.textContent || tmp.innerText || "";
                });
            console.log(vm.quote);
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
