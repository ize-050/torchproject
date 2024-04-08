'use client'
import React from 'react'

function Footer() {
    return (
        <>
            <div className="pre-footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>เกี่ยวกับเรา</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip  commodo consequat. </p>
                            <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>ประเภทสินค้า</h2>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right"></i> <a href="javascript:;">ไฟฉาย</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="javascript:;">หลอดไฟ</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="javascript:;">ปลั๊กไฟ</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2 className="margin-bottom-1">ช่องทางติดต่อ</h2>
                            <div style={{marginBottom:"10px"}}>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#3b5998",marginRight: "10px"}}
                                    href="https://www.facebook.com/rutchanee.sinphiban/"

                                ><i className="fa fa-facebook" style={{width:"20px"}}></i
                                ></a>

                                 rutchanee.sinphiban
                            </div>

                            <div style={{marginBottom:"10px"}}>
                                <a
                                    className="btn btn-d btn-floating m-"
                                    style={{marginRight: "10px"}}
                                    href="https://line.me/ti/p/~0899614778"

                                >
                                <img src="line.png" alt="line" style={{ width: "20px", height: "20px" }} />
                                </a>
                                0899614778
                            </div>

                            <div>
                                <a
                                    className="btn btn-d btn-floating m-"
                                    style={{ backgroundColor: "#eee",marginRight: "10px"}}
                                    href="https://www.tiktok.com/@ratchaneesinphiban"
                                >
                                <img src="tictok.png" alt="line" style={{ width: "20px", height: "20px" }} />
                                </a>
                                0899614778
                            </div>

                           


                        </div>

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>ที่อยู่</h2>

                        </div>

                    </div>

                    <div className="row">



                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer