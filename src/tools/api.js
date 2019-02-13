export const getPostsList = async (start, limit) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    const data = await resp.json();

    return data;
}