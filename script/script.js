const inputCep = document.querySelector('.cep')
const btnCep = document.querySelector('[data-btn-cep]')
const resultadoCep = document.querySelector('.resultadoCep')
btnCep.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  const cep = inputCep.value
  if(cep === '' || cep === 0) {
    Swal.fire({
        icon: 'error',
        iconColor: '#ff0000',
        showCloseButton: true,
        showConfirmButton: false,
        title: 'Digite algum CEP no campo',
      })
  }else if(cep.length !== 8){
    Swal.fire({
        icon: 'error',
        iconColor: '#ff0000',
        showCloseButton: true,
        showConfirmButton: false,
        title: 'Cep inválido',
      })
  }
  else{
    buscaCep(cep)
    console.log(cep)
  }
}
function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then((cep => {
        if(cep.erro){
            resultadoCep.innerHTML = "<p>Não foi possível localizar seu cep!</p>"
        }else{
            resultadoCep.innerHTML = ` 
                <p>Cep : ${cep.cep}</p>
                <p>Rua : ${cep.logradouro}</p>
                <p>Complemento : ${cep.complemento}</p>
                <p>Cidade : ${cep.localidade}</p>
                <p>Estado : ${cep.uf}</p>`
        }
    }))
}