import { drinks, foods } from '../imgs/exportImgs';
import logoNoTiao from '../imgs/noTiao.jpg';

const listMenu = {
  foods: [
    {
      img: foods.picanha,
      name: 'Picanha Bolvina',
      description: '400g; Acompanha Farofa e Vinagrete',
      value: 'R$78,80',
    },
    {
      img: foods.bttaFrita,
      name: 'Batata Frita',
      description: '',
      value: 'R$20.00',
    },
    {
      img: foods.bolinhoCarne,
      name: 'Bolinho de Carne',
      description: 'Acompanha molho especial',
      value: 'R$32,90',
    },
    {
      img: foods.bolinhoCostela,
      name: 'Bolinho de Costela',
      description: 'Acompanha vinagrete',
      value: 'R$32,90',
    },
    {
      img: foods.carnePanela,
      name: 'Carne de panela',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.carneSol,
      name: 'Carne de sol com mandioca',
      description: 'Preparada na menteiga de garrafa',
      value: 'R$56,80',
    },
    {
      img: foods.coxinhaCostela,
      name: 'Coxinha de costela',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.coxinhaPernil,
      name: 'Coxinha de Pernil',
      description: '',
      value: 'R$32,90',
    },
    {
      img: foods.fileMignonGorgonzola,
      name: 'File mignon bolvino',
      description: '400 gramas de File mignon bolvino ao molho de Gorgonzola',
      value: 'R$74,00',
    },
    {
      img: logoNoTiao,
      name: 'File mignon suino',
      description: '400 gramas de File mignon suino com 200 gramas de mandioca frita',
      value: 'R$58,90',
    },
    {
      img: foods.fraldinha,
      name: 'Fraldinha com mandioca',
      description: 'Fraldinha desfiada com pure de mandioca',
      value: 'R$45,90',
    },
    {
      img: foods.joelho,
      name: 'Joelho de porco',
      description: 'Acompanha farofa de maracuja e batata cozida',
      value: 'R$45,90',
    },
    {
      img: foods.lingua,
      name: 'Lingua ao vinho',
      description: 'Acompanha purê de mandioca',
      value: 'R$39,90',
    },
  ],
  drinks: [
    {
      img: drinks.caipirinha,
      name: 'Caipirinha',
      description: 'cachaça, (Morango, marcuja ou limão) e açucar',
      value: 'R$14,00',
    },
    {
      img: drinks.caipVodkaMorango,
      name: 'CaipVodka ORLOFF/ABSOLUT',
      description: 'Orloff/Absolut, (Morango, marcuja ou limão) e açucar',
      value: 'R$16,90/R$18.90',
    },
    {
      img: drinks.campari,
      name: 'Campari',
      description: 'Campari',
      value: 'R$13,00',
    },
    {
      img: drinks.ginTonica,
      name: 'Gin Tropical',
      description: 'Gin; Morango e Maracuja; açucar',
      value: 'R$26,90',
    },
    {
      img: drinks.coronita,
      name: 'Coronita/Cozumel',
      description: 'Tequila *opicional, limão e cerveja Corona',
      value: 'R$18,90',
    },
    {
      img: drinks.mojito,
      name: 'Mojito',
      description: 'Rum, limão, Hortelã e açucar',
      value: 'R$21,00',
    },
    {
      img: drinks.negroni,
      name: 'Negroni',
      description: 'Gin, Campari, Vermuth',
      value: 'R$21,90',
    },
    {
      img: drinks.lagoaAzul,
      name: 'Lagoa Azul',
      description: 'Limão, Vodka, Licor Stock Blue, Agua c/ Gas',
      value: 'R$23,90',
    },
    {
      img: drinks.marguerita,
      name: 'Marguerita',
      description: 'Limão, Tequila, Licor Stock',
      value: 'R$22,90',
    },
    {
      img: drinks.vinho,
      name: 'Vinho',
      description: 'Vinho',
      value: 'Consultar',
    },
    {
      img: drinks.vodka,
      name: 'Vodka',
      description: 'Orloff ou Absolut',
      value: 'R$9,00',
    },
    {
      img: drinks.redlabel,
      name: 'Wisky Red',
      description: 'Red Label, gelo, laranja',
      value: 'R$13,00',
    },
    {
      img: drinks.blacklabel,
      name: 'Wisky Black',
      description: 'Black Label, gelo, laranja',
      value: 'R$20,00',
    },
    {
      img: drinks.jackdaniels,
      name: 'Wisky Jack',
      description: 'Jack Daniels, gelo, laranja',
      value: 'R$20,00',
    },
  ],
};

export default listMenu;
