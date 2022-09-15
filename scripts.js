let dados = [
  {
    id: 1,
    name: "Bertie Yates",
    email: "Sincere@april.biz",
    image: "https://2.bp.blogspot.com/-aOdoXLFBC9k/V6Jk91TXjiI/AAAAAAAAMBw/mo4VigJxeTIKQdvEK_WD_QHqz4SF55IJgCLcB/s1600/Randall.png",
  },
  {
    id: 2,
    name: "Hester Hogan",
    email: "Shanna@melissa.tv",
    image: "https://th.bing.com/th/id/OIP.7zvhWTwK3LlmxfQ7baBRFgHaHw?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    name: "Larry Little",
    email: "Nathan@yesenia.net",
    image: "https://th.bing.com/th/id/OIP.WuycgtgqAqPFNctVDFpp9wHaFj?pid=ImgDet&rs=1",
  },
  {
    id: 4,
    name: "Sean Walsh",
    email: "Julianne.OConner@kory.org",
    image: "https://th.bing.com/th/id/OIP.MD-Nh8Gm7rPsuMbX_va30QAAAA?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    name: "Lola Gardner",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://i.pinimg.com/originals/1e/fa/b1/1efab120528c9774fd7384b0910c400d.jpg",
  },
];

const elementoH1 = document.querySelector("h1");

for (let objeto of dados) {
  const elemtArticle = document.createElement("article");
  ///console.log(objeto.email) /// objeto.email/objeto.nome etc,pode ser usado para especificar uma imagem,nome,todos acima presentes no codigo.
elemtArticle.classList.add("monstros");

elemtArticle.innerHTML = `
<img src="${objeto.image}" alt="${objeto.name}" />
  <div>
    <h2>${objeto.name}</h2>
    <p>${objeto.email}</p>
  </div>
`;

elementoH1.insertAdjacentElement("afterend", elemtArticle);
}

const btn = document.querySelector(".btn-azul");

btn.addEventListener("click", () => { 
  let articles = document.querySelectorAll("article");
  for (let i = 2; i < articles.length; i++) { //let i = 0 para anular os monstros
    articles[i].remove();
    dados.pop(); //remove apenas para aplicar mais de um 
  }
  //dados = []; aplica se o let i = 0 para anular os monstros
  elementoH1.innerText = `${dados.length} monstros`;
});

// limpar monstros = resultado ao clicar no botão fica "0"

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  return response.json();
})
.then((json) => {
  console.log(json);
});

for (let objeto of dados) {
  const elemtArticle = document.createElement("article");
  elemtArticle.classList.add("monstros");

  elemtArticle.innerHTML = `
  <img src="${objeto.image}" alt="${objeto.name}" />
    <div>
      <h2>${objeto.name}</h2>
      <p>${objeto.email}</p>
    </div>
  `;

  elementoH1.insertAdjacentElement("afterend", elemtArticle);
}

btn.addEventListener("click", () => {
  let articles = document.querySelectorAll("article");
  for (let i = 0; i < articles.length; i++) {
    articles[i].remove();
  }
  dados = [];
  elementoH1.innerText = `${dados.length} monstros`;
});
