// ===================================================
// VARIÁVEIS GLOBAIS E CONFIGURAÇÕES
// ===================================================

let produtos = [ 
"Abóbora Cabotiá Fatiada",
  "Abóbora Cabotiá Pedaço",
  "Abóbora Cabotiá Processada",
  "Abóbora Madura Pedaço",
  "Abóbora Madura Processada",
  "Abóbora Paulista Picada",
  "Abobrinha Brasil Picada",
  "Abobrinha Fatiada",
  "Abobrinha Itália",
  "Abobrinha/Cenoura Ralada",
  "Acelga Picada",
  "Alho-Poró",
  "Amora",
  "Batata Pirulito",
  "Berinjela",
  "Beterraba",
  "Beterraba Ralada",
  "Beterraba/Cenoura Ralada",
  "Brócolis",
  "Brócolis Picado",
  "Brócolis/Couve-Flor Picado",
  "Cebola Bandeja",
  "Cebola Roxa Bandeja",
  "Cebola",
  "Cenoura em Cubos",
  "Cenoura Processada",
  "Cenoura Ralada",
  "Cenoura",
  "Cenoura/Chuchu Processados",
  "Cenoura/Repolho Verde Ralado",
  "Cenoura/Vagem Picados",
  "Cheiro-Verde Picado",
  "Chuchu",
  "Chuchu Processado",
  "Couve-Flor",
  "Couve-Flor Picada",
  "Couve Picada",
  "Ervilha Torta",
  "Feijão Fava",
  "Jiló",
  "Limão Cravo",
  "Mandioquinha a Vácuo",
  "Mandioquinha Salsa Bandeja",
  "Mandioquinha Salsa Processada",
  "Milho Verde",
  "Mini Tomate Italiano",
  "Mix de Pimentas",
  "Mix para Maionese",
  "Mix para Sopa",
  "Morango",
  "Morango Congelado",
  "Morango Fondue",
  "Mugango Picado",
  "Pepino",
  "Pepino Japonês",
  "Pimenta Americana",
  "Pimenta Bico-Doce",
  "Pimenta Cambuci",
  "Pimenta Dedo-De-Moça",
  "Pimentão Colorido",
  "Pimentão Verde",
  "Quiabo",
  "Rabanete",
  "Repolho Roxo Picado",
  "Repolho Verde Picado",
  "Repolho Verde/Roxo Picado",
  "Salada Mista",
  "Salada Primavera",
  "Salada Tropical",
  "Salsa",
  "Salsão",
  "Seleta de Legumes",
  "Tomate 400g",
  "Tomate 800g",
  "Tomate Cereja",
  "Tomate Débora 400g",
  "Tomate Débora 800g",
  "Tomate Grape",
  "Tomate Italiano 400g",
  "Tomate Italiano 800g",
  "Tomate Maduro 800g",
  "Vagem",
  "Vagem Picada",
  "Vinagrete"
]; 

// Lista de mercados solicitada
const mercados = [
    "ALVORADA 1 - P.H. — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 12 — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 15 — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 18 — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 2 - O.F. — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 4 — MAGLIONI RIBEIRO & CIA LTDA",
    "ALVORADA 5 — MAGLIONI RIBEIRO & CIA LTDA",
    "BARONESA — ABASTECEDORA JABORANDI LTDA",
    "CENTER BOX 1 — IRMAOS FONSECA LTDA",
    "CENTER BOX 2 — IRMAOS FONSECA LTDA",
    "CENTER BOX 3 — IRMAOS FONSECA LTDA",
    "CENTRAL 1 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 12 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 2 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 3 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 4 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 5 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "CENTRAL 6 — RODRIGUES & RODRIGUES SUPERMERCADOS LTDA",
    "DMA 158 (MINEIRÃO ITAJUBÁ) — DMA DISTRIBUIDORA S/A",
    "DMA 204 (MINEIRÃO P.A) — DMA DISTRIBUIDORA S/A",
    "DMA 223 (EPA) — DMA DISTRIBUIDORA S/A",
    "LEVE + 1 SUPERMERCADO — COMERCIAL LEVE MAIS LTDA",
    "MANECO 1 — SUPERMERCADO RIBEIRO & RIBEIRO LTDA",
    "MANECO 2 — SUPERMERCADO RIBEIRO & RIBEIRO LTDA",
    "PADRE NICOLAU — MERCADINHO PADRE NICOLAU LTDA",
    "SUPERMERCADO AVENIDA — ASTOLPHO GONCALVES SUPERMERCADO LTDA",
    "SUPERMERCADO BONIFACIO 1 — SUPERMERCADO BONIFACIO LTDA",
    "SUPERMERCADO BONIFACIO 2 — SUPERMERCADO BONIFACIO JARDIM OLIMPICO LTDA",
    "SUPERMERCADO BURITIS — MERCADINHO BURITIS LTDA",
    "SUPERMERCADO DOS AMIGOS LTDA — SUPERMERCADO DOS AMIGOS LTDA",
    "SUPERMERCADO MARISTELA — MARISTELA DISTRIBUIDORA LTDA",
    "SUPERMERCADO MARISTELINHA — SUPERMERCADO MARISTELA LTDA",
    "SUPERMERCADO PONTO CERTO — SUPERMERCADO VIEIRA GIANNINI LTDA",
    "SUPERMERCADOS BH - ITAJUBÁ — SUPERMERCADOS BH COMERCIO DE ALIMENTOS S/A",
    "SUPERMERCADOS BH - OURO FINO — SUPERMERCADOS BH COMERCIO DE ALIMENTOS S/A",
    "SUPERMERCADOS BH - POUSO ALEGRE SHOPPING — SUPERMERCADOS BH COMERCIO DE ALIMENTOS S/A",
    "SUPERMERCADOS BH - POUSO ALEGRE CENTRO — SUPERMERCADOS BH COMERCIO DE ALIMENTOS S/A",
    "TRES CORACOES — MERCADINHO TRES CORACOES LTDA"
];

let estado = {}; // O estado será aninhado: estado[mercado][produto] = {estoque, troca}
const CHAVE_ESTADO = "estado_por_mercado"; 
const listaProdutos = document.getElementById("listaProdutos");
const buscarInput = document.getElementById("buscar");
const btnAdicionarRapido = document.getElementById("btnAdicionarRapido");

// ===================================================
// FUNÇÕES DE CONTEXTO E SALVAMENTO
// ===================================================

function getCurrentContext() {
    const mercado = document.getElementById("selecaoMercado")?.value;
    const tipo = document.getElementById("selecaoTipo")?.value; // 'estoque' ou 'troca'
    return { mercado, tipo };
}

function salvarLocal() {
    produtos.sort(); 
    localStorage.setItem(CHAVE_ESTADO, JSON.stringify(estado));
    localStorage.setItem("produtos_lista", JSON.stringify(produtos));
}

function carregarLocal() {
    const estadoSalvo = localStorage.getItem(CHAVE_ESTADO);
    if (estadoSalvo) {
        estado = JSON.parse(estadoSalvo);
    } else {
        estado = {}; 
    }
    
    mercados.forEach(mercado => {
        if (!estado[mercado]) {
            estado[mercado] = {};
        }
        produtos.forEach(p => {
            if (!estado[mercado][p]) {
                estado[mercado][p] = { estoque: 0, troca: 0 };
            }
        });
    });

    const produtosSalvos = localStorage.getItem("produtos_lista");
    if (produtosSalvos) {
        const produtosSalvosArray = JSON.parse(produtosSalvos);
        produtos = Array.from(new Set([...produtos, ...produtosSalvosArray]));
    }
    
    produtos.sort();
}

// ===================================================
// FUNÇÕES DE RENDERIZAÇÃO E MANIPULAÇÃO DA LISTA
// ===================================================

function criarLinha(nome){
    const { mercado, tipo } = getCurrentContext();
    const produtoData = estado[mercado]?.[nome] || { estoque: 0, troca: 0 }; 

    const div = document.createElement("div");
    div.className = "linha linha-single-input"; 
    div.dataset.nome = nome;

    const nomeDiv = document.createElement("div");
    nomeDiv.textContent = nome;

    const inp = document.createElement("input");
    inp.type = "number";
    inp.min = "0";
    inp.inputMode = "numeric";
    inp.value = produtoData[tipo] || 0;
    inp.oninput = ()=>{ 
        produtoData[tipo] = Number(inp.value); 
        salvarLocal(); 
    };

    const btnExcluir = document.createElement("button");
    btnExcluir.innerHTML = '&times;'; 
    btnExcluir.className = 'btn-excluir'; 
    btnExcluir.onclick = () => {
        const confirmar = confirm(`Tem certeza que deseja remover o produto "${nome}" de TODOS os mercados? Esta ação é permanente.`);
        if(confirmar){
            removerProduto(nome);
        }
    };

    div.appendChild(nomeDiv);
    div.appendChild(inp);
    div.appendChild(btnExcluir); 
    return div;
}

function removerProduto(nomeProduto){
    produtos = produtos.filter(p => p !== nomeProduto);

    mercados.forEach(mercado => {
        if (estado[mercado] && estado[mercado][nomeProduto]) {
            delete estado[mercado][nomeProduto];
        }
    });

    salvarLocal();
    const filtroAtual = buscarInput.value;
    renderizar(filtroAtual);
}

function adicionarProdutoPelaBusca() {
    let nomeProduto = buscarInput.value.trim();
    
    if (nomeProduto === "") {
        alert("Digite o nome do produto no campo de busca para adicionar.");
        return;
    }
    
    nomeProduto = nomeProduto.charAt(0).toUpperCase() + nomeProduto.slice(1);

    if (produtos.includes(nomeProduto)) {
        alert(`O produto "${nomeProduto}" já existe na lista.`);
        buscarInput.value = "";
        renderizar("");
        return;
    }

    produtos.push(nomeProduto);
    produtos.sort(); 
    
    mercados.forEach(mercado => {
        if (!estado[mercado]) {
            estado[mercado] = {};
        }
        estado[mercado][nomeProduto] = { estoque: 0, troca: 0 };
    });

    salvarLocal();
    alert(`Produto "${nomeProduto}" adicionado com sucesso!`);
    
    buscarInput.value = "";
    renderizar("");
}

function renderizar(filtro){
    listaProdutos.innerHTML = "";
    const produtosBase = [...produtos]; 
    const produtosFiltrados = produtosBase.filter(p => p.toLowerCase().includes(filtro.toLowerCase()));
    produtosFiltrados.forEach(p => listaProdutos.appendChild(criarLinha(p)));
    
    if (filtro.trim() !== "" && produtosFiltrados.length === 0) {
        btnAdicionarRapido.textContent = `Adicionar Novo Produto: "${filtro.trim()}"`;
        btnAdicionarRapido.hidden = false;
    } else {
        btnAdicionarRapido.hidden = true;
    }
}

// ===================================================
// GERAÇÃO DE PDF (USANDO LARGURA AUTOMÁTICA DO A4)
// ===================================================
document.getElementById("btnSalvarPDF").onclick = () => {

    const data = document.getElementById("dataTroca").value;
    if (!data) return alert("Selecione a data.");
    
    const { mercado, tipo } = getCurrentContext();
    if (!mercado || !tipo) return alert("Selecione o Mercado e o Tipo (Estoque/Troca) antes de gerar o PDF.");

    const btn = document.getElementById("btnSalvarPDF");
    const textoOriginal = btn.innerText;
    btn.innerText = "Gerando PDF...";
    btn.disabled = true;

    const containerPrincipal = document.querySelector('.container');
    const rodape = document.querySelector('footer');

    const impressao = document.createElement("div");
    impressao.style.backgroundColor = "white";
    impressao.style.padding = "10px";
    impressao.style.color = "black";
    impressao.style.fontFamily = "Arial, sans-serif";
    impressao.style.boxSizing = "border-box";
    impressao.style.maxWidth = "100%";
    impressao.style.margin = "0 auto";

    const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    impressao.innerHTML = `<h2 style="text-align:center; margin-bottom:10px;">${tipoFormatado} - ${mercado} (${data})</h2>`;

    let tabelaHTML = `
      <table style="width:100%; border-collapse:collapse; color:black; table-layout:fixed;">
        <thead>
          <tr style="background-color:#eee;">
            <th style="border:1px solid #000; padding:3px; text-align:left; font-size:11px; width:85%;">Produto</th>
            <th style="border:1px solid #000; padding:3px; text-align:center; font-size:11px; width:15%;">${tipoFormatado}</th>
          </tr>
        </thead>
        <tbody>
    `;

    let contagem = 0;
    [...produtos].sort().forEach(p => {
        const valor = estado[mercado]?.[p]?.[tipo] || 0; 
        
        tabelaHTML += `
          <tr>
            <td style="border:1px solid #999; padding:2px 3px; font-size:11px; word-wrap:break-word;">${p}</td>
            <td style="border:1px solid #999; padding:2px 3px; text-align:center; font-size:11px;">${valor}</td>
          </tr>
        `;
        contagem++;
    });

    tabelaHTML += `</tbody></table>`;
    tabelaHTML += `<p style="margin-top:8px; font-size:9px;">Itens listados: ${contagem}</p>`;
    impressao.innerHTML += tabelaHTML;

    containerPrincipal.style.display = "none";
    rodape.style.display = "none";
    document.body.appendChild(impressao);

    setTimeout(() => {
        const opt = {
            margin: [-1, 5, 5, 7],
            filename: `${tipoFormatado}_${mercado}_${data.replace(/\//g, '-')}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                scrollY: 0, 
                useCORS: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        html2pdf().set(opt).from(impressao).save()
            .then(() => {
                impressao.remove();
                containerPrincipal.style.display = "block";
                rodape.style.display = "block";
                btn.innerText = textoOriginal;
                btn.disabled = false;
            })
            .catch(err => {
                alert("Erro ao gerar PDF. Verifique o console para detalhes.");
                console.error(err);
                impressao.remove();
                containerPrincipal.style.display = "block";
                rodape.style.display = "block";
                btn.innerText = textoOriginal;
                btn.disabled = false;
            });
    }, 500);
};

// ===================================================
// FUNÇÃO DE EXPORTAÇÃO PARA CSV (EXCEL)
// ===================================================

function exportarParaCSV() {
    const dataAtual = document.getElementById("dataTroca").value;
    if (!dataAtual) return alert("Selecione a data antes de exportar o CSV.");

    const { mercado, tipo } = getCurrentContext();
    if (!mercado || !tipo) return alert("Selecione o Mercado e o Tipo (Estoque/Troca) antes de exportar o CSV.");

    const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const nomeArquivo = `${tipoFormatado}_${mercado}_${dataAtual.replace(/\//g, '-')}.csv`;

    // 1. Cria o cabeçalho usando ponto e vírgula (padrão Brasil)
    let csvContent = `Produto;${tipoFormatado}\n`;

    // 2. Preenche o corpo dos dados (produtos já estão ordenados)
    [...produtos].sort().forEach(p => {
        const valor = estado[mercado]?.[p]?.[tipo] || 0;
        csvContent += `${p};${valor}\n`;
    });

    // 3. Cria e faz o download do arquivo
    
    // O Blob é necessário para tratar a codificação corretamente (UTF-8) para o Excel
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", nomeArquivo);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Seu navegador não suporta download automático. Tente o PDF.");
    }
}

// ===================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ===================================================

function iniciarApp() {
    carregarLocal();
    
    const seletorMercado = document.getElementById("selecaoMercado");
    mercados.forEach(m => {
        const option = document.createElement("option");
        option.value = m;
        option.textContent = m;
        seletorMercado.appendChild(option);
    });
    
    if (mercados.length > 0) {
        seletorMercado.value = mercados[0];
    }
    
    seletorMercado.onchange = () => renderizar(buscarInput.value);
    document.getElementById("selecaoTipo").onchange = () => renderizar(buscarInput.value);
    
        flatpickr("#dataTroca", { 
        dateFormat: "d/m/Y",
        locale: "pt",
        theme: "material_green",
        defaultDate: "today"
    });
    
    if (buscarInput) buscarInput.focus();
    buscarInput.oninput = () => renderizar(buscarInput.value); 
    
    btnAdicionarRapido.onclick = adicionarProdutoPelaBusca;

    document.getElementById("btnExportarCSV").onclick = exportarParaCSV;
    
    document.getElementById("btnLimpar").onclick = () => {
        const confirmar = confirm("Tem certeza que deseja limpar TODOS os valores de Estoque e Troca do mercado atual?");
        if (confirmar) {
            const { mercado } = getCurrentContext();
            if (estado[mercado]) {
                 produtos.forEach(p => {
                    if (estado[mercado][p]) {
                        estado[mercado][p].estoque = 0;
                        estado[mercado][p].troca = 0;
                    }
                });
                salvarLocal();
                renderizar(document.getElementById("buscar").value);
                alert(`Valores de Estoque e Troca para ${mercado} foram limpos.`);
            } else {
                 alert(`Nenhum dado encontrado para ${mercado}.`);
            }
        }
    };
    
    renderizar("");
}

window.onload = iniciarApp;
