import { IProduct } from '@/shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const fetchDataSheet = async (payload: string, callback: (error: any) => void) => {
  const res = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_SHEET_ID}/values/${payload}?key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return callback(error);
    });
  return res;
}

export const getProducts = createAsyncThunk('get/getProducts', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export const getSolarEnergy = createAsyncThunk('get/getSolarEnergy', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export const getWaterHeater = createAsyncThunk('get/getWaterHeater', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export const getSepticTank = createAsyncThunk('get/getSepticTank', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export const getPlasticTank = createAsyncThunk('get/getPlasticTank', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export const getSinkTank = createAsyncThunk('get/getSinkTank', async (payload: string, { rejectWithValue }) => {
  const res = await fetchDataSheet(payload, rejectWithValue)
  return res;
});

export interface productState {
  products: IProduct[] | null
  productsSearch: IProduct[] | null
  solarEnergyData: IProduct[] | null
  waterHeaterData: IProduct[] | null
  septicTankData: IProduct[] | null
  plasticTankData: IProduct[] | null
  sinkData: IProduct[] | null
}

const initialState: productState = {
  products: null,
  productsSearch: null,
  solarEnergyData: null,
  waterHeaterData: null,
  septicTankData: null,
  plasticTankData: null,
  sinkData: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductSearch: (state, action) => {
      state.productsSearch = action.payload ?? [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, () => {
      })
      .addCase(getProducts.fulfilled, (state, action: any) => {
        const rows = action.payload.data.values;
        //  rows.slice(1) remove title row
        const formattedData = rows.slice(1).map((row: any) => ({
          name: row[0],
          id: row[1],
          warranty: row[2],
          status: row[3],
          original_price: row[4],
          discounted_price: row[5],
          image_url: row[6],
        }));
        state.products = formattedData;
      })
      .addCase(getProducts.rejected, () => {
      })

      //getSolarEnergy
      .addCase(getSolarEnergy.pending, () => {
      })
      .addCase(getSolarEnergy.fulfilled, (state, action: any) => {
        const rows = action.payload.data.values;
        //  rows.slice(1) remove title row
        const formattedData = rows.slice(1).map((row: any) => ({
          name: row[0],
          id: row[1],
          warranty: row[2],
          status: row[3],
          original_price: row[4],
          discounted_price: row[5],
          image_url: row[6],
        }));
        state.solarEnergyData = formattedData;
      })
      .addCase(getSolarEnergy.rejected, () => {
      })
    
    //getWaterHeater
    .addCase(getWaterHeater.pending, () => {
    })
    .addCase(getWaterHeater.fulfilled, (state, action: any) => {
      const rows = action.payload.data.values;
      //  rows.slice(1) remove title row
      const formattedData = rows.slice(1).map((row: any) => ({
        name: row[0],
        id: row[1],
        warranty: row[2],
        status: row[3],
        original_price: row[4],
        discounted_price: row[5],
        image_url: row[6],
      }));
      state.waterHeaterData = formattedData;
    })
    .addCase(getWaterHeater.rejected, () => {
    })

    //getSepticTank
    .addCase(getSepticTank.pending, () => {
    })
    .addCase(getSepticTank.fulfilled, (state, action: any) => {
      const rows = action.payload.data.values;
      //  rows.slice(1) remove title row
      const formattedData = rows.slice(1).map((row: any) => ({
        name: row[0],
        id: row[1],
        warranty: row[2],
        status: row[3],
        original_price: row[4],
        discounted_price: row[5],
        image_url: row[6],
      }));
      state.septicTankData = formattedData;
    })
    .addCase(getSepticTank.rejected, () => {
    })

    //getPlasticTank
    .addCase(getPlasticTank.pending, () => {
    })
    .addCase(getPlasticTank.fulfilled, (state, action: any) => {
      const rows = action.payload.data.values;
      //  rows.slice(1) remove title row
      const formattedData = rows.slice(1).map((row: any) => ({
        name: row[0],
        id: row[1],
        warranty: row[2],
        status: row[3],
        original_price: row[4],
        discounted_price: row[5],
        image_url: row[6],
      }));
      state.plasticTankData = formattedData;
    })
    .addCase(getPlasticTank.rejected, () => {
    })

    //getSinkTank
    .addCase(getSinkTank.pending, () => {
    })
    .addCase(getSinkTank.fulfilled, (state, action: any) => {
      const rows = action.payload.data.values;
      //  rows.slice(1) remove title row
      const formattedData = rows.slice(1).map((row: any) => ({
        name: row[0],
        id: row[1],
        warranty: row[2],
        status: row[3],
        original_price: row[4],
        discounted_price: row[5],
        image_url: row[6],
      }));
      state.sinkData = formattedData;
    })
    .addCase(getSinkTank.rejected, () => {
    })
  }
});

export const { setProductSearch } = productSlice.actions
export default productSlice.reducer
