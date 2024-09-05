# Parte 1

01 - Porque Usar Typescript:

- Introdução ao projeto e sua estrutura;
- Um pouco sobre módulos do ECMASCRIPT;
- Modelagem de uma Negociação em JavaScript;
- Buracos em nossa modelagem por limitações da linguagem JavaScript.

02 - Typescript e compilador:

- Download do TypeScript;
- Configuração do compilador e papel do tsconfig.json;
- Integração com scripts do Node.js;
- Modificadores de acesso private e public;
- Benefícios iniciais da linguagem TypeScript.

03 - Beneficios da tipagem estática

- O tipo implícito any;
- Benefícios da tipagem estática;
- Mais configurações do compilador tsc;
- Retorno de método explícito;
- Conversão de valores da interface do usuário.

04 - Avançando na modelagem do domínio

- Modelagem da classe Negociacoes;
- Utilização de Generics;
- Revisão sobre encapsulamento;
- Questões de mutabilidade e como solucioná-la;
- O tipo ReadonlyArray;
- Adição de negociações em nossa lista.

05 - Simplificando nosso código

- Nova maneira de declaração de array com generics;
- O tipo ReadonlyArray;
- O modificador readonly;
- Getters e propriedades públicas em modo de leitura;
- Programação defensiva.

# Parte 2

01 - Elaborando uma solução de view

- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico
- Formatação de datas usando Intl

02 - Herança e reaproveitamento de código

- Herança com TypeScript
- Classes com tipo genérico
- Classes abstratas
- O modificador protected

03 - Visibilidade de métodos e Enumeration

- Visibilidade de métodos
- Validando negociações em dias úteis
- Vantagens do uso de enums
- Cuidados com enums

04 - Lapidando nosso código

- Revisão da lógica de conversão negociações
- Método estáticos
- Parâmetros opcionais

05 - TSC e StricNullChecks

- Remoção de comentários do código compilado
- Ativação do strictNullChecks
- Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
- Benefícios do strictNullChecks no controle do fluxo da sua aplicação

# Parte 3 - Final

01 - Entendendo Decorators

- Introdução e estrutura do projeto
- Requisitos não funcionais
- Decorator de método
- Logar tempo de execução com decorator

02 - Decorators de métodos

- Decorator com parâmetro
- Criação de um decorator de inspeção
- Ordem de execução dos decorators
- Simplificação no design de decorators
- Portabilidade de funcionalidade antiga para decorators

03 - Decorator de propriedade

- Como evitar código duplicado
- Decorator de propriedade
- Criação dinâmica de getters
- O uso de Object.defineProperty
- Cache de decorators

04 - API externa e interface

- API externa
- Consumindo API externa
- Definindo uma interface para a API
- Isolando o acesso à API em um serviço

05 - Mais sobre interface

- Chega de múltiplos console.log
- Aplicação prática do Polimorfismo
- Interface de método
- Evitando importar negociações duplicadas
- Estendendo interfaces
- Geração de sourmaps e debug da aplicação no navegador
