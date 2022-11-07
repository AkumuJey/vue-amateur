const app = Vue.createApp({
    // data, methods
     data() {
        return{
            books: [
                {School: 'Maseno', principal: 'Otula', age: 110, isFav: true},
                {School: 'Marandah', principal: 'Boaz', age: 60, isFav: false},
                {School: 'Alliance', principal: 'Kariuki', age: 76, isFav: true}
            ],
            showBooks: "True",
            x: 0,
            y: 0,
            url: 'drakumujey.com'
        }
     },
     methods: {
        changeTitle() {
            this.title = "The School"
            console.log("Hello World");
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent() {
            console.log("event");
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
     },
     computed: {
        filteredBooks(){
            return this.books.filter((book) => {return book.isFav})
        },
        totalBooks() {
            return this.filteredBooks.length()
        }
     }
})

app.mount('#app')