import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Syed Faizan - Professional Portfolio | Software Engineer',
        short_name: 'Syed Faizan',
        description: 'Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
    }
}

// const favicon = {
//     "name": "",
//     "short_name": "",
//     "display": "standalone",
//     "background_color": "#ffffff",
//     "theme_color": "#ffffff",
//     "icons": [
//         {
//             "src": "/android-chrome-192x192.png",
//             "sizes": "192x192",
//             "type": "image/png"
//         },
//         {
//             "src": "/android-chrome-512x512.png",
//             "sizes": "512x512",
//             "type": "image/png"
//         }]
// }