/* eslint-disable react/prop-types */
export default function Bottal({bottle, hadlerCount}){
    // console.log(bottle)
    const {name, img, price,ratings,stock} = bottle
    
    return(

        <div>
            <div>
                <h4>Product Name : {name}</h4>
                <img src={img} alt="" />
                <div style={{
                    display:"flex",
                    gap:"20px",
                    marginLeft:"40px"
                }}>
                    <p>Price : {price}</p>
                    <p>Rating : {ratings} </p>
                    <p>Stock : {stock}</p>
                </div>
                <button onClick={()=> hadlerCount(bottle)}>Add</button>
                
            </div>
        </div>


    )
}