const confirm = document
  .querySelector(".confirm")
  .addEventListener("click", (e) => {
    if (window.confirm("Você realmente deseja excluir?"))
      window.location.href =
        "/cadastro-geral/editar/excluir/<%= dizimista.dizimista_id %>";
    else alert("Exclusão cancelada");
  });
