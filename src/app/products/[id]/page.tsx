'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
const ProductDetail = ({ params }: any) => {
    const [ProductDetail, setProductDetail] = useState({
        name: '',
        price: '',
        description: '',
        product_images: [],
        category: '',
        availability: ''
    });
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


    useEffect(() => {
        const ProductDetail = async () => {
            const product_detail = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getProductDetail/${params.id}`)
            const product = product_detail.data;
            if (product) {
                console.log('product', product)
                setProductDetail(product)
            }
        }
        ProductDetail()
    }, [params.id])
    return (
        <div className="main">
            <div className="title-wrapper"

            style={{
                fontFamily:"Kanit"
            }}
            >
                <div className="container"><div className="container-inner">
                    <h1><span>All</span> Product</h1>
                    <h4 style={{
                        color: '#f1f1f1'
                    }}>{ProductDetail.name}</h4>
                </div></div>
            </div>
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">หน้าแรก</a></li>
                    <li><a href="">สินค้า</a></li>
                    <li className="active">{ProductDetail.name}</li>
                </ul>

                <div className="row margin-bottom-40">
                    <div className="sidebar col-md-3 col-sm-5">
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

                    <div className="col-md-9 col-sm-7">
                        <div className="product-page">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="product-main-image">
                                        <Image src={ProductDetail.product_images[0]} className="img-responsive" data-BigImgsrc={ProductDetail.product_images[0]} alt="product" width={500} height={500} />
                                    </div>
                                    <div className="product-other-images" >
                                        {ProductDetail.product_images.map((image: any, key: number) => {
                                            return (
                                                <a href={image} key={key} className="fancybox-button" rel="photos-lib"><img src={image} alt="Berry Lace Dress" key={key} /></a>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h1>{ProductDetail.name}</h1>
                                    <div className="price-availability-block clearfix">
                                        <div className="price" style={{
                                            color: 'blue !important'
                                        }}>
                                            <strong><span>฿</span>{ProductDetail.price}</strong>
                                        </div>
                                        <div className="availability">
                                            Availability: <strong>มีสินค้า</strong>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{ReactHtmlParser(ProductDetail.description)}</p>
                                    </div>

                                    {/*                 
                  <div className="review">
                    <input type="range" value="4" step="0.25" id="backing4"/>
                    <div className="rateit" data-rateit-backingfld="#backing4" data-rateit-resetable="false"  data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5">
                    </div>
                    <a href="javascript:;">7 reviews</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript:;">Write a review</a>
                  </div>
                  <ul className="social-icons">
                    <li><a className="facebook" data-original-title="facebook" href="javascript:;"></a></li>
                    <li><a className="twitter" data-original-title="twitter" href="javascript:;"></a></li>
                    <li><a className="googleplus" data-original-title="googleplus" href="javascript:;"></a></li>
                    <li><a className="evernote" data-original-title="evernote" href="javascript:;"></a></li>
                    <li><a className="tumblr" data-original-title="tumblr" href="javascript:;"></a></li>
                  </ul>
                  */}
                                </div>



                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}
export default ProductDetail;