//alert('Hello World!');
console.log('Hello World!');

console.log('Variables and Constants');
// eslint-disable-next-line no-undef
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
// eslint-disable-next-line no-undef
const constant1 = global1
    + functionScoped
    - blockScoped;
// eslint-disable-next-line no-undef
console.log(global1); console.log(blockScoped); console.log(constant1);


console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable); console.log(floatingPointNumber); console.log(stringVariable); console.log(booleanVariable);
console.log(isNumber); console.log(isString); console.log(isBoolean);

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1
console.log(true1); console.log(false1); console.log(false2); console.log(true2); console.log(true3);
console.log(true4); console.log(true5); console.log(false3); console.log(sortaTrue); console.log(notTrue);

console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);
console.log('New ES6 functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(numberArray1); console.log(stringArray1); console.log(variableArray1);

const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1); console.log(index1);

// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares); console.log(cubes);

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

console.log(four); console.log(string3);

const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(fourIndex); console.log(string3Index);


const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2); console.log(evenNumbers);console.log(oddNumbers);

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)


const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
    console.log('Binding to DOM');
    // eslint-disable-next-line no-undef
    const bindById = $('#bind-by-id');
    // eslint-disable-next-line no-undef
    const bindByClass = $('.bind-by-class');
    console.log(bindById);
    console.log(bindByClass);


    // eslint-disable-next-line no-undef
    const changeStyle = $('#change-style');
    // eslint-disable-next-line no-undef
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    console.log('Get and set attributes');
    // eslint-disable-next-line no-undef
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    // eslint-disable-next-line no-undef
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // eslint-disable-next-line no-undef
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    // eslint-disable-next-line no-undef
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // eslint-disable-next-line no-undef
    const hideMe = $("#hide-me");
    hideMe.hide();
    // eslint-disable-next-line no-undef
    const showMe = $("#show-me");
    showMe.show();

    // eslint-disable-next-line no-undef
    const newLineItem = $("<li>Line item 1</li>");
    // eslint-disable-next-line no-undef
    const anotherLineItem = $("<li>Line item 2</li>");
    // eslint-disable-next-line no-undef
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // eslint-disable-next-line no-undef
    const removeLi =$("#remove-this");
    // eslint-disable-next-line no-undef
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // eslint-disable-next-line no-undef
    const changeThisText = $("#change-this-text");
    // eslint-disable-next-line no-undef
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`<li>Line item A</li><li>Line item B</li><li>Line item C</li>`);

    // eslint-disable-next-line no-undef
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css('background-color', 'red').css('color', 'white');
    // eslint-disable-next-line no-undef
    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    const handleClick = () => console.log('Handle click');
    // eslint-disable-next-line no-undef
    const clickable = $('.clickable');
    clickable.click(handleClick);


    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        // eslint-disable-next-line no-undef
        $(target).css('background-color', 'blue').css('color', 'white');
    }
    // eslint-disable-next-line no-undef
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    let hideBtn, showBtn, hideShowHeader;
    // eslint-disable-next-line no-undef
    hideBtn = $('#hide');
    // eslint-disable-next-line no-undef
    showBtn = $('#show');
    // eslint-disable-next-line no-undef
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {hideShowHeader.hide();}
    const showHandler = () => {hideShowHeader.show();}
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}

// eslint-disable-next-line no-undef
init();