const RenderCatergories = async () => {
    let data = await fetch('https://dummyjson.com/products/categories')
    return data.json()
}

export default RenderCatergories