import axios from 'axios';

export default async function getData(userID) {

    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`);

    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${userID}`);

    console.log(user);

    console.log(post);
}