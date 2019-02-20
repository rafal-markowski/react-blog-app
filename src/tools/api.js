export const getPostsList = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await resp.json();

    return data;
}