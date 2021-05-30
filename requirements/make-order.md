# Realizar pedido

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/order**
2. ✅ Valida dados obrigatórios
3. ✅ **Realiza** um pedido com os dados fornecidos
4. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se dados obrigatórios não forem fornecidos pelo client
3. ✅ Retorna erro **500** se der erro ao tentar realizer o pedido
