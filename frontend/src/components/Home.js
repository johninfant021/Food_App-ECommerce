import { useEffect, useState } from "react";
import ProductComp from "./ProductComp";
import './css/Home.css'
import Nav from "./Nav";



function Home({cart,setcart}){



const data=[
    { id: 1, name: "Burger", price: 125, quantity: 1, img: "https://cdn.pixabay.com/photo/2022/04/25/06/16/burger-7155160_1280.jpg" },
    { id: 2, name: "Pizza", price: 350, quantity: 1, img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" },
    { id: 3, name: "Sushi", price: 100, quantity: 1, img: "https://cdn.pixabay.com/photo/2024/05/02/18/00/sushi-8735298_1280.jpg" },
    { id: 4, name: "Tacos", price: 75, quantity: 1, img: "https://cdn.pixabay.com/photo/2020/02/18/03/07/plugs-4858335_1280.jpg" },
    { id: 5, name: "Pasta", price: 150, quantity: 1, img: "https://cdn.pixabay.com/photo/2020/02/15/20/38/noodles-4851996_1280.jpg" },
    { id: 6, name: "Steak", price: 80, quantity: 1, img: "https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg" },
    { id: 7, name: "Chicken Wings", price: 275, quantity: 1, img: "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548_1280.jpg" },
    { id: 8, name: "Salad", price: 180, quantity: 1, img: "https://cdn.pixabay.com/photo/2015/07/14/03/48/salad-dish-844144_1280.jpg" },
    { id: 9, name: "Chicken Fried Rice", price: 120, quantity: 1, img: "https://cdn.pixabay.com/photo/2019/05/30/19/15/rice-dish-4240511_1280.jpg" },
    { id: 10, name: "Spring Rolls", price: 75, quantity: 1, img: "https://cdn.pixabay.com/photo/2015/11/16/08/50/dim-sum-1045400_1280.jpg" },
    { id: 11, name: "Grilled Cheese", price: 50, quantity: 1, img: "https://cdn.pixabay.com/photo/2018/08/29/19/01/fig-3640553_1280.jpg" },
    { id: 12, name: "Burrito", price: 125, quantity: 1, img: "https://cdn.pixabay.com/photo/2020/06/01/15/37/tortilla-5247120_1280.jpg" },
    { id: 13, name: "Noodles", price: 90, quantity: 1, img: "https://cdn.pixabay.com/photo/2015/04/06/16/21/korean-food-709606_1280.jpg" },
    { id: 14, name: "Hotdog", price: 150, quantity: 1, img: "https://cdn.pixabay.com/photo/2021/01/16/07/43/hot-dogs-5921325_1280.jpg" },
    { id: 15, name: "Pancakes", price: 90, quantity: 1, img: "https://cdn.pixabay.com/photo/2018/08/15/14/56/pancake-3608195_1280.jpg" },
    { id: 16, name: "Ice Cream", price: 25, quantity: 1, img: "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg" },
    { id: 17, name: "Smoothie", price: 50, quantity: 1, img: "https://cdn.pixabay.com/photo/2021/11/01/15/53/smoothie-6760874_1280.jpg" },
    { id: 18, name: "Mac & Cheese", price: 70, quantity: 1, img: "https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129_1280.jpg" },
    { id: 19, name: "Donuts", price: 60, quantity: 1, img: "https://cdn.pixabay.com/photo/2022/10/31/08/25/donut-7559224_1280.jpg" },
    { id: 20, name: "Nachos", price: 75, quantity: 1, img: "https://cdn.pixabay.com/photo/2015/12/03/10/11/nachos-1074597_1280.jpg" }
  ];
  

const [products]=useState(data);
const [message,setmessage]=useState("")
useEffect(()=>{
  const fetchdata= async()=>{
    const token=localStorage.getItem("token")
    const res= await fetch("https://food-app-ecommerce.onrender.com/api/user/home",{
      headers:{
        Authorization:`Bearer ${token}`
      },
    })
    const data=await res.json()
    setmessage(data.message)
  }
  fetchdata();
},[])


// const username=localStorage.getItem("username")
// const User_TrimmedMail=localStorage.getItem("User_TrimmedMail")


    return(
        <>
        <Nav />
        <h4 className="text-center user-name">{message}</h4>
        <div className="products-container">
        {
        products.map((product)=>{
            return(
              <ProductComp key={product.id} product={product} cart={cart} setcart={setcart} />  
            )
        })
      }
        </div>
     
        </>
    )
}

export default Home;