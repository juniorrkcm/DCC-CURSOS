<?php
$servername = "localhost";
$username = "root"; // Substitua pelo seu usuário do banco de dados
$password = "senha"; // Substitua pela sua senha do banco de dados
$dbname = "nome_do_banco"; // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
