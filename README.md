# Formulário com Paginação

Projeto desenvolvido em **Next.js 16** com **TypeScript** que demonstra um sistema completo de formulário com validação e tabela paginada para exibição de dados.

## 📋 Descrição do Projeto

Este projeto consiste em uma aplicação web com duas funcionalidades principais:

1. **Formulário Completo**: Formulário abrangente para cadastro de usuários com validação em tempo real
2. **Tabela Paginada**: Sistema de exibição de dados com paginação e visualização detalhada

### 🎯 Funcionalidades Principais

#### Formulário de Cadastro
- **Dados Pessoais**: Nome, sobrenome, CPF com validação, email, data de nascimento e gênero
- **Telefones**: Suporte para múltiplos números de telefone com máscara automática
- **Endereço**: Campos completos com busca automática via CEP
- **Notificações**: Preferências de contato por telefone e email
- **Validações**: Validação robusta usando Zod e React Hook Form

#### Tabela Paginada
- **Exibição Responsiva**: Layout adaptável para desktop e mobile
- **Paginação Dinâmica**: Navegação entre páginas com controle de linhas por página
- **Visualização Completa**: Modal com todos os dados do usuário
- **Ordenação**: Novos registros aparecem no topo da lista

## 🛠️ Tecnologias Utilizadas

### Framework e Linguagem
- **Next.js 16**: Framework React com renderização do lado do servidor
- **TypeScript**: Tipagem estática para maior segurança no código
- **React 19**: Biblioteca principal para construção de interfaces

### Gerenciamento de Formulário e Validação
- **React Hook Form**: Gerenciamento eficiente de estado de formulários
- **Zod**: Validação de dados com TypeScript-first schema validation
- **@hookform/resolvers**: Integração entre React Hook Form e Zod

### Interface e Estilização
- **Tailwind CSS**: Framework CSS para estilização utilitária
- **Shadcn/ui**: Biblioteca de componentes reutilizáveis e acessíveis
- **Lucide React**: Ícones modernos e consistentes
- **Radix UI**: Componentes primitivos acessíveis

### Funcionalidades Adicionais
- **@react-input/mask**: Máscaras para campos de formulário (CPF, telefone, CEP)
- **date-fns**: Manipulação de datas
- **Sonner**: Sistema de notificações toast
- **next-themes**: Suporte a temas claro/escuro

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e layout principal
├── components/
│   ├── form/              # Componentes específicos do formulário
│   └── ui/                # Componentes UI reutilizáveis (Shadcn)
├── data/                  # Dados estáticos e tipos
├── features/
│   └── form-demo/         # Lógica de negócio do formulário
├── lib/                   # Utilitários e validadores
├── widgets/               # Componentes de página principais
└── public/                # Arquivos estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação e Execução

1. **Instalar dependências**:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

2. **Iniciar servidor de desenvolvimento**:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

3. **Acessar aplicação**:
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Características Técnicas

### Validações Implementadas
- **CPF**: Validação completa com algoritmo de verificação
- **Telefone**: Formato DDD + 9 dígitos obrigatório
- **Email**: Validação de formato padrão
- **Campos obrigatórios**: Validação em tempo real
- **CEP**: Busca automática de endereço (simulada)

### Design Responsivo
- **Desktop**: Layout em duas colunas (formulário + tabela)
- **Mobile**: Layout empilhado com otimizações específicas
- **Tablet**: Layout adaptativo com breakpoints inteligentes

### Estado e Gerenciamento
- **Estado Local**: useState para gerenciamento de dados
- **Formulário**: React Hook Form com validação eficiente
- **Paginação**: Estado controlado para navegação

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia servidor de desenvolvimento
- `npm run build`: Build para produção
- `npm run start`: Inicia servidor de produção
- `npm run lint`: Executa ESLint para análise de código

## 📱 Demonstração

A aplicação permite:
1. Preencher um formulário completo com validações
2. Visualizar dados em tabela paginada
3. Alternar entre diferentes quantidades de linhas por página
4. Ver detalhes completos de cada usuário
5. Experiência responsiva em diferentes dispositivos
