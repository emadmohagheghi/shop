"use client";
import { useProductsFilters } from "@/hooks/useProductFilter";
import { useHeaderStore } from "@/stores/header-data.store";
import { Radio, RadioGroup } from "@/app/_components/ui/radio";
import { Checkbox, CheckboxGroup } from "@/app/_components/ui/checkbox";
import { Switch } from "@/app/_components/ui/switch";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Drawer } from "@/app/_components/ui/drawer";

export default function Filters() {
  const {
    filters: { brand, category, special },
    setters: { setBrand, setCategory, setSpecial },
    actions: { clearFilters },
  } = useProductsFilters();

  const categories = useHeaderStore((state) => state.categories);
  const brands = useHeaderStore((state) => state.brands);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const content = (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#fff] p-4 shadow">
      <div className="flex w-full items-center justify-between">
        <p className="text-xl">فیلتر ها</p>
        <p
          className="text-error cursor-pointer text-sm font-medium"
          onClick={clearFilters}
        >
          حذف فیلتر ها
        </p>
      </div>
      <div className="mt-4 flex w-full items-center justify-between px-4">
        <label htmlFor={"spasial"}>فقط فروش ویژه</label>
        <Switch
          id={"spasial"}
          checked={special}
          onChange={() => setSpecial(!special)}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg p-4">
        <RadioGroup
          className="h-48 overflow-y-auto"
          value={category || ""}
          onChange={(value) => setCategory(value === "" ? null : value)}
          label="دسته بندی"
        >
          {categories.map((category) => (
            <Radio
              key={category.id}
              value={category.slug}
              label={category.title_ir}
            />
          ))}
        </RadioGroup>

        <CheckboxGroup
          label="برند"
          value={brand ?? undefined}
          onChange={(values) => {
            setBrand(values.length > 0 ? [...values] : null);
          }}
          className="h-48 overflow-y-auto"
        >
          {brands.map((brand) => (
            <Checkbox
              key={brand.id}
              value={String(brand.id)}
              label={brand.title_ir}
            />
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );

  return (
    <>
      {/* dekstop */}
      <div className="hidden lg:block w-full">{content}</div>
      {/* mobile */}
      <Button
        variant="primary"
        onClick={() => setIsDrawerOpen(true)}
        className="w-full flex-1 !rounded-full lg:hidden"
      >
        فیلتر ها
      </Button>
      <Drawer isOpen={isDrawerOpen} toggle={() => setIsDrawerOpen(false)}>
        {content}
        <Button variant="success" className="rounded-full w-full mb-4" onClick={() => setIsDrawerOpen(false)}>
          اعمال فیلتر
        </Button>
      </Drawer>
    </>
  );
}
