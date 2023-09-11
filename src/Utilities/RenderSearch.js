const RenderSearch = async(search) => {
    let data = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    return data.json()
}

export default RenderSearch