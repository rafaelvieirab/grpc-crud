import React, { useState } from 'react';

import { Car } from '../../protobuffers/car_pb';

import style from './styles/form';

interface FormProps {
  car: Car;
  setShow: Function;
  callbackUpdateCar: Function;
  callbackCreateCar: Function;
}

export default function Form(props: FormProps) {
  const id = props.car.getId() || '';
  const [name, setName] = useState<string>(props.car.getName() || '');
  const [brand, setBrand] = useState<string>(props.car.getBrand() || '');
  const [manufactureYear, setManufactureYear] = useState<number>(props.car.getManufactureyear() || 0);
  const [modelYear, setModelYear] = useState<number>(props.car.getModelyear() || 0);
  const [price, setPrice] = useState<number>(props.car.getPrice() || 0.0);

  function createCar() {
    if (name && brand && manufactureYear && modelYear && price) {
      props.callbackCreateCar({
        name,
        brand,
        manufactureYear,
        modelYear,
        price
      });
      props.setShow();
    } else {
      window.alert('Preencha todos os campos')
    }
  }

  function updateCar() {
    if (id && name && brand && manufactureYear && modelYear && price) {
      props.callbackUpdateCar({
        id,
        name,
        brand,
        manufactureYear,
        modelYear,
        price
      });
      props.setShow();
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
    <div id="modal" style={style.modal}>
      <div id="container" style={style.container}>
        <header style={style.header}>
          <button onClick={props.setShow()} style={style.btnClose}>X</button>
        </header>

        <form method="POST" style={style.form}>
          {(props.car.getId() !== '') && (
            <div className="field-input" style={style.fieldInput}>
              <label htmlFor="id" style={style.label}>Id</label>
              <input id="id" type="text" value={props.car.getId()} readOnly style={style.input} />
            </div>
          )}
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="name" style={style.label}>Name</label>
            <input id="name" type="text"
              value={props.car.getName() || ''}
              onChange={event => setName(event.target.value)}
              minLength={3} required autoFocus
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="brand" style={style.label}>Brand</label>
            <input id="brand" type="text"
              value={props.car.getBrand() || ''}
              onChange={event => setBrand(event.target.value)}
              minLength={3} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="manufactureYear" style={style.label}>Manufacture Year</label>
            <input id="manufactureYear"
              value={props.car.getManufactureyear() || 1970}
              onChange={event => setManufactureYear(Number(event.target.value))}
              type="number" minLength={4} maxLength={4} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="modelYear" style={style.label}>Model Year</label>
            <input id="modelYear" type="number"
              value={props.car.getModelyear() || 1970}
              onChange={event => setModelYear(Number(event.target.value))}
              minLength={4} maxLength={4} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="price" style={style.label}>Price</label>
            <input id="price" type="number"
              value={props.car.getPrice() || 1970}
              onChange={event => setPrice(Number(event.target.value))}
              required
              style={style.input}
            />
          </div>
        </form>

        <div id="buttons" style={style.buttons}>
          <button type="reset" onClick={fieldsReset} style={style.btnReset}>Limpar</button>
          {(props.car.getId() === '')
            ? (<button type="button" onClick={createCar} style={style.btnAction}>Criar</button>)
            : (<button type="button" onClick={updateCar} style={style.btnAction}>Atualizar</button>)
          }
        </div>
      </div>
    </div>
  )
}