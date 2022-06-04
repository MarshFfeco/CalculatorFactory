
function criaCalculator() {
    return {
        display: document.querySelector('#display'),



        //Inicializador
        init() {
            alert("Calculator Started");
            this.buttonClick();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                if(e.keyCode === 13) {
                    this.finished();
                }
            });
        },

        //Pega o evento dos butões e joga para o #display
        buttonClick() {
            document.addEventListener('click', (e) => {
                const el = e.target;


                if(el.classList.contains('number')) {    
                    this.buttonNumberForDisplay(el.innerText);
                }
                if(el.classList.contains("operator")) {
                    this.buttonOperatorForDisplay(el.innerText);
                }
                if(el.classList.contains("reset") && this.display.value) {
                    this.buttonReset();

                } else if(el.classList.contains("reset") && !this.display.value) {
                    console.log("CASO NÃO TENHA PERCEBIDO VOCÊ NÃO DIGITOU NADA.");
                    console.log("SEU ANIMAL!");
                    console.log("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
                }
                if(el.classList.contains("equal")) {
                    this.finished();
                }
            });
        },

        finished() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                console.log(`QUE CONTA FÁCIL TU É UM ANIMAL MESMO\n a resposta é ${conta} EASY D++++++`);
                console.log("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");

                if(!conta) {
                    alert("Conta indispónível");
                    this.display.value = null;
                    console.log("BURRO");
                    console.log("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert("Deu merda aqui!");
                return;
            }


        },

        buttonNumberForDisplay(valor) {
            this.display.value += valor;
            console.log("Se você está vendo isso significa que o nuúmero foi adicionado no display :D");
            console.log("PARE DE OLHAR O CONSOLE");
            console.log("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
        },

        buttonOperatorForDisplay(valor) {
            this.display.value += valor;
            console.log("Se você está vendo isso significa que o operador foi adicionado no display:D");
            console.log("JÁ DISSE PARA PARAR DE OLHAR O CONSOLE");
            console.log("SEU METIDO");
            console.log("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
        },

        buttonReset() {
            this.display.value = null;
            TextoFoda(() => TextoFoda2(() => TextoFoda3(() => TextoFoda4(function() {
                setTimeout(() => console.clear(), 1000);
            }))));

            function TextoFoda(callback) {
                setTimeout(function() {
                    console.log("eu sou inevitável");
                    callback();
                }, 1000);
            }

            function TextoFoda2(callback) {
                setTimeout(function() {
                    console.log("e eu");
                    callback();
                }, 1000);
            }

            function TextoFoda3(callback) {
                setTimeout(function() {
                    console.log("sou");
                    callback();
                }, 1000);
            }

            function TextoFoda4(callback) {
                setTimeout(function() {
                    console.log("o homem de ferro");
                    callback();
                }, 1000);
            }
        }
    }
};

const calculadora = criaCalculator();
calculadora.init();

