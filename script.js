// Implement the Ice and Fire API using async/await with fetch.

let page = 1;
const booksPerPage = 50;

const ApiUrl = `https://anapioficeandfire.com/api/books?page=${page}&pageSize=${booksPerPage}`

async function fetchBooks(){
    try{
        const response = await fetch(ApiUrl);
        const booksdata = await response.json();
        // const booksdata = data.slice(0, 50);
        // console.log(booksdata);
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = '';

        for(let book of booksdata){
            const bookContainer = document.createElement('div');

            const name = document.createElement('h2');
            name.textContent = book.name;
            bookContainer.appendChild(name);

            const isbn = document.createElement('p');
            isbn.textContent = `ISBN: ${book.isbn}`;
            bookContainer.appendChild(isbn);

            const pages = document.createElement('p');
            pages.textContent = `NumberOfPages: ${book.numberOfPages}`;
            bookContainer.appendChild(pages);

            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;
            bookContainer.appendChild(author);

            const publisher = document.createElement('p');
            publisher.textContent = `Publisher: ${book.publisher}`;
            bookContainer.appendChild(publisher);

            const released = document.createElement('p');
            released.textContent = `Released: ${book.released}`;
            bookContainer.appendChild(released);

            const characters = document.createElement('p');
            characters.textContent = `Characters: ${book.characters}`;
            bookContainer.appendChild(characters);

            resultContainer.appendChild(bookContainer);
        } 
    }catch{
        console.log("somthing error");
    }
}
document.getElementById('previous').addEventListener('click', ()=>{
    if(page > 1){
        page--;
        fetchBooks();
    }
});

document.getElementById('next').addEventListener('click', ()=>{
    page++;
    fetchBooks();
});

fetchBooks()