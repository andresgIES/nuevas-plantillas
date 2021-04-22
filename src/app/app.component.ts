import { Component } from "@angular/core";
import { Baloto } from "./models/interfaces";
import { Billonario } from "./models/interfaces";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  // 21/04/2021
  // si aumenta el numero de caracteres de billonario hay que modificar ligeramente las plantillas
  // actualmente se admiten 11 caracteres en cuatroCifras y 10 caracteres en 3 cifras
  billonario: Billonario = {
    cuatroCifras: "878.356.437",
    tresCifras: "39.700.849"
  };

  baloto: Baloto = {
    fechaUltimoResultado: "Miércoles, 21 de Abril del 2021",
    ganador: ["03", "12", "19", "20", "24", "02"],
    fechaProximoSorteo: "Sábado, 24 de Abril del 2021",
    acumulado: "$7'500.000.000"
  };

  billonarioCentral = `<section class="baloto_r">
    <div class="baloto_c">
        <section class="baloto_head">
            <h4>acumulado</h4>
            <div class="logo"> <img src="/content/images/logos/Billonario.jpg" alt=""> </div>
        </section>
        <div class="border-b">
            <div class="billo-titulo">
                <h3>4 Cifras</h3>
            </div>
            <section class="baloro_premio">
                <h4 class="dolar">$</h4>
                <div class="nums">
                    <div class="num">
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          0,
                          1
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          1,
                          2
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          2,
                          3
                        )}</h3>
                        <h3 class="num_p">${this.billonario.cuatroCifras.slice(
                          3,
                          4
                        )}</h3>
                    </div>
                    <div class="num">
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          4,
                          5
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          5,
                          6
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          6,
                          7
                        )}</h3>
                        <h3 class="num_p">${this.billonario.cuatroCifras.slice(
                          7,
                          8
                        )}</h3>
                    </div>
                    <div class="num">
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          8,
                          9
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          9,
                          10
                        )}</h3>
                        <h3 class="num_d">${this.billonario.cuatroCifras.slice(
                          10,
                          11
                        )}</h3>
                    </div>
                </div>
            </section>
            <div class="baloto_t">
                <h1>¡Elige cinco números de cuatro cifras en tus dos loterias favoritas y hazte BILLONARIO!</h1>
            </div>
        </div> <!-- 3 cifras -->
        <div class="border-b">
            <div class="billo-titulo">
                <h3>3 Cifras</h3>
            </div>
            <section class="baloro_premio">
                <h4 class="dolar">$</h4>
                <div class="nums">
                    <div class="num">
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          0,
                          1
                        )}</h3>
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          1,
                          2
                        )}</h3>
                        <h3 class="num_p">${this.billonario.tresCifras.slice(
                          2,
                          3
                        )}</h3>
                    </div>
                    <div class="num">
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          3,
                          4
                        )}</h3>
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          4,
                          5
                        )}</h3>
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          5,
                          6
                        )}</h3>
                        <h3 class="num_p">${this.billonario.tresCifras.slice(
                          6,
                          7
                        )}</h3>
                    </div>
                    <div class="num">
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          7,
                          8
                        )}</h3>
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          8,
                          9
                        )}</h3>
                        <h3 class="num_d">${this.billonario.tresCifras.slice(
                          9,
                          10
                        )}</h3>
                    </div>
                </div>
            </section>
            <div class="baloto_t">
                <h1>¡Elige cuatro números de cuatro cifras en tus dos loterias favoritas y hazte BILLONARIO!</h1>
            </div>
        </div>
        <div class="baloto_url">
            <h1>Juégalo también en www.gana.com.co</h1>
        </div>
    </div>
</section>`;

  billonarioLateral = `<main>
    <section class="container_billonario">
        <article class="billonario-titulo">
            <h4>acumulado</h4>
        </article>
        <div class="logo-billonario"> <img src="content/images/logos/BILLONARIO.png" alt=""></div>
        <section class="border-line">
            <article class="billonario-titulo_cifras">
                <h4>4 cifras</h4>
            </article>
            <section class="premio-billonario">
                <h4>$</h4>
                <div class="nums">
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(0, 1)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(1, 2)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(2, 3)}</h1>
                    </div>
                    <div class="punto">
                        <h1>${this.billonario.cuatroCifras.slice(3, 4)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(4, 5)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(5, 6)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(6, 7)}</h1>
                    </div>
                    <div class="punto">
                        <h1>${this.billonario.cuatroCifras.slice(7, 8)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(8, 9)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(9, 10)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.cuatroCifras.slice(10, 11)}</h1>
                    </div>
                </div>
            </section>
            <article class="footer-billonario">
                <p>¡Elige cinco números de cuatro cifras en tus dos loterias favoritas y hazte BILLONARIO!</p>
            </article>
        </section>
    </section>
    <section class="container_billonario">
        <section class="border-line">
            <article class="billonario-titulo_cifras">
                <h4>3 cifras</h4>
            </article>
            <section class="premio-billonario">
                <h4>$</h4>
                <div class="nums">
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(0, 1)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(1, 2)}</h1>
                    </div>
                    <div class="punto">
                        <h1>${this.billonario.tresCifras.slice(2, 3)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(3, 4)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(4, 5)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(5, 6)}</h1>
                    </div>
                    <div class="punto">
                        <h1>${this.billonario.tresCifras.slice(6, 7)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(7, 8)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(8, 9)}</h1>
                    </div>
                    <div class="num">
                        <h1>${this.billonario.tresCifras.slice(9, 10)}</h1>
                    </div>
                </div>
            </section>
            <article class="footer-billonario">
                <p>¡Elige cinco números de tres cifras en tus dos loterias favoritas y hazte BILLONARIO!</p>
            </article>
        </section>
    </section>
</main>`;

  balotoCentral = `<section class="Baloto"> <div class="baloto_c"> <div class="resultado"> <p>resultado</p> </div><img src="/content/images/logos/baloto_logo.png" alt="" class="logo-bet" /> <div class="ultimo_c"> <div class="ultimo_r"> <h1> <span>último</span> resultado</h1> <p class="fecha_rlt">${
    this.baloto.fechaUltimoResultado
  }</p> </div> <div class="triangulo"> <img class="triangulo_svg" src="/content/images/triangulo.svg" alt=""> </div> <div class="ultimo_m"> <div class="numero_round"> <p>${
    this.baloto.ganador[0]
  }</p> </div> <div class="numero_round"> <p>${
    this.baloto.ganador[1]
  }</p> </div> <div class="numero_round"> <p>${
    this.baloto.ganador[2]
  }</p> </div> <div class="numero_round"> <p>${
    this.baloto.ganador[3]
  }</p> </div> <div class="numero_round"> <p>${
    this.baloto.ganador[4]
  }</p> </div> <div class="numero_round_red"> <p>${
    this.baloto.ganador[5]
  }</p> </div> </div> </div> <div class="acom_s"> <h1>Acumulado para el sorteo</h1> <p class="fecha_Acomrlt">${
    this.baloto.fechaProximoSorteo
  }</p> </div> <div class="price"> <h4>${
    this.baloto.acumulado
  }</h4> </div> </div> </section>`;

  balotoLateral = `<div id="BalotoDesign" class="BalotoDesign">
    <div class="headerBalotoDesign">
        <div class="title">RESULTADO</div>
        <div class="logo"> <img src="content/images/logos/baloto_logo.png" width="500"> </div>
    </div>
    <div class="containerBalotoDesign">
        <div class="left">
            <h2>ÚLTIMO RESULTADO</h2>
            <div class="dateBaloto">${this.baloto.fechaUltimoResultado}</div>
        </div>
        <div class="arrow">
            <div class="triangle-right"></div>
        </div>
        <div class="right">
            <div class="result"> <span class="dot">${
              this.baloto.ganador[0]
            }</span> <span class="dot">${
    this.baloto.ganador[1]
  }</span> <span class="dot">${this.baloto.ganador[2]}</span>
                <span class="dot">${
                  this.baloto.ganador[3]
                }</span> <span class="dot">${
    this.baloto.ganador[4]
  }</span> <span class="dot">${this.baloto.ganador[5]}</span>
            </div>
        </div>
    </div>
    <div class="datenextBaloto">
        <h2>ACUMULADO PARA EL SORTEO</h2>
        <div class="dateBaloto">${this.baloto.fechaProximoSorteo}</div>
    </div> <br>
    <div class="footerBalotoDesign">
        <div class="acumulateBaloto">${this.baloto.acumulado}</div>
    </div>
</div>`;
}
