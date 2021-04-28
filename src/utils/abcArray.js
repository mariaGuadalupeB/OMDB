import axios from "axios";

const abc = () => {
    const arr = []

    for (let i = 0; i < 10 ; i++){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const number = Math.floor(Math.random()*25)
        const i = axios.get(`https://www.omdbapi.com/?apikey=4eca924c&t=${alphabet[number]}`).then(res => res.data)
        arr.push(i)
    }

    return arr
}

export default abc;