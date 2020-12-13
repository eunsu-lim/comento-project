import axios from "axios";

const baseUrl = "https://problem.comento.kr";

async function fecthList(pageNum) {
  try {
    let result = await axios.get(`${baseUrl}/api/list?=page=${pageNum}`, {
      params: {
        page: 1,
        ord: "asc",
        limit: 10,
        category: [1, 2, 3],
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAds() {
  try {
    let result = await axios.get(`${baseUrl}/api/ads`, {
      params: {
        page: 1,
        limit: 2,
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchDetail(id) {
  try {
    let result = await axios.get(`${baseUrl}/api/view?id=${id}`, {
      params: {
        id: id,
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchFilter() {
  try {
    let result = await axios.get(`${baseUrl}/api/category`);
    return result.data.category;
  } catch (error) {
    console.log(error);
  }
}

export { fecthList, fetchAds, fetchDetail, fetchFilter };
