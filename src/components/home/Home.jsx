import NavBar from "./NavBar";
import Banner from "./Banner";
import {Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {

   const { products } =  useSelector(state => state.getProducts)                 //Here getproducts is the state in react-redux router DOM 
   console.log(products)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getProducts());                // this getProducts is a api function in productActions.js
    },[dispatch])

    return(
        <>

            <NavBar/>
            <Component>
                <Banner />
                <Slide products = {products}/>
            </Component>

        </>
        )
}

export default Home;