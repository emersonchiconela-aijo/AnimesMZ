// Injeta a navbar em todas as páginas automaticamente
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Animes<span>MZ</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}" href="index.html">Notícias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'mangas.html' ? 'active' : ''}" href="mangas.html">Mangás</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'manhwa.html' ? 'active' : ''}" href="manhwa.html">Manhwas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'webtoon.html' ? 'active' : ''}" href="webtoon.html">Webtoon</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Géneros</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="shounen.html">⚔️ Shounen</a></li>
              <li><a class="dropdown-item" href="romance.html">💕 Romance</a></li>
              <li><a class="dropdown-item" href="esporte.html">🏆 Esporte</a></li>
              <li><a class="dropdown-item" href="ecchi.html">✨ Ecchi</a></li>
              <li><a class="dropdown-item" href="isekai.html">🌀 Isekai</a></li>
              <li><a class="dropdown-item" href="aventura.html">🗺️ Aventura</a></li>
              <li><a class="dropdown-item" href="life.html">🌸 Slice of Life</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="sobre.html">Sobre Mim</a></li>
              <li><a class="dropdown-item" href="contacto.html">Contacto</a></li>
            </ul>
          </li>
        </ul>
        <div class="search-wrap">
          <input type="search" placeholder="Pesquisar anime..." aria-label="Pesquisar" id="searchInput"/>
          <button class="btn-search" onclick="handleSearch()">Buscar</button>
        </div>
      </div>
    </div>
  </nav>`;

  const header = document.querySelector('header');
  if (header) header.innerHTML = navHTML;

  window.handleSearch = function () {
    const q = document.getElementById('searchInput').value.trim();
    if (q) alert('Pesquisar por: ' + q + '\n(Funcionalidade em breve!)');
  };
})();

/* =========================================================
   DADOS DOS ANIMES
   ========================================================= */

const animes = [

    {
        id: 1,
        titulo: "One Piece",
        tituloAlternativo: "ONE PIECE",
        genero: ["Acção", "Aventura", "Comédia", "Fantasia"],
        ano: 1999,
        estado: "Em exibição",
        estudio: "Toei Animation",
        autor: "Eiichiro Oda",
        nota: 9.0,
        episodios: "1000+",
        descricao:
            "One Piece acompanha Monkey D. Luffy e a sua tripulação numa grande aventura pelos mares. Luffy pretende tornar-se o Rei dos Piratas e encontrar o lendário tesouro conhecido como One Piece.",
        pagina: "anime/one-piece.html"
    },

    {
        id: 2,
        titulo: "Attack on Titan",
        tituloAlternativo: "Shingeki no Kyojin",
        genero: ["Acção", "Drama", "Fantasia", "Mistério"],
        ano: 2013,
        estado: "Finalizado",
        estudio: "MAPPA",
        autor: "Hajime Isayama",
        nota: 9.1,
        episodios: 89,
        descricao:
            "A humanidade vive protegida por enormes muralhas contra criaturas gigantes chamadas Titãs. Eren Yeager decide lutar depois de testemunhar uma terrível tragédia.",
        pagina: "anime/attack-on-titan.html"
    },

    {
        id: 3,
        titulo: "Demon Slayer",
        tituloAlternativo: "Kimetsu no Yaiba",
        genero: ["Acção", "Aventura", "Fantasia", "Shounen"],
        ano: 2019,
        estado: "Em andamento",
        estudio: "ufotable",
        autor: "Koyoharu Gotouge",
        nota: 8.8,
        episodios: 63,
        descricao:
            "Tanjiro Kamado inicia uma jornada para encontrar uma forma de transformar novamente a sua irmã Nezuko, depois de a sua família ser atacada por demónios.",
        pagina: "anime/demon-slayer.html"
    },

    {
        id: 4,
        titulo: "Jujutsu Kaisen",
        tituloAlternativo: "Jujutsu Kaisen",
        genero: ["Acção", "Fantasia", "Sobrenatural", "Shounen"],
        ano: 2020,
        estado: "Em andamento",
        estudio: "MAPPA",
        autor: "Gege Akutami",
        nota: 8.7,
        episodios: 47,
        descricao:
            "Yuji Itadori entra no mundo dos feiticeiros depois de ingerir um objecto amaldiçoado extremamente perigoso.",
        pagina: "anime/jujutsu-kaisen.html"
    },

    {
        id: 5,
        titulo: "Re:ZERO",
        tituloAlternativo: "Re:Zero kara Hajimeru Isekai Seikatsu",
        genero: ["Isekai", "Aventura", "Fantasia", "Drama"],
        ano: 2016,
        estado: "Em andamento",
        estudio: "White Fox",
        autor: "Tappei Nagatsuki",
        nota: 8.8,
        episodios: 66,
        descricao:
            "Subaru Natsuki é transportado para outro mundo e descobre que possui uma habilidade misteriosa que lhe permite regressar a um determinado momento depois de morrer.",
        pagina: "anime/rezero.html"
    },

    {
        id: 6,
        titulo: "Mushoku Tensei",
        tituloAlternativo: "Mushoku Tensei: Jobless Reincarnation",
        genero: ["Isekai", "Fantasia", "Aventura", "Drama"],
        ano: 2021,
        estado: "Em andamento",
        estudio: "Studio Bind",
        autor: "Rifujin na Magonote",
        nota: 8.5,
        episodios: 48,
        descricao:
            "Um homem que morreu no seu antigo mundo renasce como Rudeus Greyrat num mundo de magia, mantendo as suas memórias da vida anterior.",
        pagina: "anime/mushoku-tensei.html"
    },

    {
        id: 7,
        titulo: "Arifureta",
        tituloAlternativo: "Arifureta Shokugyou de Sekai Saikyou",
        genero: ["Isekai", "Acção", "Aventura", "Fantasia"],
        ano: 2019,
        estado: "Em andamento",
        estudio: "Asread",
        autor: "Ryo Shirakome",
        nota: 7.4,
        episodios: 42,
        descricao:
            "Hajime Nagumo é transportado para outro mundo juntamente com os seus colegas de turma. Depois de ser traído e cair numa masmorra, começa uma luta para sobreviver e tornar-se cada vez mais poderoso.",
        pagina: "anime/arifureta.html"
    },

    {
        id: 8,
        titulo: "That Time I Got Reincarnated as a Slime",
        tituloAlternativo: "Tensei Shitara Slime Datta Ken",
        genero: ["Isekai", "Fantasia", "Aventura", "Comédia"],
        ano: 2018,
        estado: "Em andamento",
        estudio: "8-Bit",
        autor: "Fuse",
        nota: 8.1,
        episodios: 72,
        descricao:
            "Satoru Mikami reencarna num mundo de fantasia como um slime chamado Rimuru Tempest e começa a construir uma nova sociedade.",
        pagina: "anime/slime.html"
    },

    {
        id: 9,
        titulo: "Sword Art Online",
        tituloAlternativo: "SAO",
        genero: ["Acção", "Aventura", "Romance", "Isekai"],
        ano: 2012,
        estado: "Em andamento",
        estudio: "A-1 Pictures",
        autor: "Reki Kawahara",
        nota: 7.5,
        episodios: 96,
        descricao:
            "Milhares de jogadores ficam presos num jogo de realidade virtual onde morrer dentro do jogo significa morrer na vida real.",
        pagina: "anime/sword-art-online.html"
    },

    {
        id: 10,
        titulo: "High School DxD",
        tituloAlternativo: "High School DxD",
        genero: ["Ecchi", "Acção", "Romance", "Fantasia"],
        ano: 2012,
        estado: "Em andamento",
        estudio: "TNK / Passione",
        autor: "Ichiei Ishibumi",
        nota: 7.5,
        episodios: 48,
        descricao:
            "Issei Hyoudou é um estudante que sonha tornar-se um grande membro do submundo sobrenatural depois de descobrir que demónios, anjos e outras criaturas existem.",
        pagina: "anime/high-school-dxd.html"
    },

    {
        id: 11,
        titulo: "Kaguya-sama: Love Is War",
        tituloAlternativo: "Kaguya-sama wa Kokurasetai",
        genero: ["Romance", "Comédia", "Escolar", "Slice of Life"],
        ano: 2019,
        estado: "Finalizado",
        estudio: "A-1 Pictures",
        autor: "Aka Akasaka",
        nota: 8.4,
        episodios: 37,
        descricao:
            "Kaguya e Miyuki gostam um do outro, mas nenhum dos dois quer ser o primeiro a confessar os seus sentimentos.",
        pagina: "anime/kaguya-sama.html"
    },

    {
        id: 12,
        titulo: "The Quintessential Quintuplets",
        tituloAlternativo: "5-toubun no Hanayome",
        genero: ["Romance", "Comédia", "Harem", "Escolar"],
        ano: 2019,
        estado: "Finalizado",
        estudio: "Bibury Animation Studios",
        autor: "Negi Haruba",
        nota: 8.0,
        episodios: 24,
        descricao:
            "Futaro Uesugi torna-se tutor de cinco irmãs gémeas que possuem personalidades muito diferentes.",
        pagina: "anime/quintessential-quintuplets.html"
    },

    {
        id: 13,
        titulo: "Blue Lock",
        tituloAlternativo: "Blue Lock",
        genero: ["Desporto", "Futebol", "Acção", "Shounen"],
        ano: 2022,
        estado: "Em andamento",
        estudio: "8-Bit",
        autor: "Muneyuki Kaneshiro",
        nota: 8.2,
        episodios: 38,
        descricao:
            "Centenas de jovens jogadores de futebol entram num projecto extremamente competitivo criado para encontrar o melhor avançado do Japão.",
        pagina: "anime/blue-lock.html"
    },

    {
        id: 14,
        titulo: "Haikyuu!!",
        tituloAlternativo: "Haikyuu!!",
        genero: ["Desporto", "Voleibol", "Comédia", "Escolar"],
        ano: 2014,
        estado: "Finalizado",
        estudio: "Production I.G",
        autor: "Haruichi Furudate",
        nota: 8.7,
        episodios: 85,
        descricao:
            "Shoyo Hinata sonha tornar-se um grande jogador de voleibol apesar da sua baixa estatura.",
        pagina: "anime/haikyuu.html"
    },

    {
        id: 15,
        titulo: "Dandadan",
        tituloAlternativo: "Dandadan",
        genero: ["Acção", "Romance", "Comédia", "Sobrenatural"],
        ano: 2024,
        estado: "Em andamento",
        estudio: "Science SARU",
        autor: "Yukinobu Tatsu",
        nota: 8.5,
        episodios: 24,
        descricao:
            "Momo e Okarun discutem sobre a existência de fantasmas e extraterrestres. Depois de uma aposta, ambos acabam envolvidos em acontecimentos sobrenaturais.",
        pagina: "anime/dandadan.html"
    }

];