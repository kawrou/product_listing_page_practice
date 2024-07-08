interface IProductData{
    productId: string,
    sku: string,
    title: string,
    price: number,
    image: string,
}

export const fetchData = async (): Promise<IProductData[]> => {
  const url = "https://jsainsburyplc.github.io/front-end-test/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: IProductData[] = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Fetch error: ${err.message}`);
    }
    throw new Error("An unkown error occured")
  }
};
