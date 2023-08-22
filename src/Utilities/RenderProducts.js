const RenderProducts = async () => {
    let data = await fetch('https://dummyjson.com/products')
    return data.json()
}

export default RenderProducts