import { MetadataRoute } from "next";
import { CITIES_DATA, DOMAIN } from "@/app/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. 메인 페이지
  const routes: MetadataRoute.Sitemap = [
    {
      url: DOMAIN,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 2. 구 단위 및 동 단위 상세 페이지 자동 수집
  Object.values(CITIES_DATA).forEach((city) => {
    city.districts.forEach((district) => {
      // 구 단위 페이지 (/daejeon/yuseong 등)
      routes.push({
        url: `${DOMAIN}/${city.slug}/${district.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      // 동 단위 페이지 (/daejeon/yuseong/bongmyeong 등)
      district.dongs.forEach((dong) => {
        routes.push({
          url: `${DOMAIN}/${city.slug}/${district.slug}/${dong.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.6,
        });
      });
    });
  });

  return routes;
}