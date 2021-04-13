import { Component } from "@angular/core";
import { Loteria, loteriasHoy } from "../assets/loteriasHoy";
import { loteriasSemanales } from "../assets/loteriasSemanales";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})

export class AppComponent {
  resultadosSemanales: any[] = loteriasSemanales;
  const loteriasHoy: Loteria[] = [
  {
    numero: "1111",
    nombre: "Cauca",
    fecha: "20-02-2021"
  },
  {
    numero: "8371",
    nombre: "boyaca",
    fecha: "20-02-2021"
  },
  {
    numero: "8694",
    nombre: "chontico",
    fecha: "20-02-2021"
  },
  {
    numero: "3871",
    nombre: "antioque",
    fecha: "21-02-2021"
  }
];

resultado = "";

size = loteriasHoy.length;

for (var i = 0; i < size; i++) {
    const element = loteriasHoy[i];
    if (i % 2 === 0) {
        const blanco = `<div class="panel30__grid__result__subgrid__secondary"><div>${element.nombre}</div><div>${element.numero}</div><div>${element.fecha}</div></div>`;
        resultado.concat(blanco);
    }
    else {
        const cyan = `<div class="panel30__grid__result__subgrid"><div>${element.nombre}</div><div>${element.numero}</div><div>${element.fecha}</div></div>`;
        resultado.concat(cyan);
    }
}

let loteriasHoyLateral = `<section class="panel30__info">
<div class="panel30__info__card">
    <h1 class="panel30__info__card__title">resultados hoy</h1>
    <div class="panel30__grid__subtitle">
        <div>Loteria</div>
        <div>Ganó</div>
        <div>fecha</div>
    </div>
    <div class="panel30__grid__results">${resultado}</div>
</div>
</section>`;

  plantillaCentralHtml = `<div class="semanales" id="semanales"> <div class="logo"> <img src="https://www.codet-colombia.com/ies/new-template/semanales/Gana.png" alt="Logo Gana"> </div><h3 class="titulo">resultados semanales</h3> <div class="tabla"> <table class="tablaSemanales"> <thead> <tr> <th>Día</th> <th>Loteria</th> <th>Ganó</th> <th>Serie</th> <th>Favorito</th> <th>Fecha</th> <th>Hora</th> </tr></thead> <tbody> <tr> <td class="dia" rowspan="2">Lunes</td><td class="wh">Tolima</td><td class="wh">${
    this.resultadosSemanales[0].ganoTolima
  }</td><td class="wh">${
    this.resultadosSemanales[0].serieTolima
  }</td><td class="wh">${
    this.resultadosSemanales[0].favoritoTolima
  }</td><td class="wh">${
    this.resultadosSemanales[0].fechaTolima
  }</td><td class="wh">${
    this.resultadosSemanales[0].horaTolima
  }</td></tr><tr> <td class="wh">Cundinamarca</td><td class="wh">${
    this.resultadosSemanales[1].ganoCundinamarca
  }</td><td class="wh">${
    this.resultadosSemanales[1].serieCundinamarca
  }</td><td class="wh">${
    this.resultadosSemanales[1].favoritoCundinamarca
  }</td><td class="wh">${
    this.resultadosSemanales[1].fechaCundinamarca
  }</td><td class="wh">${
    this.resultadosSemanales[1].horaCundinamarca
  }</td></tr><tr> <td class="dia" rowspan="2">Martes</td><td class="gr">Huila</td><td class="gr">${
    this.resultadosSemanales[2].ganoHuila
  }</td><td class="gr">${
    this.resultadosSemanales[2].serieHuila
  }</td><td class="gr">${
    this.resultadosSemanales[2].favoritoHuila
  }</td><td class="gr">${
    this.resultadosSemanales[2].fechaHuila
  }</td><td class="gr">${
    this.resultadosSemanales[2].horaHuila
  }</td></tr><tr> <td class="gr">Cruz Roja</td><td class="gr">${
    this.resultadosSemanales[3].ganoCruzRoja
  }</td><td class="gr">${
    this.resultadosSemanales[3].serieCruzRoja
  }</td><td class="gr">${
    this.resultadosSemanales[3].favoritoCruzRoja
  }</td><td class="gr">${
    this.resultadosSemanales[3].fechaCruzRoja
  }</td><td class="gr">${
    this.resultadosSemanales[3].horaCruzRoja
  }</td></tr><tr> <td class="dia" rowspan="3">Miercoles</td><td class="wh">Meta</td><td class="wh">${
    this.resultadosSemanales[4].ganoMeta
  }</td><td class="wh">${
    this.resultadosSemanales[4].serieMeta
  }</td><td class="wh">${
    this.resultadosSemanales[4].favoritoMeta
  }</td><td class="wh">${
    this.resultadosSemanales[4].fechaMeta
  }</td><td class="wh">${
    this.resultadosSemanales[4].horaMeta
  }</td></tr><tr> <td class="wh">Valle</td><td class="wh">${
    this.resultadosSemanales[5].ganoValle
  }</td><td class="wh">${
    this.resultadosSemanales[5].serieValle
  }</td><td class="wh">${
    this.resultadosSemanales[5].favoritoValle
  }</td><td class="wh">${
    this.resultadosSemanales[5].fechaValle
  }</td><td class="wh">${
    this.resultadosSemanales[5].horaValle
  }</td></tr><tr> <td class="wh">Manizales</td><td class="wh">${
    this.resultadosSemanales[6].ganoManizales
  }</td><td class="wh">${
    this.resultadosSemanales[6].serieManizales
  }</td><td class="wh">${
    this.resultadosSemanales[6].favoritoManizales
  }</td><td class="wh">${
    this.resultadosSemanales[6].fechaManizales
  }</td><td class="wh">${
    this.resultadosSemanales[6].horaManizales
  }</td></tr><tr> <td class="dia" rowspan="2">Jueves</td><td class="gr">Quindio</td><td class="gr">${
    this.resultadosSemanales[7].ganoQuindio
  }</td><td class="gr">${
    this.resultadosSemanales[7].serieQuindio
  }</td><td class="gr">${
    this.resultadosSemanales[7].favoritoQuindio
  }</td><td class="gr">${
    this.resultadosSemanales[7].fechaQuindio
  }</td><td class="gr">${
    this.resultadosSemanales[7].horaQuindio
  }</td></tr><tr> <td class="gr">Bogotá</td><td class="gr">${
    this.resultadosSemanales[8].ganoBogota
  }</td><td class="gr">${
    this.resultadosSemanales[8].serieBogota
  }</td><td class="gr">${
    this.resultadosSemanales[8].favoritoBogota
  }</td><td class="gr">${
    this.resultadosSemanales[8].fechaBogota
  }</td><td class="gr">${
    this.resultadosSemanales[8].horaBogota
  }</td></tr><tr> <td class="dia" rowspan="3">Viernes</td><td class="wh">Santander</td><td class="wh">${
    this.resultadosSemanales[9].ganoSantander
  }</td><td class="wh">${
    this.resultadosSemanales[9].serieSantander
  }</td><td class="wh">${
    this.resultadosSemanales[9].favoritoSantander
  }</td><td class="wh">${
    this.resultadosSemanales[9].fechaSantander
  }</td><td class="wh">${
    this.resultadosSemanales[9].horaSantander
  }</td></tr><tr> <td class="wh">Risaralda</td><td class="wh">${
    this.resultadosSemanales[10].ganoRisaralda
  }</td><td class="wh">${
    this.resultadosSemanales[10].serieRisaralda
  }</td><td class="wh">${
    this.resultadosSemanales[10].favoritoRisaralda
  }</td><td class="wh">${
    this.resultadosSemanales[10].fechaRisaralda
  }</td><td class="wh">${
    this.resultadosSemanales[10].horaRisaralda
  }</td></tr><tr> <td class="wh">Medellin</td><td class="wh">${
    this.resultadosSemanales[11].ganoMedellin
  }</td><td class="wh">${
    this.resultadosSemanales[11].serieMedellin
  }</td><td class="wh">${
    this.resultadosSemanales[11].favoritoMedellin
  }</td><td class="wh">${
    this.resultadosSemanales[11].fechaMedellin
  }</td><td class="wh">${
    this.resultadosSemanales[11].horaMedellin
  }</td></tr><tr> <td class="dia" rowspan="2">Sábado</td><td class="gr">Cauca</td><td class="gr">${
    this.resultadosSemanales[12].ganoCauca
  }</td><td class="gr">${
    this.resultadosSemanales[12].serieCauca
  }</td><td class="gr">${
    this.resultadosSemanales[12].favoritoCauca
  }</td><td class="gr">${
    this.resultadosSemanales[12].fechaCauca
  }</td><td class="gr">${
    this.resultadosSemanales[12].horaCauca
  }</td></tr><tr> <td class="gr">Boyaca</td><td class="gr">${
    this.resultadosSemanales[13].ganoBoyaca
  }</td><td class="gr">${
    this.resultadosSemanales[13].serieBoyaca
  }</td><td class="gr">${
    this.resultadosSemanales[13].favoritoBoyaca
  }</td><td class="gr">${
    this.resultadosSemanales[13].fechaBoyaca
  }</td><td class="gr">${
    this.resultadosSemanales[13].horaBoyaca
  }</td></tr></tbody> </table> </div><h4 class="footer">www.gana.com.co</h4></div>`;

  plantillaLateralHtml = `<div class="row"> <div class="col-lg-12"> <br><div id="LoteriaLateral" class="LoteriaLateral"> <div class="tituloNoticia"> <h4>RESULTADOS SEMANALES</h4> </div><div class="contenidoNoticia"> <table> <thead> <th>LOTERIA</th> <th>GANÓ</th> <th>FECHA</th> </thead> <tbody> <tr> <th>Tolima</th> <td>${
    this.resultadosSemanales[0].ganoTolima
  }</td><td>${
    this.resultadosSemanales[0].fechaTolima
  }</td></tr><tr> <th>Cundinamarca</th> <td>${
    this.resultadosSemanales[1].ganoCundinamarca
  }</td><td>${
    this.resultadosSemanales[1].fechaCundinamarca
  }</td></tr><tr> <th>Huila</th> <td>${
    this.resultadosSemanales[2].ganoHuila
  }</td><td>${
    this.resultadosSemanales[2].fechaHuila
  }</td></tr><tr> <th>Cruz Roja</th> <td>${
    this.resultadosSemanales[3].ganoCruzRoja
  }</td><td>${
    this.resultadosSemanales[3].fechaCruzRoja
  }</td></tr><tr> <th>Meta</th> <td>${
    this.resultadosSemanales[4].ganoMeta
  }</td><td>${
    this.resultadosSemanales[4].fechaMeta
  }</td></tr><tr> <th>Valle</th> <td>${
    this.resultadosSemanales[5].ganoValle
  }</td><td>${
    this.resultadosSemanales[5].fechaValle
  }</td></tr><tr> <th>Manizales</th> <td>${
    this.resultadosSemanales[6].ganoManizales
  }</td><td>${
    this.resultadosSemanales[6].fechaManizales
  }</td></tr><tr> <th>Bogotá</th> <td>${
    this.resultadosSemanales[8].ganoBogota
  }</td><td>${
    this.resultadosSemanales[8].fechaBogota
  }</td></tr><tr> <th>Quindio</th> <td>${
    this.resultadosSemanales[7].ganoQuindio
  }</td><td>${
    this.resultadosSemanales[7].fechaQuindio
  }</td></tr><tr> <th>Medellin</th> <td>${
    this.resultadosSemanales[11].ganoMedellin
  }</td><td>${
    this.resultadosSemanales[11].fechaMedellin
  }</td></tr><tr> <th>Risaralda</th> <td>${
    this.resultadosSemanales[10].ganoRisaralda
  }</td><td>${
    this.resultadosSemanales[10].fechaRisaralda
  }</td></tr><tr> <th>Santander</th> <td>${
    this.resultadosSemanales[9].ganoSantander
  }</td><td>${
    this.resultadosSemanales[9].fechaSantander
  }</td></tr><tr> <th>Boyaca</th> <td>${
    this.resultadosSemanales[13].ganoBoyaca
  }</td><td>${
    this.resultadosSemanales[13].fechaBoyaca
  }</td></tr><tr> <th>Cauca</th> <td>${
    this.resultadosSemanales[12].ganoCauca
  }</td><td>${
    this.resultadosSemanales[12].fechaCauca
  }</td></tr></tbody> </table> </div></div></div></div>`;
}
