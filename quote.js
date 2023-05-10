import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
  headers: {
    'X-RapidAPI-Key': 'f3f220457cmsh6cae92504a1567ep160a94jsn96f0abf6f9e3',
    'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});