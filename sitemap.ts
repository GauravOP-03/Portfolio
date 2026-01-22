import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = "https://portfolio-olive-five-k36adlswe2.vercel.app";
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        }
    ]


}