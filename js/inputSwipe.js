document.addEventListener('DOMContentLoaded', function () {
    var glideElementPeso = document.getElementById('glidePeso');
    var glideElementAltura = document.getElementById('glideAltura');
    var glideElementEdad = document.getElementById('glideEdad');
    var selectedInputElementPeso = document.querySelector('.selectedInputPeso');
    var selectedInputElementAltura = document.querySelector('.selectedInputAltura');
    var selectedInputElementEdad = document.querySelector('.selectedInputEdad');
    var startScrollTop = 0;

    // Array de números
    var numeroPeso1 = [];
    var numeroAltura2 = [];
    var numeroEdad3 = [];

    // Configurar rango para número de peso
    numeroPeso1.push(null);
    for (var i = 30; i <= 200; i++) {
        numeroPeso1.push(i);
    }
    numeroPeso1.push(null);

    // Configurar rango para número de altura
    numeroAltura2.push(null);
    for (var i = 30; i <= 250; i++) {
        numeroAltura2.push(i);
    }
    numeroAltura2.push(null);

    // Configurar rango para número de edad
    numeroEdad3.push(null);
    for (var i = 10; i <= 120; i++) {
        numeroEdad3.push(i);
    }
    numeroEdad3.push(null);

    // Configuración inicial
    setupSlider(numeroPeso1, 'numberContainerPeso', 'glide__slidePeso', selectedInputElementPeso);
    setupSlider(numeroAltura2, 'numberContainerAltura', 'glide__slideAltura', selectedInputElementAltura);
    setupSlider(numeroEdad3, 'numberContainerEdad', 'glide__slideEdad', selectedInputElementEdad);

    var hammerPeso = new Hammer.Manager(glideElementPeso);
    var hammerAltura = new Hammer.Manager(glideElementAltura);
    var hammerEdad = new Hammer.Manager(glideElementEdad);
    hammerPeso.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 }));
    hammerAltura.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 }));
    hammerEdad.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 }));

    hammerPeso.on('panstart', function (event) {
        startScrollTop = glideElementPeso.scrollTop;
    });
    hammerAltura.on('panstart', function (event) {
        startScrollTop = glideElementAltura.scrollTop;
    });
    hammerEdad.on('panstart', function (event) {
        startScrollTop = glideElementEdad.scrollTop;
    });

    hammerPeso.on('pan', function (event) {
        updateSelectedNumber(glideElementPeso, numeroPeso1, 'glide__slidePeso', selectedInputElementPeso);
    });
    hammerAltura.on('pan', function (event) {
        updateSelectedNumber(glideElementAltura, numeroAltura2, 'glide__slideAltura', selectedInputElementAltura);
    });
    hammerEdad.on('pan', function (event) {
        updateSelectedNumber(glideElementEdad, numeroEdad3, 'glide__slideEdad', selectedInputElementEdad);
    });

    hammerPeso.on('panend', function (event) {
        updateSelectedNumber(glideElementPeso, numeroPeso1, 'glide__slidePeso', selectedInputElementPeso);
        saveStatePeso(glideElementPeso, selectedInputElementPeso);
    });
    hammerAltura.on('panend', function (event) {
        updateSelectedNumber(glideElementAltura, numeroAltura2, 'glide__slideAltura', selectedInputElementAltura);
        saveStateAltura(glideElementAltura, selectedInputElementAltura);
    });
    hammerEdad.on('panend', function (event) {
        updateSelectedNumber(glideElementEdad, numeroEdad3, 'glide__slideEdad', selectedInputElementEdad);
        saveStateEdad(glideElementEdad, selectedInputElementEdad);
    });

    hammerPeso.on('panmove', function (event) {
        handlePanMove(glideElementPeso, startScrollTop, event.deltaY);
    });
    hammerAltura.on('panmove', function (event) {
        handlePanMove(glideElementAltura, startScrollTop, event.deltaY);
    });
    hammerEdad.on('panmove', function (event) {
        handlePanMove(glideElementEdad, startScrollTop, event.deltaY);
    });

    glideElementPeso.addEventListener('wheel', function (event) {
        handleWheelScroll(glideElementPeso, event.deltaY, numeroPeso1, 'glide__slidePeso', selectedInputElementPeso);
    });
    glideElementAltura.addEventListener('wheel', function (event) {
        handleWheelScroll(glideElementAltura, event.deltaY, numeroAltura2, 'glide__slideAltura', selectedInputElementAltura);
    });
    glideElementEdad.addEventListener('wheel', function (event) {
        handleWheelScroll(glideElementEdad, event.deltaY, numeroEdad3, 'glide__slideEdad', selectedInputElementEdad);
    });

    // Restaurar el estado al cargar la página
    restoreStatePeso(glideElementPeso, selectedInputElementPeso);
    restoreStateAltura(glideElementAltura, selectedInputElementAltura);
    restoreStateEdad(glideElementEdad, selectedInputElementEdad);

    function setupSlider(numeros, containerId, slideClass, selectedInputElement) {
        var numberContainer = document.getElementById(containerId);

        numeros.forEach(function (numero, index) {
            var numDiv = document.createElement('div');
            numDiv.className = slideClass;
            numDiv.innerText = numero;
            numberContainer.appendChild(numDiv);
        });

        // Configurar el valor inicial del input después de agregar los números
        selectedInputElement.value = numeros[1] !== null ? numeros[1].toString() : '';
    }

    function updateSelectedNumber(glideElement, numeros, slideClass, selectedInputElement) {
        var centerPosition = glideElement.scrollTop + glideElement.clientHeight / 2;
        var selectedNumber = null;

        numeros.forEach(function (_, index) {
            var slide = document.querySelector('.' + slideClass + ':nth-child(' + (index + 1) + ')');
            var slideTop = slide.offsetTop;
            var slideBottom = slideTop + slide.offsetHeight;

            if (centerPosition >= slideTop && centerPosition <= slideBottom) {
                selectedNumber = numeros[index];
            }
        });

        selectedInputElement.value = selectedNumber;
    }

    function saveStatePeso(glideElement, selectedInputElement) {
        localStorage.setItem('scrollPositionPeso', glideElement.scrollTop);
        localStorage.setItem('selectedNumberPeso', selectedInputElement.value);
    }
    function saveStateAltura(glideElement, selectedInputElement) {
        localStorage.setItem('scrollPositionAltura', glideElement.scrollTop);
        localStorage.setItem('selectedNumberAltura', selectedInputElement.value);
    }
    function saveStateEdad(glideElement, selectedInputElement) {
        localStorage.setItem('scrollPositionEdad', glideElement.scrollTop);
        localStorage.setItem('selectedNumberEdad', selectedInputElement.value);
    }

    function restoreStatePeso(glideElement, selectedInputElement) {
        var savedScrollPosition = localStorage.getItem('scrollPositionPeso');
        var savedSelectedNumber = localStorage.getItem('selectedNumberPeso');

        if (savedScrollPosition !== null && savedSelectedNumber !== null) {
            glideElement.scrollTo({
                top: parseInt(savedScrollPosition),
                behavior: 'auto'
            });
            selectedInputElement.value = savedSelectedNumber;
        }
    }
    function restoreStateAltura(glideElement, selectedInputElement) {
        var savedScrollPosition = localStorage.getItem('scrollPositionAltura');
        var savedSelectedNumber = localStorage.getItem('selectedNumberAltura');

        if (savedScrollPosition !== null && savedSelectedNumber !== null) {
            glideElement.scrollTo({
                top: parseInt(savedScrollPosition),
                behavior: 'auto'
            });
            selectedInputElement.value = savedSelectedNumber;
        }
    }
    function restoreStateEdad(glideElement, selectedInputElement) {
        var savedScrollPosition = localStorage.getItem('scrollPositionEdad');
        var savedSelectedNumber = localStorage.getItem('selectedNumberEdad');

        if (savedScrollPosition !== null && savedSelectedNumber !== null) {
            glideElement.scrollTo({
                top: parseInt(savedScrollPosition),
                behavior: 'auto'
            });
            selectedInputElement.value = savedSelectedNumber;
        }
    }

    function handlePanMove(glideElement, startScrollTop, deltaY) {
        glideElement.scrollTo({
            top: startScrollTop - deltaY,
            behavior: 'auto'
        });
    }

    function handleWheelScroll(glideElement, deltaY, numeros, slideClass, selectedInputElement) {
        event.preventDefault();
        var adjustedDeltaY = deltaY * 0.2; // Ajusta la velocidad del desplazamiento
        glideElement.scrollTo({
            top: glideElement.scrollTop + adjustedDeltaY,
            behavior: 'auto'
        });
        updateSelectedNumber(glideElement, numeros, slideClass, selectedInputElement);
        saveState(glideElement, selectedInputElement);
    }
});
