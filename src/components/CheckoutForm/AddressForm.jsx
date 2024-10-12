import React, { useState, useEffect, useReducer } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';

const initialState = {
  shippingCountries: [],
  shippingCountry: '',
  shippingSubdivisions: [],
  shippingSubdivision: '',
  shippingOptions: [],
  shippingOption: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case "setShippingCountries": 
      return {
        ...state,
        shippingCountries: action.payload
      }

    case "setShippingCountry": 
      return {
        ...state,
        shippingCountry: action.payload
      }

    case "setShippingSubdivisions":
      return {
        ...state,
        shippingSubdivisions: action.payload
      }

    case "setShippingSubdivision":
      return {
        ...state,
        shippingSubdivision: action.payload
      }

    case "setShippingOptions": 
      return {
        ...state,
        shippingOptions: action.payload
      }

    case "setShippingOption": 
      return {
        ...state,
        shippingOption: action.payload
      }
      
    default: 
      return state;
  }
}

const AddressForm = ({ checkoutToken, test }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {shippingCountries, shippingCountry, shippingSubdivisions, shippingSubdivision, shippingOptions, shippingOption} = state;

  // const [shippingCountries, setShippingCountries] = useState([]);
  // const [shippingCountry, setShippingCountry] = useState('');
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState('');
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    dispatch({type: "setShippingCountries", payload: countries});
    dispatch({type: "setShippingCountry", payload: Object.keys(countries)[0]});
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
    dispatch({type: "setShippingSubdivisions", payload: subdivisions});
    dispatch({type: "setShippingSubdivision", payload: Object.keys(subdivisions)[0]});
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
    dispatch({type: "setShippingOptions", payload: options});
    dispatch({type: "setShippingOption", payload: options[0].id});
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
