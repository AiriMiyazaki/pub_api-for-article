// TODO: javascriptのリンターツール導入 
const fetchForm = document.querySelector('.fetchForm');
const btn = document.querySelector('.btn');
const endpoint = 'http://0.0.0.0:8000/get_dict'
const url = document.getElementById('url').value;
const body = {
    'url': url 
}

const postFetch = () => {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body 
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        } 
        console.log('ok!');
        const result = response
        console.log("hoge-------------------------------------")
        console.log(result)
        // console.log("hoge-------------------------------------")
        // document.getElementById('url1').value = result
        // document.getElementById('url2').value = result
        }).catch((error) => {
            console.log(error);
        });
}

btn.addEventListener('click', postFetch, false);

// const fetchForm = document.querySelector('.fetchForm');
// const btn = document.querySelector('.btn');
// const url = 'https://zipcloud.ibsnet.co.jp/api/search'
// 
// const postFetch = () => {
//     fetch(url + '?zipcode=' + document.getElementById('hoge').value, {
//         method: 'GET',
//     }).then((response) => {
//         if(!response.ok) {
//             console.log('error!');
//         } 
//         console.log('ok!');
//         return response.json();
//     }).then((data)  => {
//         console.log(data);
//         const result = data.results[0]
//         document.getElementById('fuga').value = result.address1 + result.address2 + result.address3
//     }).catch((error) => {
//         console.log(error);
//     });
// };
// 
// btn.addEventListener('click', postFetch, false);
// 