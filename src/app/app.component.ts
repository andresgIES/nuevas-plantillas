import { Component } from "@angular/core";
import { Billonario } from "../assets/loteriasHoy";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  billonario: Billonario = {
    cuatroCifras: "230.323.589",
    tresCifras: "34.565.656"
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
}
