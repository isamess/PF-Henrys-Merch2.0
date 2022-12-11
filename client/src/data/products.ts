const products = [
    {
        id: 1,
        nombre: "Franela",
        precio: 5.38,
        descripcion: "Tela algodon",
        imagen: "remeraAmarilla-DataScience.png",
        category: "home",
    },
    {
        id: 2,
        nombre: "Taza",
        precio: 0.96,
        descripcion: "porcelana",
        imagen: "remeraAmarilla-DataScience.png",
        category: "home",
    },
    {
        id: 3,
        nombre: "Agenda",
        precio: 5.34,
        descripcion: "Agenda de hojas cocidas",
        imagen: "remeraAmarilla-DataScience.png",
        category: "top",
    },
    {
        id: 4,
        nombre: "Termo",
        precio: 4.85,
        descripcion: "Acero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "top",
    },
    {
        id: 5,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 6,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 7,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 8,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 9,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 10,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 11,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
    {
        id: 12,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "remeraAmarilla-DataScience.png",
        category: "bottom",
    },
];

const getPublicPath = (image: string) => {
    return `uploads/${image}`;
}

export { products, getPublicPath };