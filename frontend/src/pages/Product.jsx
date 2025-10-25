import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(HomeContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
