import React, { useState } from 'react';

import { Car } from './protobuffer/car_pb';

interface FormProps {
  car: Car;
  setShow: Function;
  callbackUpdateCar: Function;
  callbackCreateCar: Function;
}

export default function Form(props: FormProps) {
  const id = props.car?.getId() || '';
  const [name, setName] = useState<string>(props.car?.getName() || '');
  const [brand, setBrand] = useState<string>(props.car?.getBrand() || '');
  const [manufactureYear, setManufactureYear] = useState<number>(props.car?.getManufactureyear() || 0);
  const [modelYear, setModelYear] = useState<number>(props.car?.getModelyear() || 0);
  const [price, setPrice] = useState<number>(props.car?.getPrice() || 0.0);

  function createCar() {
    if(name && brand && manufactureYear && modelYear && price) {
      props.callbackCreateCar({
        name,
        brand,
        manufactureYear,
        modelYear,
        price
      });
    } else {
      window.alert('Preencha todos os campos')
    }
  }

  function updateCar() {
    if(id && name && brand && manufactureYear && modelYear && price) {
      props.callbackUpdateCar({
        id,
        name,
        brand,
        manufactureYear,
        modelYear,
        price
      });
    } else {
      window.alert('Preencha todos os campos')
    }
  }

  function fieldsReset() {
    setName('');
    setBrand('');
    setManufactureYear(0);
    setModelYear(0);
    setPrice(0.0);
  }

  return (
    <div id="form-create-car">
      <header>
        <button onClick={props.setShow(false)}>
          X
        </button>
      </header>

      <form method="POST">
        {
          (props.car !== null) && (
            <div className="field-input">
              <label htmlFor="id">Id</label>
              <input id="id" type="text" readOnly />
            </div>
          )
        }
        <div className="field-input">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={event => setName(event.target.value)} minLength={3} required autoFocus />
        </div>
        <div className="field-input">
          <label htmlFor="brand">Brand</label>
          <input id="brand" type="text" onChange={event => setBrand(event.target.value)} minLength={3} required />
        </div>
        <div className="field-input">
          <label htmlFor="manufactureYear">Manufacture Year</label>
          <input id="manufactureYear" onChange={event => setManufactureYear(Number(event.target.value))} type="number" minLength={4} maxLength={4} required />
        </div>
        <div className="field-input">
          <label htmlFor="modelYear">Model Year</label>
          <input id="modelYear" type="number" onChange={event => setModelYear(Number(event.target.value))} minLength={4} maxLength={4} required />
        </div>
        <div className="field-input">
          <label htmlFor="price">Price</label>
          <input id="price" type="number" onChange={event => setPrice(Number(event.target.value))} required />
        </div>
      </form>
      
      <div id="buttons">
        <button type="reset" onClick={fieldsReset}>Clear</button>
        {
          (props.car.getId() === '')
            ? (<button type="button" onClick={createCar}>Create</button>)
            : (<button type="button" onClick={updateCar}>Update</button>)
        }
        <button type="button" onClick={createCar}>Create</button>
      </div>
    </div>
  )
}