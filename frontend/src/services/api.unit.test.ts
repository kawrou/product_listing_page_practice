import { fetchData } from "./api";
import { server } from "../mocks/node";

//fetch from api -> gets a json object
//parse json object -> array of objs
//assert on props of objs

// Shape of data:
// const apiData = [
//   {
//     productId: "5493179",
//     sku: "549/3179",
//     title: "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
//     price: 24.99,
//     image: "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
//   },
//   {
//     productId: "4251824",
//     sku: "425/1824",
//     title: "Challenge White Desk Fan - 12 Inch",
//     price: 14.99,
//     image: "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130",
//   },
// ];

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

describe("fetchData tests", () => {
  it("Can fetch data", async () => {
    const response = await fetchData();
    expect(response.length).toBe(2);
    expect(response[0].productId).toBe("5493179")
  });
});
