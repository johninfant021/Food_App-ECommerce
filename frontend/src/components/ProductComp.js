import './css/ProductComp.css'
function ProductComp({product,cart,setcart}){

    const name=product.name.length > 21 ? product.name.substring(0,20)+'....' : product.name;
    const addcart=()=>{
        setcart([...cart,product])
    }
    const removecart=()=>{
        setcart(cart.filter(c=>c.id !== product.id))
    }

    return(
        <>
       
        <div className="product-container">
            <div className="product">
                <img src={product.img} alt="Product" height='100px' width='100px' />
                </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                {/* <h4>Quantity : {product.quantity}</h4> */}
                <p className="product-price">Price :{product.price}</p>
                {
                    cart.includes(product) ? (
                        <button className='button-cart remove' onClick={removecart}>Remove Cart</button>
                    ) : (
                        <button className='button-cart' onClick={addcart}>Add Cart</button>
                    )
                }
            </div>
            </div>
        
        
        
        </>
    )
}

export default ProductComp;