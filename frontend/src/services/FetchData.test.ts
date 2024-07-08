import { fetchData } from "./FetchData";
import createFetchMock from "vitest-fetch-mock";

//shape of api returned JSON

const mockData = [
  {
    productId: "5493179",
    sku: "549/3179",
    title: "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
  },
  {
    productId: "4251824",
    sku: "425/1824",
    title: "Challenge White Desk Fan - 12 Inch",
    price: 14.99,
    image: "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130",
  },
];

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("fetchData tests:", () => {
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it("fetches data from an api", async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(mockData));

    const response = await fetchData();
    console.log(response);
    expect(response.length).toEqual(2);
    expect(response).toEqual(mockData);
  });

  it("catches an error", async () => {
    fetchMocker.mockResponseOnce(JSON.stringify({}), {
      status: 500,
    });

    await expect(fetchData()).rejects.toThrow("Network response was not ok");
  });

  it("handles fetch rejection error", async () => {
    fetchMocker.mockRejectOnce(new Error("Failed to fetch"));
    await expect(fetchData()).rejects.toThrow("Fetch error: Failed to fetch");
  });
});
