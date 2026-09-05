# 📷 Painel de Câmera e Visualizador de Fotos

Um painel interativo desenvolvido em HTML, CSS e JavaScript puro que oferece funcionalidades completas de câmera e visualização de fotos com zoom e navegação.

## ✨ Funcionalidades

- **📷 Abrir Câmera**: Acessa a câmera do dispositivo em tempo real
- **🖼️ Selecionar Foto**: Escolha uma imagem do seu dispositivo
- **🔍 Zoom**: Aproxime ou afaste a imagem (50% a 300%)
- **↔️ Navegação**: Mova a imagem para todos os lados
- **🔄 Reset**: Retorne à visualização padrão
- **⌨️ Controle por Teclado**: Use setas, +/-, R
- **📱 Responsivo**: Funciona em desktop, tablet e mobile
- **🎯 Touch Support**: Pinch to zoom em dispositivos mobile

## 🎮 Como Usar

### Botões Principais
1. **Abrir Câmera**: Ativa a webcam do seu dispositivo
2. **Selecionar Foto**: Abre um seletor de arquivo para escolher uma imagem
3. **Fechar**: Sai do modo câmera ou imagem

### Controles de Zoom
- **🔍−**: Diminui o zoom
- **🔍+**: Aumenta o zoom
- Exibe o nível de zoom atual

### Controles de Navegação
- **←**: Move a imagem para a esquerda
- **→**: Move a imagem para a direita
- **↑**: Move a imagem para cima
- **↓**: Move a imagem para baixo
- **🔄 Reset**: Volta à posição e zoom original

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `+` ou `=` | Aumentar zoom |
| `-` | Diminuir zoom |
| `↑` | Mover para cima |
| `↓` | Mover para baixo |
| `←` | Mover para esquerda |
| `→` | Mover para direita |
| `R` | Resetar visualização |
| `Scroll` | Zoom (roda do mouse) |

## 📱 Controles Touch

- **Pinch to Zoom**: Use dois dedos para aumentar/diminuir o zoom
- **Botões**: Toque nos botões de navegação para mover a imagem

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura e API de câmera
- **CSS3**: Estilos, gradientes e responsividade
- **JavaScript Vanilla**: Lógica interativa sem dependências
- **MediaDevices API**: Acesso à câmera
- **FileReader API**: Leitura de arquivos de imagem

## 🌐 Requisitos

- Navegador moderno com suporte a:
  - MediaDevices API (getUserMedia)
  - FileReader API
  - CSS Transforms
  - ES6 JavaScript

## 📋 Limites de Zoom

- **Mínimo**: 50%
- **Máximo**: 300%
- **Passo**: 10% por clique

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/torresbr2008-crypto/camera-photo-viewer.git
```

2. Abra o arquivo `index.html` em seu navegador

3. Permita o acesso à câmera quando solicitado

4. Comece a usar!

## 🔒 Privacidade

- Nenhum dado é enviado para servidores
- Todas as operações acontecem localmente no seu navegador
- A câmera é acessada apenas quando você clica em "Abrir Câmera"
- As imagens não são salvas automaticamente

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 👨‍💻 Autor

Desenvolvido por **torresbr2008-crypto**

---

**Aproveite o painel! 🎉**
