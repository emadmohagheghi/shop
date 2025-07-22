import { readData } from "@/core/http-service/http-service";
import { ProductDetail } from "@/types/product.types";
import { ImageSlider } from "./_components";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;
  const productSlug = resolvedParams.slug[0];

  const product = await readData<ProductDetail>(
    `http://localhost:8000/api/catalog/product/${productSlug}/`,
  ).then((response) => response.data);

  return (
    <>
      <div className="container bg-[#fff] p-4">
        <div className="flex flex-col gap-4 lg:flex-row">
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
