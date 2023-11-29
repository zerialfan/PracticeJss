function drawTriangle() {
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let lado3 = parseFloat(document.getElementById('lado3').value);

    let escala = 1; 
    if (lado1 > 100 || lado2 > 100 || lado3 > 100) {
        escala = 1;
    } else if (lado1 > 10 || lado2 > 10 || lado3 > 10) {
        escala = 100;        
    } else {
        escala = 10;
    }

    lado1 *= escala;
    lado2 *= escala;
    lado3 *= escala;

    if (isTriangle(lado1, lado2, lado3)) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(50, 350);
        ctx.lineTo(50 + lado1, 350);
        ctx.lineTo(50 + (lado1 + lado2) / 2, 350 - calculateHeight(lado1, lado2, lado3, escala));
        ctx.closePath();

        ctx.fillStyle = "#FF0000";
        ctx.fill();

        document.getElementById('pCalc').textContent = triangleType(lado1, lado2, lado3);

        let area = getArea(lado1, lado2, lado3, escala);
        document.getElementById('pArea').textContent = `Su área es ${area}`;
    } else {
        alert("Los lados no forman un triángulo");
    }
}

function triangleType(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || b === c || a === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

function getArea(a, b, c, escala) {
    let s = (a + b + c) / (2 * escala);
    let area = Math.sqrt(s * (s - a / escala) * (s - b / escala) * (s - c / escala));
    return area.toFixed(2);
}

function isTriangle(a, b, c) {
    return a + b > c && c + b > a && a + c > b;
}

function calculateHeight(a, b, c, escala) {
    let s = (a + b + c) / (2 * escala);
    let area = Math.sqrt(s * (s - a / escala) * (s - b / escala) * (s - c / escala));
    let height = (2 * area) / (a / escala);
    return height;
}

document.getElementById('btn').addEventListener('click', () => {
    drawTriangle();
});
