// ----------------------------
// PRODUTOS PADRÃO
// ----------------------------
let produtos = [
  "Abobrinha Itália","Abóbora Cabotia Fatiada","Abóbora Cabotia Processada","Abóbora Doce Fatiada",
  "Abóbora Madura Picada","Abóbora Paulista Picada","Alho Poró","Batata Pirulito","Berinjela","Beterraba",
  "Beterraba Ralada","Brócolis/Couve Flor Picado","Cebola Bandeja","Cebola Kg","Cebola Roxa Bandeja",
  "Chuchu","Cenoura Processada","Cenoura Ralada","Cenoura em Cubos","Cenoura/Chuchu Processados",
  "Couve-flor","Couve Picada","Ervilha Torta","Feijão Fava","Jiló","Limão Cravo","Milho Verde",
  "Mandioquinha Salsa Bandeja","Mandioquinha Salsa Processada","Mandioquinha a vácuo","Pepino","Pepino Japonês",
  "Pimenta Americana","Pimenta Bico Doce","Pimenta Cambuci","Pimenta Dedo de Moça","Pimentão Colorido",
  "Pimentão Verde","Quiabo","Rabanete","Tomate 400g","Tomate 800g","Tomate Grape","Tomate Cereja","Vagem",
  "Vagem Picada","Repolho Verde Picado","Repolho Roxo Picado","Repolho Verde/Roxo Picado","Salada Mista",
  "Salada Primavera","Salada Tropical","Salsa","Seleta de Legumes","Morango","Morango Fondue","Morango Congelado",
  "Cheiro Verde Picado","Couve Flor","Couve Flor Picada"
];

// Remove duplicatas e ordena
produtos = [...new Set(produtos)].sort((a,b)=>a.localeCompare(b,'pt-BR'));


// ----------------------------
// ESTADO (carregado do localStorage)
// ----------------------------
let estado = JSON.parse(localStorage.getItem("estoque_estado")) || {};
let listaSalva = JSON.parse(localStorage.getItem("produtos_lista")) || produtos;

produtos = listaSalva;

produtos.forEach(p=>{
    if(!estado[p]) estado[p] = { estoque:0, troca:0 };
});


// ----------------------------
// Funções
// ----------------------------
function salvarLocal(){
    localStorage.setItem("estoque_estado", JSON.stringify(estado));
    localStorage.setItem("produtos_lista", JSON.stringify(produtos));
}

function criarLinha(nome){
    const div = document.createElement("div");
    // Usamos a classe 'linha-com-acao' que configuramos antes
    div.className = "linha linha-com-acao"; 
    div.dataset.nome = nome;

    const nomeDiv = document.createElement("div");
    nomeDiv.textContent = nome;

    const inp1 = document.createElement("input");
    inp1.type = "number";
    inp1.min = "0";
    inp1.inputMode = "numeric";
    inp1.value = estado[nome].estoque || 0;
    inp1.oninput = ()=>{ estado[nome].estoque = Number(inp1.value); salvarLocal(); }

    const inp2 = document.createElement("input");
    inp2.type = "number";
    inp2.min = "0";
    inp2.inputMode = "numeric";
    inp2.value = estado[nome].troca || 0;
    inp2.oninput = ()=>{ estado[nome].troca = Number(inp2.value); salvarLocal(); }

    // NOVO: Botão de Exclusão (X Vermelho)
    const btnExcluir = document.createElement("button");
    btnExcluir.innerHTML = '&times;'; // Caractere 'X' (times)
    btnExcluir.className = 'btn-excluir'; // Nova classe para estilizar
    
    // MENSAGEM DE CONFIRMAÇÃO
    btnExcluir.onclick = () => {
        // Exibe a caixa de confirmação
        const confirmar = confirm(`Tem certeza que deseja remover o produto "${nome}"? Esta ação não pode ser desfeita.`);
        
        if(confirmar){
            removerProduto(nome);
        }
    };

    div.appendChild(nomeDiv);
    div.appendChild(inp1);
    div.appendChild(inp2);
    div.appendChild(btnExcluir); // Adiciona o botão
    return div;
}

// ** Mantenha a função 'removerProduto' inalterada! **
// Você já tem esta função, que está correta:
// function removerProduto(nomeProduto){...}


function renderizar(filtro=""){
    const area = document.getElementById("listaProdutos");
    area.innerHTML = "";

    const termo = filtro.toLowerCase();
    const filtrados = produtos.filter(p=> p.toLowerCase().includes(termo));

    filtrados.forEach(p=>{
        area.appendChild(criarLinha(p));
    });

    document.getElementById("btnAdicionarRapido").hidden = filtrados.length > 0;
}


// ----------------------------
// Adicionar novo produto
// ----------------------------
document.getElementById("btnAdicionarRapido").onclick = ()=>{
    const nome = document.getElementById("buscar").value.trim();
    if(!nome) return alert("Digite um nome.");

    if(produtos.map(p=>p.toLowerCase()).includes(nome.toLowerCase()))
        return alert("Produto já existe.");

    produtos.push(nome);
    produtos.sort((a,b)=>a.localeCompare(b,'pt-BR'));
    estado[nome] = { estoque:0, troca:0 };
    salvarLocal();
    renderizar("");
    document.getElementById("buscar").value = "";
};


// ----------------------------
// Limpar valores
// ----------------------------
document.getElementById("btnLimpar").onclick = ()=>{
    for(const p in estado){
        estado[p].estoque = 0;
        estado[p].troca = 0;
    }
    salvarLocal();
    renderizar(document.getElementById("buscar").value);
};


// ----------------------------
// PDF
// ----------------------------
// ----------------------------
// PDF CORRIGIDO (VERSÃO FINAL BLINDADA)
// ----------------------------
document.getElementById("btnSalvarPDF").onclick = () => {

    const data = document.getElementById("dataTroca").value;
    if (!data) return alert("Selecione a data.");

    // Avisa o usuário que o processo começou
    const btn = document.getElementById("btnSalvarPDF");
    const textoOriginal = btn.innerText;
    btn.innerText = "Gerando PDF...";
    btn.disabled = true;

    // 1. SELECIONAR ELEMENTOS DO SITE PARA ESCONDER
    const containerPrincipal = document.querySelector('.container');
    const rodape = document.querySelector('footer');

    // 2. CRIAR A ÁREA DE IMPRESSÃO
    const impressao = document.createElement("div");
    impressao.style.width = "100%";
    impressao.style.backgroundColor = "white"; // Garante fundo branco
    impressao.style.padding = "20px";
    impressao.style.color = "black"; // Garante texto preto
    impressao.style.fontFamily = "Arial, sans-serif";

    // Conteúdo do PDF
    impressao.innerHTML = `<h2 style="text-align:center; margin-bottom:20px;">Troca & Estoque — Borificação (${data})</h2>`;

    let tabelaHTML = `
        <table style="width:100%; border-collapse: collapse; font-size: 12px; color:black;">
            <thead>
                <tr style="background-color: #eee;">
                    <th style="border:1px solid #000; padding:8px; text-align:left;">Produto</th>
                    <th style="border:1px solid #000; padding:8px; text-align:center; width: 80px;">Estoque</th>
                    <th style="border:1px solid #000; padding:8px; text-align:center; width: 80px;">Troca</th>
                </tr>
            </thead>
            <tbody>
    `;

    let contagem = 0;
    produtos.forEach(p => {
        const est = estado[p].estoque || 0;
        const trc = estado[p].troca || 0;

        // SE QUISER FILTRAR ZERADOS, TIRE O COMENTÁRIO DA LINHA ABAIXO:
        // if (est === 0 && trc === 0) return;

        tabelaHTML += `
            <tr>
                <td style="border:1px solid #999; padding:6px;">${p}</td>
                <td style="border:1px solid #999; padding:6px; text-align:center;">${est}</td>
                <td style="border:1px solid #999; padding:6px; text-align:center;">${trc}</td>
            </tr>
        `;
        contagem++;
    });

    tabelaHTML += `</tbody></table>`;
    tabelaHTML += `<p style="margin-top:10px; font-size:10px;">Itens listados: ${contagem}</p>`;
    impressao.innerHTML += tabelaHTML;

    // 3. TROCA VISUAL (Esconde site, mostra relatório)
    containerPrincipal.style.display = "none";
    rodape.style.display = "none";
    document.body.appendChild(impressao);

    // 4. ESPERA E GERA (Delay de 500ms para garantir que o navegador desenhou)
    setTimeout(() => {
        const opt = {
            margin: 10,
            filename: `Troca_Estoque_${data.replace(/\//g, '-')}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, scrollY: 0, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(impressao).save()
            .then(() => {
                // SUCESSO: Restaura o site
                impressao.remove();
                containerPrincipal.style.display = "block"; // Volta a aparecer (assumindo que era block)
                rodape.style.display = "block";
                
                // Restaura botão
                btn.innerText = textoOriginal;
                btn.disabled = false;
            })
            .catch(err => {
                alert("Erro ao gerar PDF");
                console.error(err);
                // Restaura mesmo com erro
                impressao.remove();
                containerPrincipal.style.display = "block";
                rodape.style.display = "block";
                btn.innerText = textoOriginal;
                btn.disabled = false;
            });
    }, 500); // 500 milissegundos de espera
};

// ----------------------------
// INICIAR APP
// ----------------------------
document.getElementById("buscar").oninput = e => renderizar(e.target.value);

flatpickr("#dataTroca", {
    dateFormat: "d/m/Y",
    locale: "pt",
    theme: "material_green"
});

renderizar("");


// ----------------------------
// REMOVER PRODUTO
// ----------------------------
function removerProduto(nomeProduto){
    // 1. Remove do array de nomes
    produtos = produtos.filter(p => p !== nomeProduto);

    // 2. Remove do objeto de estado
    delete estado[nomeProduto];

    // 3. Salva no localStorage
    salvarLocal();

    // 4. Renderiza a lista novamente para atualizar a interface
    const filtroAtual = document.getElementById("buscar").value;
    renderizar(filtroAtual);
}