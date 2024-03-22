
'use client'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios'
function ResponsiveAppBar() {
  const router = useRouter();
  const [Menu, setMenu] = useState([]);


  useEffect(() => {
      const Menu = async () => {
          const menu = await axios.get('http://testtourchpro.com/api/getallMenuProducts');
         
          const menus = menu.data;
          if (menus.length > 0) {
              console.log('menus', menus)
              setMenu(menus)
          }
      }
      Menu()
  }, [])
  return (
    <>
    
      <div className="header-navigation" style={{
        fontFamily:'Kanit'
      }}>
        <ul>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:void(0)"
            onClick={() => {
              router.push(`/`)
            }}
            >
              หน้าแรก
            </a>
          </li>
          <li className="dropdown dropdown-megamenu">
            <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
              สินค้า

            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="header-navigation-content">
                  <div className="row">
                    {Menu.length > 0 ? Menu?.map((res: any, keys: number) => {
                      return (
                        <div key={keys} className="col-md-4 header-navigation-col">
                          <h4>{res.cat_name}</h4>
                          <ul>
                            {res.products.length > 0 ? res.products.map((product: any, key: number) => {
                              return (
                                <>
                                  <li key={key}><a
                                  href="javascript:void(0)"
                                  onClick={() => {
                                    router.push(`/products/${product.id}`)
                                  }}>

                                    <b>{key + 1}{"."}</b> {product.name}</a></li>
                                </>
                              )
                            })
                              : ''}
                          </ul>
                        </div>
                      )

                    })
                      : ''
                    }


                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li><a href="#">เกี่ยวกับเรา</a></li>
          <li><a href="#" target="_blank">ติดต่อเรา</a></li>
        </ul>
      </div>
    </>
  );
}
export default ResponsiveAppBar;