const changeUrl = (router, from, to) => {
    if(router.location.pathname === from) {
        router.history.push(to);
    }
}

export default changeUrl;