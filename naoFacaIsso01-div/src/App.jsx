import React, { useState } from "react";

const FilmeCrud = () => {
  const [filmes, setFilmes] = useState([]);
  const [novoFilme, setNovoFilme] = useState({ nome: "", genero: "" });
  const [editandoFilme, setEditandoFilme] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  const handleInputChange = (e, campo) => {
    setNovoFilme({ ...novoFilme, [campo]: e.target.innerText });
  };

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.innerText.toLowerCase());
  };

  const adicionarFilme = () => {
    if (novoFilme.nome && novoFilme.genero) {
      setFilmes([...filmes, novoFilme]);
      setNovoFilme({ nome: "", genero: "" });
    }
  };

  const editarFilme = (index) => {
    setEditandoFilme(index);
    setNovoFilme(filmes[index]);
  };

  const atualizarFilme = () => {
    const filmesAtualizados = filmes.map((filme, index) =>
      index === editandoFilme ? novoFilme : filme
    );
    setFilmes(filmesAtualizados);
    setEditandoFilme(null);
    setNovoFilme({ nome: "", genero: "" });
  };

  const removerFilme = (index) => {
    setFilmes(filmes.filter((_, i) => i !== index));
  };

  // Filtra os filmes com base na pesquisa
  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(pesquisa)
  );

  return (
    <div>
      <div>Bem vindos ao CRUD não semântico, feito apenas pro esporte e zoeira. Crianças, não repitam isso em casa.</div>
      <div>Cadastro de Filmes</div>
      <div>Nome:</div>
      <div
        contentEditable
        suppressContentEditableWarning
        style={{ border: "1px solid black", padding: "5px", marginBottom: "5px" }}
        onInput={(e) => handleInputChange(e, "nome")}
      ></div>
      <div>Gênero:</div>
      <div
        contentEditable
        suppressContentEditableWarning
        style={{ border: "1px solid black", padding: "5px", marginBottom: "5px" }}
        onInput={(e) => handleInputChange(e, "genero")}
      ></div>

      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={editandoFilme === null ? adicionarFilme : atualizarFilme}
      >
        {editandoFilme === null ? "Adicionar Filme" : "Atualizar Filme"}
      </div>

      <div>
        <div>Pesquisar Filmes:</div>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ border: "1px solid black", padding: "5px", marginBottom: "10px" }}
          onInput={handlePesquisaChange}
        ></div>
      </div>

      <div>
        <div>Lista de Filmes</div>
        {filmesFiltrados.length > 0 ? (
          filmesFiltrados.map((filme, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                marginBottom: "5px",
                padding: "5px",
              }}
            >
              <div>Nome: {filme.nome}</div>
              <div>Gênero: {filme.genero}</div>
              <div
                style={{
                  backgroundColor: "lightblue",
                  padding: "5px",
                  cursor: "pointer",
                  marginTop: "5px",
                }}
                onClick={() => editarFilme(index)}
              >
                Editar
              </div>
              <div
                style={{
                  backgroundColor: "lightcoral",
                  padding: "5px",
                  cursor: "pointer",
                  marginTop: "5px",
                }}
                onClick={() => removerFilme(index)}
              >
                Remover
              </div>
            </div>
          ))
        ) : (
          <div>Nenhum filme encontrado.</div>
        )}
      </div>
    </div>
  );
};

export default FilmeCrud;



// import React, { useState } from "react";

// const FilmeCrud = () => {
//   const [filmes, setFilmes] = useState([]);
//   const [novoFilme, setNovoFilme] = useState({ nome: "", genero: "" });
//   const [editandoFilme, setEditandoFilme] = useState(null);

//   const handleInputChange = (e, campo) => {
//     setNovoFilme({ ...novoFilme, [campo]: e.target.innerText });
//   };

//   const adicionarFilme = () => {
//     if (novoFilme.nome && novoFilme.genero) {
//       setFilmes([...filmes, novoFilme]);
//       setNovoFilme({ nome: "", genero: "" });
//     }
//   };

//   const editarFilme = (index) => {
//     setEditandoFilme(index);
//     setNovoFilme(filmes[index]);
//   };

//   const atualizarFilme = () => {
//     const filmesAtualizados = filmes.map((filme, index) =>
//       index === editandoFilme ? novoFilme : filme
//     );
//     setFilmes(filmesAtualizados);
//     setEditandoFilme(null);
//     setNovoFilme({ nome: "", genero: "" });
//   };

//   const removerFilme = (index) => {
//     setFilmes(filmes.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <div>Bem vindos ao CRUD não semântico, feito apenas pro esporte e zoeira. Crianças, não repitam isso em casa.</div>
//       <div>Cadastro de Filmes</div>
//       <div>Nome:</div>
//       <div
//         contentEditable
//         suppressContentEditableWarning
//         style={{ border: "1px solid black", padding: "5px", marginBottom: "5px" }}
//         onInput={(e) => handleInputChange(e, "nome")}
//       >
//         {/* {novoFilme.nome || "Digite o nome do filme"} */}
//       </div>
//       <div>Gênero:</div>
//       <div
//         contentEditable
//         suppressContentEditableWarning
//         style={{ border: "1px solid black", padding: "5px", marginBottom: "5px" }}
//         onInput={(e) => handleInputChange(e, "genero")}
//       >
//         {/* {novoFilme.genero || "Digite o gênero do filme"} */}
//       </div>

//       <div
//         style={{
//           backgroundColor: "lightgreen",
//           padding: "5px",
//           cursor: "pointer",
//           marginBottom: "10px",
//         }}
//         onClick={editandoFilme === null ? adicionarFilme : atualizarFilme}
//       >
//         {editandoFilme === null ? "Adicionar Filme" : "Atualizar Filme"}
//       </div>

//       <div>
//         <div>Lista de Filmes</div>
//         {filmes.map((filme, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid gray",
//               marginBottom: "5px",
//               padding: "5px",
//             }}
//           >
//             <div>Nome: {filme.nome}</div>
//             <div>Gênero: {filme.genero}</div>
//             <div
//               style={{
//                 backgroundColor: "lightblue",
//                 padding: "5px",
//                 cursor: "pointer",
//                 marginTop: "5px",
//               }}
//               onClick={() => editarFilme(index)}
//             >
//               Editar
//             </div>
//             <div
//               style={{
//                 backgroundColor: "lightcoral",
//                 padding: "5px",
//                 cursor: "pointer",
//                 marginTop: "5px",
//               }}
//               onClick={() => removerFilme(index)}
//             >
//               Remover
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilmeCrud;
