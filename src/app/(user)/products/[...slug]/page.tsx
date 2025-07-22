import { readData } from "@/core/http-service/http-service";
import { ProductDetail } from "@/types/product.types";
import { ImageSlider } from "./_components";

export default async function Home({
  params,
}: {
  params: { slug: string | string[] };
}) {
  const productSlug = params.slug[0];

  const product = await readData<ProductDetail>(
    `http://localhost:8000/api/catalog/product/${productSlug}/`,
  ).then((response) => response.data);

  return (
    <>
      <div className="container p-4 bg-[#fff]">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <ImageSlider images={product.images} />
          </div>
          <div className="flex-1">
            {/* <ImageSlider images={product.images} /> */}
          </div>
          <div className="flex-1">
            {/* <ImageSlider images={product.images} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
