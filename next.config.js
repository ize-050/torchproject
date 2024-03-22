// @ts-check
 
// /**
//  * @type {import('next').NextConfig}
//  * **/
module.exports  = {
    
    images: {
        domains: ['127.0.0.1','localhost','https://front.testtourchpro.com','https://testtourchpro.com'], // Add the hostname here
      },
    publicRuntimeConfig:{
        katsanApi:process.env.NEXT_PUBLIC_KATSAN_API,
        katsanAuth:process.env.NEXT_PUBLIC_KATSAN_AUTH
    },
    reactStrictMode: true,
    authUrl:process.env.NEXT_PUBLIC_KATSAN_AUTH,
    excludeFile: (str) => str.includes('login'),
    compiler: {
        styledComponents: true
    },
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

}

//module.exports = nextConfig


// /** @type {import('next').NextConfig} */
