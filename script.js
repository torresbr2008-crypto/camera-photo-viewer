// Elementos do DOM
const cameraBtn = document.getElementById('cameraBtn');
const fileBtn = document.getElementById('fileBtn');
const fileInput = document.getElementById('fileInput');
const closeBtn = document.getElementById('closeBtn');
const camera = document.getElementById('camera');
const imageContainer = document.getElementById('imageContainer');
const displayImage = document.getElementById('displayImage');
const emptyState = document.getElementById('emptyState');
const zoomControls = document.getElementById('zoomControls');
const zoomValue = document.getElementById('zoomValue');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const moveLeft = document.getElementById('moveLeft');
const moveRight = document.getElementById('moveRight');
const moveUp = document.getElementById('moveUp');
const moveDown = document.getElementById('moveDown');
const resetView = document.getElementById('resetView');

// Variáveis de controle
let stream = null;
let currentZoom = 100;
let offsetX = 0;
let offsetY = 0;
let isImageMode = false;

// Constantes
const ZOOM_STEP = 10;
const MOVE_STEP = 20;
const MAX_ZOOM = 300;
const MIN_ZOOM = 50;

// ========== CÂMERA ==========
cameraBtn.addEventListener('click', openCamera);
closeBtn.addEventListener('click', closeCamera);

async function openCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' }
        });
        
        camera.srcObject = stream;
        camera.style.display = 'block';
        imageContainer.style.display = 'none';
        emptyState.style.display = 'none';
        zoomControls.style.display = 'none';
        closeBtn.style.display = 'inline-block';
        cameraBtn.style.display = 'none';
        fileBtn.style.display = 'none';
        isImageMode = false;
        
    } catch (error) {
        alert('Erro ao acessar a câmera: ' + error.message);
        console.error('Erro de câmera:', error);
    }
}

function closeCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    
    camera.style.display = 'none';
    emptyState.style.display = 'flex';
    zoomControls.style.display = 'none';
    closeBtn.style.display = 'none';
    cameraBtn.style.display = 'inline-block';
    fileBtn.style.display = 'inline-block';
    resetView();
}

// ========== SELEÇÃO DE FOTO ==========
fileBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            displayImage.src = event.target.result;
            camera.style.display = 'none';
            imageContainer.style.display = 'flex';
            emptyState.style.display = 'none';
            zoomControls.style.display = 'flex';
            closeBtn.style.display = 'inline-block';
            cameraBtn.style.display = 'none';
            fileBtn.style.display = 'none';
            isImageMode = true;
            resetView();
        };
        reader.readAsDataURL(file);
    }
});

// ========== ZOOM ==========
zoomIn.addEventListener('click', () => {
    if (currentZoom < MAX_ZOOM) {
        currentZoom += ZOOM_STEP;
        updateImageTransform();
    }
});

zoomOut.addEventListener('click', () => {
    if (currentZoom > MIN_ZOOM) {
        currentZoom -= ZOOM_STEP;
        updateImageTransform();
    }
});

// ========== NAVEGAÇÃO ==========
moveLeft.addEventListener('click', () => {
    offsetX -= MOVE_STEP;
    updateImageTransform();
});

moveRight.addEventListener('click', () => {
    offsetX += MOVE_STEP;
    updateImageTransform();
});

moveUp.addEventListener('click', () => {
    offsetY -= MOVE_STEP;
    updateImageTransform();
});

moveDown.addEventListener('click', () => {
    offsetY += MOVE_STEP;
    updateImageTransform();
});

// ========== RESET ==========
resetView.addEventListener('click', () => {
    currentZoom = 100;
    offsetX = 0;
    offsetY = 0;
    updateImageTransform();
});

function resetView() {
    currentZoom = 100;
    offsetX = 0;
    offsetY = 0;
    updateImageTransform();
}

// ========== ATUALIZAR TRANSFORMAÇÃO ==========
function updateImageTransform() {
    const transform = `translate(${offsetX}px, ${offsetY}px) scale(${currentZoom / 100})`;
    displayImage.style.transform = transform;
    zoomValue.textContent = `${currentZoom}%`;
}

// ========== CONTROLE POR TECLADO ==========
document.addEventListener('keydown', (e) => {
    if (!isImageMode) return;
    
    switch(e.key) {
        case '+':
        case '=':
            zoomIn.click();
            break;
        case '-':
            zoomOut.click();
            break;
        case 'ArrowLeft':
            moveLeft.click();
            break;
        case 'ArrowRight':
            moveRight.click();
            break;
        case 'ArrowUp':
            moveUp.click();
            break;
        case 'ArrowDown':
            moveDown.click();
            break;
        case 'r':
        case 'R':
            resetView.click();
            break;
    }
});

// ========== TOUCH/MOUSE PARA ZOOM ==========
let lastDistance = 0;

displayImage.addEventListener('wheel', (e) => {
    if (!isImageMode) return;
    e.preventDefault();
    
    if (e.deltaY < 0) {
        zoomIn.click();
    } else {
        zoomOut.click();
    }
}, { passive: false });

// Touch pinch para zoom
displayImage.addEventListener('touchmove', (e) => {
    if (!isImageMode || e.touches.length !== 2) return;
    
    e.preventDefault();
    
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    
    const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
    );
    
    if (lastDistance > 0) {
        if (distance > lastDistance) {
            currentZoom = Math.min(currentZoom + 5, MAX_ZOOM);
        } else {
            currentZoom = Math.max(currentZoom - 5, MIN_ZOOM);
        }
        updateImageTransform();
    }
    
    lastDistance = distance;
}, { passive: false });

displayImage.addEventListener('touchend', () => {
    lastDistance = 0;
});

console.log('Aplicação carregada! Use as setas do teclado, +/- para zoom, ou R para resetar.');
