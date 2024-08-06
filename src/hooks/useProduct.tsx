/* eslint-disable react-hooks/exhaustive-deps */
import {
  getPlasticTank,
  getProducts,
  getSepticTank,
  getSinkTank,
  getSolarEnergy,
  getWaterHeater,
  setProductSearch,
} from "@/reducers/productSlice";
import { IProduct } from "@/shared/interfaces";
import { AppDispatch, RootState } from "@/store/store";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    products,
    solarEnergyData,
    waterHeaterData,
    septicTankData,
    plasticTankData,
    sinkData,
  } = useSelector((state: RootState) => state.product);

  // Cập nhật phạm vi ô bạn muốn lấy dữ liệu
  const RANGE_TANK_WATER = "Bon nuoc!A:G";
  const RANGE_SOLAR_ENERGY = "Thai Duong Nang!A:G";
  const RANGE_WATER_HEATER = "Binh Nuoc Nong!A:G";
  const RANGE_SEPTIC_TANK = "Bon Tu Hoai!A:G";
  const RANGE_PLASTIC_TANK = "Bon Nhua!A:G";
  const RANGE_SINK_TANK = "Chau Rua Sen Voi!A:G";

  const fetchTankWaters = async () => {
    try {
      dispatch(getProducts(RANGE_TANK_WATER));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const fetchSolarEnergy = async () => {
    try {
      dispatch(getSolarEnergy(RANGE_SOLAR_ENERGY));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const fetchWaterHeater = async () => {
    try {
      dispatch(getWaterHeater(RANGE_WATER_HEATER));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const fetchSepticTank = async () => {
    try {
      dispatch(getSepticTank(RANGE_SEPTIC_TANK));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const fetchPlasticTank = async () => {
    try {
      dispatch(getPlasticTank(RANGE_PLASTIC_TANK));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const fetchSinkTank = async () => {
    try {
      dispatch(getSinkTank(RANGE_SINK_TANK));
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const getProductAllTypes = useCallback(() => {
    fetchTankWaters();
    fetchSolarEnergy();
    fetchWaterHeater();
    fetchSepticTank();
    fetchPlasticTank();
    fetchSinkTank();
  }, []);

  const tankWaters: IProduct[] = useMemo(() => products ?? [], [products]);

  const solarEnergy: IProduct[] = useMemo(
    () => solarEnergyData ?? [],
    [solarEnergyData]
  );

  const waterHeater: IProduct[] = useMemo(
    () => waterHeaterData ?? [],
    [waterHeaterData]
  );

  const septicTank: IProduct[] = useMemo(
    () => septicTankData ?? [],
    [septicTankData]
  );

  const plasticTank: IProduct[] = useMemo(
    () => plasticTankData ?? [],
    [plasticTankData]
  );

  const sinkTank: IProduct[] = useMemo(() => sinkData ?? [], [sinkData]);

  const allProducts: IProduct[] = useMemo(
    () =>
      [
        ...sinkTank,
        ...plasticTank,
        ...septicTank,
        ...waterHeater,
        ...solarEnergy,
        ...tankWaters,
      ] ?? [],
    [sinkTank, plasticTank, septicTank, waterHeater, solarEnergy, tankWaters]
  );

  const filterProduct = (keySearch: string) => {
    if (allProducts.length > 0 && !!keySearch) {
      const lowerCaseKeySearch = keySearch.toLowerCase();
      const result = allProducts.filter((item) => {
        const lowerCaseName = item.name.toLowerCase();
        return lowerCaseName.includes(lowerCaseKeySearch);
      });
      dispatch(setProductSearch(result.length > 0 ? [...result] : []));
    } else {
      dispatch(setProductSearch([]));
    }
  };

  return {
    tankWaters,
    solarEnergy,
    waterHeater,
    septicTank,
    plasticTank,
    sinkTank,
    allProducts,
    getProductAllTypes,
    filterProduct,
    fetchTankWaters,
  };
};

export default useProduct;
