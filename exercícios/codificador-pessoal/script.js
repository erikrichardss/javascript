var nome = window.prompt("Qual é o seu nome?")
var strDia = window.prompt("Qual é o dia que você nasceu? ")
var strMes = window.prompt("Qual é o mês em que nasceu? ")
var Calcado = window.prompt("Qual o número do seu calçado? ")

var strDia = Number()
var strMes = Number()
var Calcado = Number()

var porta = Calcado % strMes

var regra01 = strDia >= 15
var regra02 = strMes || 7 + 12
var regra03 = Calcado % 2 == 0

var perfilValido = regra01 && regra02 && regra03

var codigoFinal = perfilValido ? (nome + "-VIP-" + porta) : (nome + "-REG-" + strDia)

window.alert("O resultado foi: " + codigoFinal)