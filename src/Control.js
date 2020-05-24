import React from 'react';
import InputRadio from './InputRadio';
import Categories from './Categories';
import SearchText from './SearchText';
import SubmitBtn from './SubmitBtn';

export default function Control() {
  return (
    <section className="control">
      <h1>Hey!</h1>
      <h3>Let's try to find a joke for you:</h3>

      <div className="control-menu">
        <InputRadio option="random"/>

        <InputRadio option="category" />
        <Categories />

        <InputRadio option="search"/>
        <SearchText />

        <SubmitBtn />
      </div>
    </section>
  )
}
