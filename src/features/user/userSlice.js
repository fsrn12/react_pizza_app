import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress, getPosition } from '../../services/apiGeocoding';

/**
 **STEP 1)
 * Get User's geoLocation/Position
 ** STEP 2)
 * a): Use a Reverse geocoding API to get user's address description.
 * b): Display above in ORDER FORM.
 * c): Let User Correct/Edit Address
 ** STEP 3)
 * Return the data in an Object/Payload of FUlfilled State
 */

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function getLocation() {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city}
 ${addressObj?.postcode}, ${addressObj?.countryName}`;
    console.table({ position, address });
    return { position, address };
  },
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'There was an Error getting your address. Make sure to fill this field correctly';
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (state) => state.user;
