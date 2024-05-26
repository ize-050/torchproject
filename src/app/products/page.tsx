'use client'
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import axios from 'axios';
const ProductAll = ({params}:any) => {

  const [Menu, setMenu] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const Menu = async () => {
      const menu = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getallMenuProducts`)

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
      const product = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllproductByid/1`)
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
          <li><a href="/">หน้าแรก</a></li>
          <li><a href="#">สินค้า</a></li>
        </ul>

        <div className="row margin-bottom-40">
          <div className="sidebar col-md-3">
            <ul className="list-group margin-bottom-25 sidebar-menu">
              {Menu.length > 0 ? Menu.map((res: any, key: number) => {
                      // Construct the path for the menu item
            const itemPath = `/products/list/${res.id}`;
          
            // let params = Number(params.id)
            
            const isActive = params.id == res.id;
                return (
                  <li key={key}  className={`list-group-item clearfix ${isActive ? 'active' : ''}`}
                  ><a href="javascript:void(0)"
                    onClick={() => {
                      router.push(`/products/list/${res.id}`)
                    }}
                  ><i className="fa fa-angle-right"></i> {res.cat_name}</a></li>
                )
              }) : ''}
            </ul>


          </div>
          
          <div className="row product-list col-md-9">
            {Product.map((product: any, key: number) => {
              return (
                <div className="col-md-4 col-sm-6 col-xs-6" key={key}>
                  <div className="product-item  sale-product">
                    <div className="pi-img-wrapper">
                      <img src={product.images} className="img-responsive" alt="Berry Lace Dress" />
                      <div>
                      <a href={product.images} className="btn btn-default fancybox-button">Zoom</a>
                        <a href="javascript:void(0)"
                        onClick={()=>{
                          router.push('/products/'+product.id)
                        }}
                        className="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="">{product.name}</a></h3>
                    <div className="pi-price">{product.price}</div>
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

export default ProductAll;