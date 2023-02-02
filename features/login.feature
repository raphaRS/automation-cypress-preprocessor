Feature:Login
    Usando usuario e senha efetua o login
Scenario: Email
Given que estou no campo de email
When colocar usuario
Then habilita o campo senha

Scenario: Senha
Given que estou no campo de senha
When colocar senha
Then habilita o campo senha
