import React, { useState } from 'react';

import { Car } from '../protobuffer/car_pb';
// @ts-ignore
import style from './Form.css';

interface FormProps {
  car: Car;
  closeForm: Function;
  callbackUpdateCar: Function;
  callbackCreateCar: Function;
}

export default function Form(props: FormProps) {
  const id = props.car.getId();
  const [name, setName] = useState<string>(props.car.getName());
  const [brand, setBrand] = useState<string>(props.car.getBrand());
  const [manufactureYear, setManufactureYear] = useState<number>(props.car.getManufactureyear());
  const [modelYear, setModelYear] = useState<number>(props.car.getModelyear());
  const [price, setPrice] = useState<number>(props.car.getPrice());

  function createCar() {
    if (name && brand && manufactureYear && modelYear && price) {
      props.callbackCreateCar({
        name,
        brand,
        manufactureYear,
        modelYear,
        price
      });
      props.closeForm();
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
      props.closeForm();
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
        <header>
          <button onClick={() => props.closeForm()} style={style.btnClose}>&times;</button>
        </header>

        <form method="POST" style={style.form}>
          {(props.car.getId() !== '') && (
            <div className="field-input" style={style.fieldInput}>
              <label htmlFor="id" style={style.label}>Id</label>
              <input id="id" type="text" value={props.car.getId()} readOnly style={style.input} />
            </div>
          )}
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="name" style={style.label}>Nome</label>
            <input id="name" type="text"
              value={props.car.getName()}
              onChange={event => setName(event.target.value)}
              minLength={3} required autoFocus
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="brand" style={style.label}>Marca</label>
            <input id="brand" type="text"
              value={props.car.getBrand()}
              onChange={event => setBrand(event.target.value)}
              minLength={3} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="manufactureYear" style={style.label}>Ano de Fabricação</label>
            <input id="manufactureYear"
              value={props.car.getManufactureyear() || 1970}
              onChange={event => setManufactureYear(Number(event.target.value))}
              type="number" minLength={4} maxLength={4} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="modelYear" style={style.label}>Ano do Modelo</label>
            <input id="modelYear" type="number"
              value={props.car.getModelyear() || 1970}
              onChange={event => setModelYear(Number(event.target.value))}
              minLength={4} maxLength={4} required
              style={style.input}
            />
          </div>
          <div className="field-input" style={style.fieldInput}>
            <label htmlFor="price" style={style.label}>Preço (em R$)</label>
            <input id="price" type="number"
              value={props.car.getPrice() || 1000}
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