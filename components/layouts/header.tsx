
'use client'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios'
function ResponsiveAppBar() {
  const router = useRouter();
  const [Menu, setMenu] = useState([]);


  useEffect(() => {
      const Menu = async () => {
        console.log('ddd',process.env.NEXT_PUBLIC_BACKEND_URL)
          const menu = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getallMenuProducts`);
         
          const menus = menu.data;
          if (menus.length > 0) {
              console.log('menus', menus)
              setMenu(menus)
          }
      }
      Menu()
  }, [])

  const shuffleArray = (array:any[]) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const getRandomProducts = (products:any, count:number) => {
    const shuffledProducts = shuffleArray([...products]);
    return shuffledProducts.slice(0, count);
  };

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
   
                            {res.products.length > 0 ? getRandomProducts(res.products, 5).map((product, key) => {
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
          <li><a href="javascript:void(0)"
           onClick={() => {
            router.push(`/contact`)
          }}
         >ติดต่อเรา</a></li>
        </ul>
      </div>
    </>
  );
}
export default ResponsiveAppBar;