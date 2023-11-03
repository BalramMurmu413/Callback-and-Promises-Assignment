
let books = [
    {
        title: "HTML",
        author : "",
        year : 1964   },
          
        {
            title: "Css",
            author : "Kamala Herries",
            year : 1975   },

            {
                title: "JavaScript",
                author : "Albert",
                year : 1985   },
]


function bookTitle(title){
    title.sort()
    console.log(title.join(','))
}

function logTitle(booksTitle,callback){
let logTitle = booksTitle.map((element)=>element.title);
    callback(logTitle)

}

console.log(books)

logTitle(books,bookTitle)