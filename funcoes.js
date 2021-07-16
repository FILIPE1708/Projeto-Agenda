var contatos = [];

function addContato() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var whatsApp = document.getElementById('whatsApp').value;
  var instagram = document.getElementById('instagram').value;

  var contato = {nome, email, whatsApp, instagram};

  if(contato.nome.length === 0 ){
	alert('Digite o seu nome o campo está vazio.');
	return;
  }

  else if(contato.email.length === 0 ){
	alert('Digite o seu email o campo está vazio.');
	return;
  }

  else if(contato.whatsApp.length < 14){
	alert('Digite o whatsApp de acordo com o padrão (00)90000-0000, por favor digitar o 9 após o DDD.');
	return;
  }

  else if(contato.instagram.length === 0 ){
	alert('Digite o seu instagram o campo está vazio.');
	return;
  }

  nome = document.getElementById('nome');
  email = document.getElementById('email');
  whatsApp = document.getElementById('whatsApp');
  instagram = document.getElementById('instagram');

  nome.value = '';
  email.value = '';
  whatsApp.value = '';
  instagram.value = '';

  contatos.push(contato);
  console.log(contatos);
  listar();
}

function listar(){
	var listaContatos = document.getElementById('listar');
        listaContatos.innerHTML = [];

	for(contato of contatos){
		var idContato = contatos.indexOf(contato);

		var nomeContato = document.createElement('p');
		nomeContato.appendChild(document.createTextNode('Nome: ' + contato.nome));

		var emailContato = document.createElement('p');
		emailContato.appendChild(document.createTextNode('Email: ' + contato.email));

                var whatsAppContato = document.createElement('p');
		whatsAppContato.appendChild(document.createTextNode('WhatsApp: ' + contato.whatsApp));

                var instagramContato = document.createElement('p');
		instagramContato.appendChild(document.createTextNode('Instagram: ' + contato.instagram));

		var editar = document.createElement('a');
		editar.setAttribute('href', '#');
		var editarTexto = document.createTextNode('Editar');
		editar.appendChild(editarTexto);
		editar.setAttribute('onclick', 'editarContato(' + idContato + ')');

		var excluir = document.createElement('a');
		excluir.setAttribute('href', '#');
		var excluirTexto = document.createTextNode('Excluir');
		excluir.appendChild(excluirTexto);
		excluir.setAttribute('onclick', 'excluirContato(' + idContato + ')');

		var itens = document.createElement('li');
		itens.appendChild(nomeContato);
                itens.appendChild(emailContato);
		itens.appendChild(whatsAppContato);
                itens.appendChild(instagramContato);
		itens.appendChild(editar);
		itens.appendChild(excluir);

		listaContatos.appendChild(itens);
	}
}

function excluirContato(idContato){
    var confirmacaoExcl = confirm("Você deseja excluir esse contato?");

	if(confirmacaoExcl == true){
        contatos.splice(idContato, 1);
        listar();
    }
}

function editarContato(idContato){
	var confirmacaoEdit = confirm("Você deseja editar esse contato?");

	if(confirmacaoEdit == true){
		var bot_Cadastrar = document.getElementById('cadastrar');
		var bot_Editar = document.getElementById('editar');
		var input_nome = document.getElementById('nome');
		var input_email = document.getElementById('email');
		var input_whatsApp = document.getElementById('whatsApp');
		var input_instagram = document.getElementById('instagram');

		bot_Cadastrar.setAttribute('style', 'display:none');
		bot_Editar.setAttribute('style', 'display:');

		input_nome.value = contatos[idContato].nome;
		input_email.value = contatos[idContato].email;
		input_whatsApp.value = contatos[idContato].whatsApp;
		input_instagram.value = contatos[idContato].instagram;

		bot_Editar.onclick = function(){
			var contatoEditado = {
				nome: input_nome.value,
				email: input_email.value,
				whatsApp: input_whatsApp.value,
				instagram: input_instagram.value,
			};

			if(contatoEditado.nome.length === 0 ){
				alert('Digite o seu nome o campo está vazio.');
				return;
			}
			
			else if(contatoEditado.email.length === 0 ){
				alert('Digite o seu email o campo está vazio.');
				return;
			}
			
			else if(contatoEditado.whatsApp.length < 14 ){
				alert('Digite o whatsApp de acordo com o padrão (00)90000-0000, por favor digitar o 9 após o DDD.');
				return;
			}
			
		    else if(contatoEditado.instagram.length === 0 ){
				alert('Digite o seu instagram o campo está vazio.');
				return;
			}

			input_nome.value = '';
			input_email.value = '';
			input_whatsApp.value = '';
			input_instagram.value = '';

			bot_Cadastrar.setAttribute('style', 'display:');
			bot_Editar.setAttribute('style', 'display:none');

			contatos[idContato] = contatoEditado;
			listar();
		};
	}
}
