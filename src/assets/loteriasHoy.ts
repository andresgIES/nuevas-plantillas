export interface Loteria {
  nombre: string;
  numero: string;
  fecha: string;
}

export interface Billonario {
  cuatroCifras: string;
  tresCifras: string;
}

export const loteriasHoy: Loteria[] = [
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
