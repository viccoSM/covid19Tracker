import axios from "axios";

const urlGlobal = "https://covid19.mathdro.id/api";
const urlIndonesia = "https://indonesia-covid-19.mathdro.id/api";

export const tarikDataGlobal = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(urlGlobal);
    return { confirmed, recovered, deaths };
  } catch (err) {
    console.log(err);
  }
};

export const tarikDataIndo = async () => {
  try {
    const {
      data: { jumlahKasus: confirmed, meninggal: deaths, sembuh: recovered },
    } = await axios.get(urlIndonesia);
    return { confirmed, recovered, deaths };
  } catch (err) {
    console.log(err);
  }
};

export const tarikDataProvinsi = async () => {
  try {
    const {
      data: { data: provinces },
    } = await axios.get(`${urlIndonesia}/provinsi`);
    return provinces.map((provinsi) => ({
      namaProvinsi: provinsi.provinsi,
      confirmed: provinsi.kasusPosi,
      deaths: provinsi.kasusMeni,
      recovered: provinsi.kasusSemb,
    }));
  } catch (err) {
    console.log(err);
  }
};
