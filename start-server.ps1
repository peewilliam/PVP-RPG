# Script para iniciar o servidor MMORPG
# Autor: Petryck William
# Data: [Data atual]

# Exibe mensagem de boas-vindas
Write-Host "Iniciando servidor do PVP-RPG..." -ForegroundColor Green

# Diretórios necessários para logs e dados
$directories = @(
    "server/src/logs",
    "server/data"
)

# Criar diretórios se não existirem
foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        Write-Host "Criando diretório: $dir" -ForegroundColor Yellow
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
    }
}

# Iniciar o servidor
Write-Host "Executando o servidor..." -ForegroundColor Cyan
node server/src/index.js

# Em caso de erro, mantém a janela aberta
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro ao iniciar o servidor. Código de saída: $LASTEXITCODE" -ForegroundColor Red
    Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
} 