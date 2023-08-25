const RenderProducts = async () => {
    let data = await fetch('https://dummyjson.com/products?limit=100&skip=0')
    return data.json()
}

export default RenderProducts