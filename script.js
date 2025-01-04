// Lista de imagens (adicione os nomes dos arquivos da pasta "img")


const imagens = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
  "img/foto7.jpg",
  "img/foto8.jpg",
  "img/foto9.jpg",
  "img/foto10.jpg",
  "img/foto11.jpg",
  "img/foto12.jpg",
  "img/foto13.jpg",
  "img/foto14.jpg",
  "img/foto15.jpg",
  "img/foto16.jpg",
  "img/foto17.jpg",
  "img/foto18.jpg",
  "img/foto19.jpg",
  "img/foto20.jpg",
  "img/foto21.jpg",
  "img/foto22.jpg",
  "img/foto23.jpg",
  "img/foto24.jpg",
  "img/foto25.jpg",
  "img/foto26.jpg",
  "img/foto27.jpg",
  "img/foto28.jpg",
  "img/foto29.jpg",
  "img/foto30.jpg",
  "img/foto31.jpg",
  "img/foto32.jpg",
  "img/foto33.jpg",
  "img/foto34.jpg",
  "img/foto35.jpg",
  "img/foto36.jpg",
  "img/foto37.jpg",
  "img/foto38.jpg",
  "img/foto39.jpg",
  "img/foto40.jpg",
  "img/foto41.jpg",
  "img/foto42.jpg",
  "img/foto43.jpg",
  "img/foto44.jpg",
  "img/foto45.jpg",
  "img/foto46.jpg",
  "img/foto47.jpg",
  "img/foto48.jpg",
  "img/foto49.jpg",
  "img/foto50.jpg",
  "img/foto51.jpg",
  "img/foto52.jpg",
  "img/foto53.jpg",
  "img/foto54.jpg",
  "img/foto55.jpg",
  "img/foto56.jpg",
  "img/foto57.jpg",
  "img/foto58.jpg",
  "img/foto59.jpg",
  "img/foto60.jpg",
  "img/foto61.jpg",
  "img/foto62.jpg",
  "img/foto63.jpg",
  "img/foto64.jpg",
        "img/foto65.jpg",
        "img/foto66.jpg",
        "img/foto67.jpg",
];
// Função para carregar as imagens dinamicamente
function carregarGaleria() {
  const galeriaDiv = document.getElementById("galeria");

  imagens.forEach((imagem) => {
      const imgElement = document.createElement("img");
      imgElement.src = imagem;
      imgElement.alt = "Foto do Terço dos Homens";
      galeriaDiv.appendChild(imgElement);
  });
}

// Carregar as imagens ao carregar a página
document.addEventListener("DOMContentLoaded", carregarGaleria);

