// @ts-check
 
// /**
//  * @type {import('next').NextConfig}
//  * **/
module.exports  = {
    
    images: {
        domains: ['backoffice.amboss.cc','127.0.0.1:8000','localhost:8000','localhost','127.0.0.1'], // Add the hostname here
      },
    publicRuntimeConfig:{
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
