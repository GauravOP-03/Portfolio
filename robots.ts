import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://portfolio-olive-five-k36adlswe2.vercel.app";
    return{
        rules : {
            userAgent: "*",
            allow: "/",
            disallow: "",
            crawlDelay: 0,
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }


}