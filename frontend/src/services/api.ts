interface IJsonObj {
  productId: string;
  sku: string;
  title: string;
  price: number;
  image: string;
}

export const fetchData = async (): Promise<IJsonObj[]> => {
  const url = "https://jsainsburyplc.github.io/front-end-test/products.json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error); 
  }
};
