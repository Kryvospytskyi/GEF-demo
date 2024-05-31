function showMenu(menu) {
    // Open the selected menu
    const submenu = document.getElementById(`${menu}-menu`);
    if (submenu) {
        submenu.style.display = 'block';
    }
}

function hideMenu(menu) {
    // Close the selected menu
    const submenu = document.getElementById(`${menu}-menu`);
    if (submenu) {
        submenu.style.display = 'none';
    }
}


function selectFormula() {
    const formula = document.getElementById('formulas').value;
    const formulaInputs = document.getElementById('formula-inputs');
    formulaInputs.innerHTML = '';

    switch (formula) {
        case 'quadratic':
            formulaInputs.innerHTML = `
                <label>a: <input type="number" id="a"></label>
                <label>b: <input type="number" id="b"></label>
                <label>c: <input type="number" id="c"></label>
            `;
            break;
        case 'pythagorean':
            formulaInputs.innerHTML = `
                <label>a: <input type="number" id="a"></label>
                <label>b: <input type="number" id="b"></label>
            `;
            break;
        case 'circle_area':
            formulaInputs.innerHTML = `
                <label>r: <input type="number" id="r"></label>
            `;
            break;
        case 'square_table':
            formulaInputs.innerHTML = `
                <label>До якого числа: <input type="number" id="max-number" value="10"></label>
            `;
            break;
            case 'multiplication_formula':
            formulaInputs.innerHTML = `
                <label>Оберіть формулу:
                    <select id="multiplication-formula-type">
                        <option value="square_sum">Квадрат суми (a+b)²</option>
                        <option value="square_difference">Квадрат різниці (a-b)²</option>
                        <option value="product_sum_difference">Добуток суми і різниці (a+b)(a-b)</option>
                    </select>
                </label>
                <label>a: <input type="number" id="a"></label>
                <label>b: <input type="number" id="b"></label>
            `;
            break;
            case 'power':
            formulaInputs.innerHTML = `
                <label>Основа (a): <input type="number" id="a"></label>
                <label>Показник (n): <input type="number" id="n"></label>
            `;
            break;
            case 'logarithm':
                formulaInputs.innerHTML = `
                    <label>Основа (b): <input type="number" id="b" value="10"></label>
                    <label>Аргумент (x): <input type="number" id="x"></label>
            ` ;
            break;
        default:
            break;
    }
}

function calculate() {
    const formula = document.getElementById('formulas').value;
    let result = '';

    switch (formula) {
        case 'quadratic':
            const a = parseFloat(document.getElementById('a').value);
            const b = parseFloat(document.getElementById('b').value);
            const c = parseFloat(document.getElementById('c').value);
            const discriminant = b * b - 4 * a * c;
            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                result = `Корені рівняння: x1 = ${root1}, x2 = ${root2}`;
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                result = `Корінь рівняння: x = ${root}`;
            } else {
                result = 'Рівняння не має дійсних коренів';
            }
            break;
        case 'pythagorean':
            const aP = parseFloat(document.getElementById('a').value);
            const bP = parseFloat(document.getElementById('b').value);
            const cP = Math.sqrt(aP * aP + bP * bP);
            result = `Гіпотенуза: c = ${cP}`;
            break;
        case 'circle_area':
            const r = parseFloat(document.getElementById('r').value);
            const area = Math.PI * r * r;
            result = `Площа кола: A = ${area}`;
            break;
        case 'square_table':
            const maxNumber = parseInt(document.getElementById('max-number').value);
            result = generateSquareTable(maxNumber);
            break;
        case 'multiplication_formula':
            const formulaType = document.getElementById('multiplication-formula-type').value;
            const a2 = parseFloat(document.getElementById('a').value);
            const b2 = parseFloat(document.getElementById('b').value);
    
            switch (formulaType) {
                case 'square_sum':
                    result = `(a+b)² = ${a2 * a2} + 2 * ${a2} * ${b2} + ${b2 * b2} = ${(a2 + b2) * (a2 + b2)}`;
                    break;
                case 'square_difference':
                    result = `(a-b)² = ${a2 * a2} - 2 * ${a2} * ${b2} + ${b2 * b2} = ${(a2 - b2) * (a2 - b2)}`;
                    break;
                case 'product_sum_difference':
                    result = `(a+b)(a-b) = ${a2 * a2} - ${b2 * b2} = ${(a2 + b2) * (a2 - b2)}`;
                    break;
                default:
                    result = 'Невідома формула';
                    break;
            }
            break;
        case 'power':
            const base = parseFloat(document.getElementById('a').value);
            const exponent = parseInt(document.getElementById('n').value);
            result = `${base}^${exponent} = ${Math.pow(base, exponent)}`;
            break;
        case 'logarithm':
            const bLog = parseFloat(document.getElementById('b').value);
            const xLog = parseFloat(document.getElementById('x').value);
            result = `log_${bLog}(${xLog}) = ${Math.log(xLog) / Math.log(bLog)}`;
            break;   
        default:
            result = 'Будь ласка, оберіть формулу.';
            break;
    }

    document.getElementById('result').innerHTML = result;
}

function generateSquareTable(maxNumber) {
    let table = '<table border="1"><tr><th>Число</th><th>Квадрат</th></tr>';
    for (let i = 1; i <= maxNumber; i++) {
        table += `<tr><td>${i}</td><td>${i * i}</td></tr>`;
    }
    table += '</table>';
    return table;
}
//jQuery:Обробка подій для меню. Відкриття та закриття меню при натисканні на кнопку.
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.collapse').collapse('toggle');
    });
});

function openAbout() {
    var width = 600;
    var height = 400;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var aboutWindow = window.open("", "AboutProgramWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
    aboutWindow.document.write("<p>Дякуємо, що користуєтесь нашим застосунком Графічний редактор формул.\n Поточна версія програми 1.0</p>");
}
function createDocument() {
    $('#documentTextArea').removeAttr('readonly'); // Забрати атрибут readonly для редагування
}

function saveContent() {
    var content = $('#documentTextArea').val(); // Отримати вміст з textarea
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" }); // Створити Blob з вмістом
    saveAs(blob, "document.txt"); // Зберегти Blob як файл "document.txt"
}

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        $('#documentTextArea').val(text);
        $('#documentTextArea').removeAttr('readonly'); // Видалити атрибут readonly
    };
    reader.readAsText(input.files[0]);
}
