// ===================================================
// VARIÁVEIS GLOBAIS E CONFIGURAÇÕES
// ===================================================

const VERSAO_ATUAL = '2.0';

// Ao carregar o site: João Pedro uc oviur
const versaoSalva = localStorage.getItem('versao_app');

if (versaoSalva !== VERSAO_ATUAL) {
    // A versão mudou! Limpar tudo.
    console.log('Nova versão detectada. Limpando cache local...');
    
    // Opção A: Limpar tudo (Drástico, mas resolve)
    localStorage.clear(); 
    sessionStorage.clear();

    // Salva a nova versão para não limpar na próxima vez
    localStorage.setItem('versao_app', VERSAO_ATUAL);
    
    // Opcional: Recarregar a página para garantir que pegue tudo fresco
    window.location.reload();
}

let produtos = [
  "Abóbora Cabotiá Fatiada 380g",
  "Abóbora Cabotiá Pedaço 400g",
  "Abóbora Cabotiá Processada 430g",
  "Abóbora Madura Pedaço 300g",
  "Abóbora Madura Processada 430g",
  "Abóbora Paulista Picada",
  "Abobrinha Brasil Picada 250g",
  "Abobrinha Fatiada 300g",
  "Abobrinha Itália 500g",
  "Abobrinha/Cenoura Ralada 250g",
  "Acelga Picada 180g",
  "Alho-Poró 230g",
  "Amora 140g",
  "Batata Pirulito 1kg",
  "Berinjela 400g",
  "Beterraba 560g",
  "Beterraba Ralada 150g",
  "Beterraba/Cenoura Ralada 150g",
  "Brócolis 300g",
  "Brócolis Picado 180g",
  "Brócolis/Couve-Flor 300g",
  "Cebola Bandeja 400g",
  "Cebola Roxa Bandeja 400g",
  "Cebola 1kg",
  "Cenoura em Cubos 200g",
  "Cenoura Processada 400g",
  "Cenoura Ralada 150g",
  "Cenoura 500g",
  "Cenoura/Chuchu Processados 400g",
  "Cenoura/Repolho Verde Ralado 250g",
  "Cenoura/Vagem Picados 300g",
  "Cheiro-Verde Picado 070g",
  "Chuchu 500g",
  "Chuchu Processado 400g",
  "Couve-Flor 300g",
  "Couve-Flor Picada 180g",
  "Couve Picada 150g",
  "Ervilha Torta 180g",
  "Feijão Fava",
  "Jiló 280g",
  "Kit Salada 250g",
  "Kit Sopão 450g",
  "Kit Yakissoba 400g",
  "Mandioquinha Salsa Bandeja 400g",
  "Mandioquinha Salsa Processada 400g",
  "Milho Verde 700g",
  "Mini Tomate Italiano",
  "Mix de Pimentas 180g",
  "Mix para Maionese 400g",
  "Mix para Sopa 500g",
  "Morango 240g",
  "Morango Congelado 400g",
  "Morango Congelado 1kg",
  "Morango Fondue 400g",
  "Mogango Picado 300g",
  "Pepino 600g",
  "Pepino Japonês 500g",
  "Pimenta Americana 250g",
  "Pimenta Bico-Doce 180g",
  "Pimenta Cambuci 200g",
  "Pimenta Dedo-De-Moça 200g",
  "Pimentão Colorido 400g",
  "Pimentão Colorido - 2 cores 400g",
  "Pimentão Verde 300g",
  "Quiabo 250g",
  "Rabanete 400g",
  "Repolho Roxo Picado 150g",
  "Repolho Verde Picado 150g",
  "Repolho Verde/Roxo Picado 150g",
  "Salada Mista 230g",
  "Salada Primavera 300g",
  "Salada Tropical 180g",
  "Salsão 230g",
  "Seleta de Legumes 230g",
  "Tomate Cereja 300g",
  "Tomate Débora 800g",
  "Tomate Grape 300g",
  "Tomate Italiano 800g",
  "Tomate Maduro 800g",
  "Vagem 200g",
  "Vagem Picada 250g",
  "Vinagrete 180g"
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
