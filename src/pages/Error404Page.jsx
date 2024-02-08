import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Error404Page() {
  return (
    <section className="errorPage">
      <h1 className="errorPage__title">404</h1>
      <h3 className="errorPage__info">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <NavLink to="/">
        <p className="errorPage__link">Retourner sur la page d'acceuil.</p>
      </NavLink>
    </section>
  );
}
