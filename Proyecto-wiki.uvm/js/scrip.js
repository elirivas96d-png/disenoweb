// script.js


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileOverlay = document.getElementById('mobileMenuOverlay');
    const mobileCloseBtn = document.getElementById('mobileMenuClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'
.touch-device .btn {
    padding: 14px 28px; 
    min-height: 48px; 
}

.touch-device .menu-principal a {
    padding: 12px 0;
}

.touch-device .categoria-tarjeta,
.touch-device .articulo-tarjeta {
    cursor: pointer; 
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .banner-principal {
        padding: 40px 0;
    }
    
    .banner-titulo {
        font-size: 2.8rem;
    }
    
    .contenido-doble {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    .banner-titulo {
        font-size: 2.5rem;
    }
    
    .banner-contenido {
        flex-direction: column;
        text-align: center;
    }
    
    .banner-intro {
        margin: 0 auto;
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    .header {
        padding: 10px 0;
    }
    
    .banner-principal {
        padding: 30px 0;
    }
    
    .banner-titulo {
        font-size: 2rem;
    }
    
    .categorias-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
    
    .categoria-tarjeta {
        padding: 15px;
    }
}

.scroll-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--color-primario, #DC2626);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    z-index: 999;
    transform: scale(0.8);
}

.scroll-top-btn:hover {
    background: var(--color-secundario, #B91C1C);
    transform: scale(1.1);
}

.touch-device .scroll-top-btn {
    width: 60px;
    height: 60px;
    font-size: 28px;
    bottom: 30px;
    right: 30px;
}

.menu-principal a {
    display: block;
    padding: 8px 0;
}

.btn:active,
.categoria-tarjeta:active,
.articulo-tarjeta:active {
    transform: scale(0.97);
}

@media (min-width: 768px) and (max-width: 991px) {
    .contenedor {
        padding: 0 30px;
    }
    
    .categorias-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .articulos-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .barra-lateral {
        padding: 20px;
    }
}

/* Móviles grandes */
@media (min-width: 576px) and (max-width: 767px) {
    .banner-titulo {
        font-size: 2.2rem;
    }
    
    .categorias-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .header-acciones {
        gap: 10px;
    }
    
    .barra-busqueda input {
        width: 120px;
    }
}

@media (max-width: 375px) {
    .banner-titulo {
        font-size: 1.8rem;
    }
    
    .seccion-titulo {
        font-size: 1.8rem;
    }
    
    .categorias-grid {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    
    .categoria-tarjeta {
        padding: 15px 10px;
    }
    
    .categoria-tarjeta img {
        width: 40px;
        height: 40px;
    }
    
    .btn {
        padding: 10px 18px;
        font-size: 0.9rem;
    }
    
    .barra-busqueda input {
        width: 80px;
        font-size: 0.8rem;
    }
}

a:focus-visible,
button:focus-visible,
input:focus-visible {
    outline: 3px solid var(--color-primario);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}