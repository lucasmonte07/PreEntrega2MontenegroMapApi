import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useProducts } from "../hooks/UseProducts";


export const Home = () => {

    const {productsData} = useProducts();

    useEffect (() => {
        document.title = "My - Ecommerce ";
    },[])

    return (
        <ItemListContainer productsData={productsData} />
    )
}
