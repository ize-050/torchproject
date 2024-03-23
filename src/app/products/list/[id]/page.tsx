'use client'
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import axios from 'axios';
const ProductList = ({params}:any) => {

  const [Menu, setMenu] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const Menu = async () => {
      const menu = await axios.get('http://www.testtourchpro.com/api/getallMenuProducts')

      const menus = menu.data;
      if (menus.length > 0) {
        console.log('menus', menus)
        setMenu(menus)
      }
    }
    Menu()
  }, [])

  const [Product, setProduct] = useState([]);
  useEffect(() => {

    const getMenus = async () => {
      const product = await axios.get('http://www.testtourchpro.com/api/getAllproductByid/'+params.id)
      const products = product.data;
      if (products.length > 0) {
        setProduct(products);
      }

    }
    getMenus()
  }, [])

  return (

    
    <div className="main">
        <div className="title-wrapper">
      <div className="container"><div className="container-inner">
        <h1><span>All</span> Product</h1>
        <em>รวมสินค้าครบจบในที่เดียว</em>
      </div></div>
    </div>
      <div className="container">
        <ul className="breadcrumb">
          <li><a href="index.html">หน้าแรก</a></li>
          <li><a href="">สินค้า</a></li>
          <li className="active">Cool green dress with red bell</li>
        </ul>

        <div className="row margin-bottom-40">
          <div className="sidebar col-md-2 col-sm-5">
            <ul className="list-group margin-bottom-25 sidebar-menu">
              {Menu.length > 0 ? Menu.map((res: any, key: number) => {
                return (
                  <li key={key} className="list-group-item clearfix"><a href="javascript:void(0)"
                    onClick={() => {
                      router.push(`/products/list/${res.id}`)
                    }}
                  ><i className="fa fa-angle-right"></i> {res.cat_name}</a></li>
                )
              }) : ''}
            </ul>


          </div>
          <div className="row product-list">
            {Product.map((product: any, key: number) => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-12" key={key}>
                  <div className="product-item col-md-12 sale-product">
                    <div className="pi-img-wrapper " style={{
                      textAlign:'center'
                    }}>
                      <img src={product.images} className="img-responsive" alt="Berry Lace Dress" width={150}
                        height={150} />
                      <div>
                        <a href='./p3.jpg' className="btn btn-default fancybox-button" data-fancybox="gallery">Zoom</a>
                        <a href="javascript:void(0)"
                        onClick={()=>{
                          router.push('/products/'+product.id)
                        }}
                        className="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html">{product.name}</a></h3>
                    <div className="pi-price">150.00</div>
                  </div>

                </div>
              )
            }
            )}



          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;
