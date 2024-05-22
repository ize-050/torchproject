'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import axios from 'axios';
import { get } from "http";
import { headers } from "next/headers";
const Home = () => {
  const router = useRouter();
  const [Product, setProduct] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  // Function to select two random products from the array


  useEffect(() => {
    const getMenus = async () => {
      
    
      
      const product = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllproduct`
      )
      const products = product.data;
      if (products.length > 0) {
        setProduct(products);
      }
    }
    getMenus()
  }, [])

  const selectRandomProducts = () => {
    const selectedProducts :any = [];
    while (selectedProducts.length < 2) {
      const randomIndex = Math.floor(Math.random() * Product.length);
      if (!selectedProducts.includes(Product[randomIndex])) {
        selectedProducts.push(Product[randomIndex]);
      }
    }
    setRandomProducts(selectedProducts);
  };


  useEffect(() => {
    if (Product.length > 0) {
      selectRandomProducts();
    }
  }, [Product])
  return (
    <>
      <div className="page-slider">
        <div id="carousel-example-generic" className="carousel slide carousel-slider" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="/slider3.jpg" alt="text" />

            </div>
            <div className="item">
              <img src="./slider1.jpg" alt="Second slide" />

            </div>

          </div>
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>

      <div className="main" style={{
        fontFamily: "Kanit"
      }}>
        <div className="container">
          <div className="row margin-bottom-40">
            <div className="col-md-12  sale-product">
              <h2 style={{
                fontFamily: "Kanit"
              }}>สินค้าของเรา</h2>

              <div className="owl-carousel owl-carousel5 ">
                {Product.map((product: any, key) => {
                  return (
                    <div key={key} className="col-md-3 col-xs-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Image src={product.images} className="img-responsive" width="200" height="100" alt={""} />
                          <div>
                            <a href={product.images}  data-fancybox-group="button" className="btn btn-default fancybox-button">

                              Zoom
                            </a>
                            <a href="javascript:void(0)"
                              onClick={() => {
                                router.push('/products/' + product.id)
                              }}
                              className="btn btn-default fancybox-fast-view">View</a>
                          </div>
                        </div>
                        <h3 style={{
                          fontSize: '16px',
                        }}>{product.name}</h3>
                        <div className="pi-price">150.00</div>
                      </div>
                    </div>
                  )
                }
                )}
              </div>
            </div>
            <div className="row margin-bottom-35 ">
              <div className="col-md-6">
                <h2>Two items</h2>
                {randomProducts.map((product: any, key) => {
                  return (
                    <div key={key} className="col-md-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Image src={product.images} className="img-responsive" alt="Berry Lace Dress" width="200" height="100" />
                          <div>
                            <a href={product.images} className="btn btn-default fancybox-button">Zoom</a>
                            <a href="javascript:void(0)"
                              onClick={() => {
                                router.push('/products/' + product.id)
                              }}
                              className="btn btn-default fancybox-fast-view">View</a>
                          </div>
                        </div>
                        <h3 style={{
                          fontSize: '16px',
                        }}>{product.name}</h3>
                        <div className="pi-price">150.00</div>
                      </div>
                    </div>
                  )
                }
                )}
              </div>
              <div className="col-md-6 shop-index-carousel">
                <div className="content-slider">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <Image
                          width={600}
                          height={500}
                          alt="test"
                          src="/banner4.jpg" className="img-responsive" />
                      </div>
                      {/* <div className="item">
                      <img src="assets/pages/img/index-sliders/slide2.jpg" className="img-responsive" alt="Berry Lace Dress" />
                    </div>
                    <div className="item">
                      <img src="assets/pages/img/index-sliders/slide3.jpg" className="img-responsive" alt="Berry Lace Dress" />
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>



      </div>


    </>
  );
}

export default Home;