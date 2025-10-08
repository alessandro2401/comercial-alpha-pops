# Portal de POPs Comerciais - Alpha Proteções | Grupo MMB

## Visão Geral do Projeto

Este projeto consiste em um portal web completo e profissional para documentar os **Procedimentos Operacionais Padrão (POPs)** do setor comercial da Alpha Proteções, parte do Grupo MMB. O site foi desenvolvido em React com design moderno e responsivo, e está hospedado no Vercel.

O portal não apenas documenta os 6 POPs principais, mas também oferece uma **análise aprofundada de cada processo**, incluindo:

- **Mapeamento de Processos**: Diagramas de fluxo detalhados (Mermaid) para cada POP.
- **Análise de Gargalos**: Identificação de pontos de ineficiência e oportunidades de melhoria.
- **Propostas de Otimização**: Sugestões práticas de automação, simplificação e melhoria contínua.

## Tecnologias Utilizadas

- **Frontend**: React (Vite)
- **Estilização**: Tailwind CSS, shadcn/ui
- **Ícones**: Lucide React
- **Diagramas**: Mermaid
- **Deploy**: Vercel
- **Controle de Versão**: Git, GitHub

## Estrutura do Site

O site é composto por duas visualizações principais:

### 1. Página Inicial (`HomePage.jsx`)

- **Hero Section**: Apresentação do portal com título e descrição.
- **Estatísticas**: Cards com métricas de POPs, melhorias, gargalos e automações.
- **Grid de POPs**: Cards interativos para cada um dos 6 POPs, com ícone, categoria, título, subtítulo e descrição.
- **Seção de Análise**: Destaque para as funcionalidades de análise de processos.

### 2. Página de Detalhes do POP (`POPDetail.jsx`)

- **Header Dinâmico**: Cabeçalho com gradiente de cor, ícone e informações do POP selecionado.
- **Objetivo e Escopo**: Descrição clara do propósito e abrangência do processo.
- **Diagrama de Fluxo**: Imagem do diagrama Mermaid gerado para o processo.
- **Atores e Responsabilidades**: Lista dos envolvidos e suas funções.
- **Sidebar de Análise**:
  - **Prazos (SLA)**: Tabela com os prazos de atendimento.
  - **Gargalos Identificados**: Cards em vermelho com os principais problemas.
  - **Melhorias Propostas**: Cards em verde com sugestões de otimização.

## Configuração do Subdomínio

O site está no ar em [comercial-alpha.vercel.app](https://comercial-alpha.vercel.app). Para configurar o subdomínio **comercial.administradoramutual.com.br**, é necessário adicionar os seguintes registros DNS no seu provedor de domínio:

| Tipo      | Nome/Host                       | Valor                               |
|-----------|---------------------------------|-------------------------------------|
| `A`       | `comercial`                     | `76.76.21.21`                       |
| `CNAME`   | `www.comercial`                 | `cname.vercel-dns.com.`             |

Após a propagação do DNS (que pode levar algumas horas), o site estará acessível pelo subdomínio.

## Repositório no GitHub

O código-fonte completo do projeto está disponível no GitHub:

[github.com/alessandro2401/comercial-alpha-pops](https://github.com/alessandro2401/comercial-alpha-pops)

## Próximos Passos

- **Integração com CMS**: Conectar o conteúdo dos POPs a um CMS (como Strapi ou Sanity) para facilitar a atualização.
- **Autenticação**: Adicionar sistema de login para acesso restrito a colaboradores.
- **Analytics**: Integrar ferramentas de análise de uso do site (Google Analytics, Vercel Analytics).
- **Busca Avançada**: Implementar busca por texto completo em todos os POPs.

---
*Documentação gerada por Manus AI em 08/10/2025.*
