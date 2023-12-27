import { useEffect, useState } from "react";
import { getCategories, getProductById, getProductsByCategory } from "../services/ProductsService";
import { getProducts } from "../services/ProductsService";

/**
 * @description Custom Hook for get products
 * @returns {Array} de objetos 
 */

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {

  // tenemo que crear la cajita donde se guardara los datos de la api 
  const [productsData, setProductsData] = useState([]);

  /* con el useEffect llamamos a la funcion getProducts para poder traer los datos de la API  */
  useEffect(() => {
    getProducts()
      .then(response => {
        setProductsData(response.data.products);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return { productsData }
}



export const useGetProductById = (id) => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductById(id)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])


  return { productData }
}


export const useGetCategories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return { categories }
}


export const useGetProductsByCategory = (id) => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {

    getProductsByCategory(id)
      .then(response => {
        setProductsData(response.data.products);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])


  return { productsData }
}

