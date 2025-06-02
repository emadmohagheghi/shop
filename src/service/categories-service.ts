import { readData } from "@/core/http-service/http-service";
import { HeaderType } from "@/types/header.types";


export async function GetHeaderData() {
  const res = await readData<HeaderType>(
    '/api/content/header/data/'
  );
  return res.data;
}


