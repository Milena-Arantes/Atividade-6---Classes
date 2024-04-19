/*Crie uma classe chamada Estudante, essa classe deve conter os atributos: nome, e-mail, RA, curso e uma lista 
com o nome das disciplinas que o estudante está matriculado. 
A classe também deve ter dois métodos: primeiraDisciplina e ultimaDisciplina que vão devolver respectivamente 
a primeira disciplina que o estudante está matriculado e a última.

Para testar, crie dois estudantes de exemplo e imprima os valores na tela.*/

class Estudante {
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }
    primeiraDisciplina(){
        return this.disciplinas[0];
    }
    
    ultimaDisciplina(){
        return this.disciplinas[this.disciplinas.length-1];
    }
}

const estudante1 = new Estudante(
  "Primeiro Estudante", 
  "primeiroestudante@gmail.com", 
  "105123412", 
  "ADS", 
  [
   "Lógica de programação",
   "Inglês",
   "Engenharia de Software",
   "Cálculo"
  ]
);

const estudante2 = new Estudante(
    "Segundo Estudante",
    "segundoestudante@gmail.com",
    "1050641111",
    "Gestão Empresarial",
    [
        "Informática Básica",
        "Gestão de Pessoas",
        "Gestão da Inovação",
        "Estágio"
    ]
);

console.log(estudante1, "A primeira disciplina em que ele está matriculado é: ", estudante1.primeiraDisciplina(), "e a última é: ", estudante1.ultimaDisciplina());
console.log(estudante2, "A primeira disciplina em que ele está matriculado é: ", estudante2.primeiraDisciplina(), "e a última é: ", estudante2.ultimaDisciplina());