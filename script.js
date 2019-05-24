console.log('this file is working fine')
setInterval ( "fetchapi()",5000 );

function fetchapi() {
    fetch('https://favqs.com/api/qotd')
.then(response => response.json())
.then(data => {
    console.log(data)
    let result = `${data.quote.body}`;
    let author = `${data.quote.author}`;
        document.getElementById('result').innerHTML = result;
        document.getElementById('author').innerHTML = author;
})
.catch(error => console.error(error))
}

