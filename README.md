# AngularJs
Repositório para estudo do Angular JS

## Comands Notes

For to run Angular.js you needded to install node js, at the site.
After that typing this command at the terminal:
```
npm install -g @angular/cli
```
Quando geramos um novo projeto ele vem com um componente na versão stand alone. Os projetos na versão 16, não vem com a versão stand alone for default.


### 
Vai gerar um projeto com um componente na versão stand alone.
A versão não tem app module, quando se trata da versão 17.
Ele gerará o componente na versão stand alone.

```
ng new project-17
```

![alt text](image.png)

Com essa forma ele criará o app module, ao gerar um novo projeto.
```
ng new project --no-standalone
```
![alt text](image.png)

At this site you can see the previews downloads:

https://nodejs.org/en/about/previous-releases#nodejs-releases

![alt text](image-1.png)

You should verify node and angular versions:

![alt text](image-2.png)

-------

@angular/cli

Disponibiliza o comando ng para fazermos instalações.
É possível utilizar a lib. npx, e este sempre baixará a última versão do angular cli.
Porém o npx sempre vai baixar o angular cli, fazer o download do que precisa e depois remove-lo. Ou seja demora um pouco mais.

O package.json vai auxiliar no gerenciamento de pacotes do projeto.
A pasta src, é o coração do projeto.

![alt text](image-3.png)

main.ts é o arquivo que carregará todos os outros módulos e componentes da aplicação e a partir dele que será feito todo o processo de inicialização.

index.html, possuí a referência do código gerado, o angular irá injetar os scripts que foram gerados a partir do main.ts


#### Executar um projeto

```
  ng serve
```

o termo bootstrap, no angular tem referência a inicialização do projeto. A criação do ambiente que vai servir o seu projeto e toda a inicialização dele, o processo de build do seu projeto.

![alt text](image-4.png)



### Referenciando um componente:

A seguir o main.ts está renderizando o AppModule.
Para que isso seja possível é necessário a seguinte estrutura:


app.module.ts
app.component.ts
index.html (file.html) (referencia-se o selector do arquivo app.components.ts)

![alt text](image-5.png)
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)


Os componentes são referenciados dentro do app.component.ts

É possível criar componentes por meio do comando:

```
ng generate component [nome-componente]
```
---------------

![alt text](image-9.png)


---------


- Conceitos de componentes

O que é um componente e o que é um módulo?
    Componente é um código (layout) que pode ser utilizado em vários locais.
    Dentro do componente teremos uma lógica específica. Pode ser uma lógica de manipulação de dados ou uma lógica para mostrar os dados que o componente recebe.
    Podemos criar componentes para isolar um layout ou lógica específica.
    É importante definir quais componentes devemos ter antes de iniciar o projeto. Pois com isso conseguimos um código organizado, estruturado e pouco acoplado.
    O que é um módulo?
    ![alt text](image-10.png)
    Não podemos misturar gêneros.
    Basicamente um módulo é para organizar componetes com lógicas similares que são utilizados em locais parecidos ou na mesma tela, podemos criar um módulo para aquela tela.
    ![alt text](image-11.png)
    Na imagem acima, podemos criar um módulo de declarar estes componentes no módulo da primeira tela.
    Agora podemos também criar um módulo para a segunda tela e separar todos os componentes criados na segunda tela.
    ![alt text](image-12.png)
    No Angular existe uma regra que só podemos declarar um componente com apenas 1 módulo. Não podemos ter um componente x declarado no módulo da página 1 e declarado no módulo da página 2. Para usarmos nas duas páginas devemos exportar o componente. 
    ####### E quando formos usar o componente, importaremos na página o módulo. Modulos sempre importamos.
    ![alt text](image-13.png)

-------
- Como criar componentes
- Como declarar componentes em módulos
- Como criar componentes filhos
- Como referenciar componentes de outros módulos (externos)
- Estratégias de estilização de componentes
    - Configuração de Inline Template e Inline Css
    - ::ng-deep
    - :host
- View Encapsulation
    - None
    - Emulated
    - ShadowDOM

------
app.component é a primeira classe a ser executada
![alt text](image.png)

o primeiro modulo a ser executado, é o app.module.

![alt text](image-1.png)

Ele executa o app.module e faz o bootstrap no primeiro componente.

## Criando componentes

```
ng g c card
```

O arquivo card.component.spec.ts, pode ser criado testes.
![alt text](image-14.png)

card.component.spec.ts é um exemplo de uma classe de teste

card.component.scss é o arquivo de estilo

card.component.ts é a classe do componente (classe js)


Todo componente será uma classe e terá esse padrão.

![alt text](image-16.png)

Para definirmos que uma classe será um componente usamos um decorator
@Component

selector é o nome do component quando referenciamos ele no html

<app-card></app-card>

template url, ele aponta o componente html (o template do componente), html carregado ao referenciar dentro de algum componente

stylesUrl, é o componente de arquivo que será carregado no estilo do componente

O módulo principal da aplicação possui alguns parâmetros específicos.

app-module

![alt text](image-17.png)

##### Declaretions
É aonde declaramos nosso componente.
Sempre que referenciamos um componente em um módulo estamos declarando ele.

Componentes sempre vem dentro do array do declarations.

![alt text](image-18.png)

Ao executar a linha de comando do arquivo, nós temos um update da classe app.module, que basicamente referencia o componente novo na classe principal.

![alt text](image-19.png)

##### Imports

Caso desejamos importar dentro do nosso componente uma funcionalidade de outro módulo usamos os array de imports.
![alt text](image-20.png)

E ficamos com essa estrutura.

--- 

Como trabalhar com componentes filhos


![alt text](image-21.png)
![alt text](image-22.png)
![alt text](image-23.png)
------
Comando para criar um módulo:
```
ng g m 
```
Simulando erros declarando um componente em mais de um módulo.
![alt text](image-24.png)

![alt text](image-25.png)

É uma boa prática re startar a aplicação quando manipulamos módulos.
-------
### Como utilizamos componentes de um módulo dentro dos componentes de outro módulo
-  Módulos que consomem componentes de outros módulos.


Primeiro falamos no [exports] que o componente pode ser consumido.
Importar o módulo centralizador, no módulo que você pretende fazer o uso.
![alt text](image-26.png)


![alt text](image-27.png)

- decorator

Import os caminhos dos componentes colocados no [declarations]

A modularização é de extrema importância para que possamos dar manutenção no projeto.

![alt text](image-28.png)

---

Conexão entre o arquivo ts no html.
Como chamar as propriedades da classe dentro do html.

- Usaremos a interpolação {{}}


Acessar propriedades do componente dado a ela.

![alt text](image-29.png)

Para usarmos funções dentro do arquivo .ts
![alt text](image-30.png)

Criar uma interpolação e referenciar no html.
Este processo de fazer a referência das propriedades da classe no html se chama biding.

- Binding sendo feito por funções e por propriedades
![alt text](image-31.png)

Caso a propriedade não traga um valor na tela, pode ser que a propriedade esteja com um valor nullo ou vazio.

-----
Ao tentar acessar um valor undefined, recebemos como retorno:
![alt text](image-32.png)

![alt text](image-33.png)

Com o encadeamento opcional, temos uma validação do suposto objeto para ver se é undefined

![alt text](image-34.png)
----
Como driblar as regras de validação do typescript:  
//@ts-ignore
![alt text](image-35.png)
![alt text](image-36.png)


Trabalhando com ternários e typescript:

![alt text](image-38.png)

-----

- Como criar e rodar um projeto
- Estrutura de pastas de um projeto Angular
- Revi Componentização
- Criação e Organização de Módulos
- Referenciação de Arquivos
- Interpolação
- Optional Chaning | Encadeamento Opcional