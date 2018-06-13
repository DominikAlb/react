import React, { Component } from 'react';
import './Prop.css';
import logo from './poisson.png'
import bin from './binomial.png'
import geo from './geometric.png'
import hip from './hipergeometric.png'
import uni from './uniform.png'
import norm from './normal.png'
import cent from './central.png'
export function p() {
    return (
        <div className="Prop">
            <header >
             <img src={logo} />
             <img src={bin} />
             <img src={geo} />
             <img src={hip} />
             <img src={uni} />
             <img src={norm} />
             <img src={cent} />
            </header>
        </div>
      );
}