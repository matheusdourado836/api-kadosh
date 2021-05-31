# api-kadosh

## Documentation

### Produtos
<details>
  <summary>
    <b>Get Produtos</b> - <i>Retorna uma lista de produtos</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://localhost:3000/produtos`
  <br /><br />
  
  ```
  {
        "_id": "60b43b5f3f119e337cdd1aeb",
        "nome": "Blusa preta básica",
        "preco": 50,
        "descricao": "Tamanho M 100% algodão",
        "__v": 0
    }
  ```
  
  <summary>
    <b>Get Produtos por id</b> - <i>Retorna o produto com o id fornecido</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://localhost:3000/produtos/:idProduto`
  <br /><br />
  
  ```
  {
        "nome": "Blusa Azul marinho",
        "preco": 99.90,
        "descricao": "Tamanho G Esportiva",
    }
  ```
  
  <summary>
    <b>Post Produtos</b> - <i>Adiciona um produto a lista de produtos</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `POST https://localhost:3000/produtos`
  <br /><br />
  
  ```
  {
        "nome": "Blusa Azul marinho",
        "preco": 99.90,
        "descricao": "Tamanho G Esportiva",
    }
  ```
  
  <summary>
    <b>PATCH Produtos</b> - <i>Atualiza uma informação de um produto</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `PATCH https://localhost:3000/produtos/:idProduto`
  <br /><br />
  
  ```
  {
        "_id": "60b43b5f3f119e337cdd1aeb",
        "nome": "Blusa preta básica",
        "preco": 29.90,
        "descricao": "Tamanho GG 100% algodão",
        "__v": 0
    }
  ```
  
  <summary>
    <b>Delete Produtos</b> - <i>Deleta um produto de uma lista de produtos</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `DELETE https://localhost:3000/produtos/:idProduto`
  <br /><br />
</details>

### Pedidos

<details>
  <summary>
    <b>Get Pedidos</b> - <i>Retorna uma lista de pedidos</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://localhost:3000/pedidos`
  <br /><br />

  ```
 {
        "_id": "60b44071215e673fb0b6b566",
        "nomeUsuario": "Matheus",
        "lista": [
            {
                "ProdutoId": "60b43b5f3f119e337cdd1aeb",
                "quantidade": 5
            }
        ],
        "data": "2021-05-30T06:24:00.000Z",
        "__v": 0
    }
  ```
  
  <summary>
    <b>Get Pedidos por id</b> - <i>Retorna o pedido com o id fornecido</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://localhost:3000/pedidos/:idPedido`
  <br /><br />

  ```
 {
        "_id": "60b44071215e673fb0b6b566",
        "nomeUsuario": "Matheus",
        "lista": [
            {
                "ProdutoId": "60b43b5f3f119e337cdd1aeb",
                "quantidade": 5
            }
        ],
        "data": "2021-05-30T06:24:00.000Z",
        "__v": 0
    }
  ```
  
  <summary>
    <b>Post Pedidos</b> - <i>Adiciona um pedido a uma lista de pedidos</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `POST https://localhost:3000/pedidos`
  <br /><br />

  ```
 {
        "data": "2021-05-30T06:24:00.000Z",
        "nomeUsuario": "Matheus",
        "lista": [
            {
                "ProdutoId": "60b43b5f3f119e337cdd1aeb",
                "quantidade": 7
            }
        ],
    }
  ```
  
   <summary>
    <b>Delete Pedidos</b> - <i>Deleta um pedido de uma lista de pedidos</i>
  </summary>
</details>
