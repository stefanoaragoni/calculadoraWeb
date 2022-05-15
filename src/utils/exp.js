const division_component = (a, b) => (isNaN((parseFloat(a) / parseFloat(b))) ? 0 : String(parseFloat(a) / parseFloat(b)))

const mult_component = (a, b) => (isNaN((parseFloat(a) * parseFloat(b))) ? 0 : String(parseFloat(a) * parseFloat(b)))

const resta_component = (a, b) => (isNaN((parseFloat(a) - parseFloat(b))) ? 0 : String(parseFloat(a) - parseFloat(b)))

const suma_component = (a, b) => (isNaN((parseFloat(a) + parseFloat(b))) ? 0 : String(parseFloat(a) + parseFloat(b)))

const modulo_component = (a, b) => (isNaN((parseFloat(a) % parseFloat(b))) ? 0 : String(parseFloat(a) % parseFloat(b)))

export {
  division_component, mult_component, resta_component, suma_component, modulo_component,
}
