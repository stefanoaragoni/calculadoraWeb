import './App.css'
import { useState, useEffect } from 'react'
import {
  division_component, mult_component, resta_component, suma_component, modulo_component,
} from './utils/exp'

function App() {
  const [antes, setAntes] = useState('')
  const [ahora, setAhora] = useState('')
  const [result, setResult] = useState('')

  const [input, setInput] = useState('0')

  const [total, setTotal] = useState(false)
  const [operador, setOperador] = useState('')

  const numero = (n) => {
    if (ahora === '0') {
      setAhora('')
    }

    if (ahora === 'ERROR') {
      setOperador('')
      setInput('')
      setAntes('')
      setAhora('')
    }

    if (ahora.length > 8) {
      return
    }

    if (ahora.includes('.')) {
      if (n.target.innerHTML === '.') {
        return
      }
    }

    if (total) {
      setAntes('')
    }

    ahora ? setAhora((pre) => pre + n.target.innerHTML) : setAhora(n.target.innerHTML)

    setTotal(false)
  }

  const operacion = (n) => {
    setTotal(false)
    setOperador(n.target.innerHTML)

    if (ahora === '') return
    if (antes !== '') {
      calcular()
    } else {
      setAntes(ahora)
      setAhora('')
    }
  }

  const calcular = (n) => {
    setTotal(true)

    var resultado

    if (operador === '/') {
      resultado = division_component(antes, ahora)
    } else if (operador === '*') {
      resultado = mult_component(antes, ahora)
    } else if (operador === '+') {
      resultado = suma_component(antes, ahora)
    } else if (operador === '-') {
      resultado = resta_component(antes, ahora)
    } else if (operador === '%') {
      resultado = modulo_component(antes, ahora)
    } else {
      return
    }

    if (resultado.includes('.')) {
      let resultado2 = String((parseFloat(resultado)).toFixed(0));

      if(resultado2.length > 8) {
        resultado2 = String((parseFloat(resultado)).toFixed(0));
      }else if(resultado2.length > 7) {
        resultado2 = String((parseFloat(resultado)).toFixed(1));
      }else if(resultado2.length > 6) {
        resultado2 = String((parseFloat(resultado)).toFixed(2));
      }else if(resultado2.length > 5) {
        resultado2 = String((parseFloat(resultado)).toFixed(3));
      }else if(resultado2.length > 4) {
        resultado2 = String((parseFloat(resultado)).toFixed(4));
      }else if(resultado2.length > 3) {
        resultado2 = String((parseFloat(resultado)).toFixed(5));
      }else if(resultado2.length > 2) {
        resultado2 = String((parseFloat(resultado)).toFixed(6));
      }else if(resultado2.length > 1) {
        resultado2 = String((parseFloat(resultado)).toFixed(7));
      }else if(resultado2.length > 0) {
        resultado2 = String((parseFloat(resultado)).toFixed(7));
      }
      
      
      resultado = resultado2
      console.log(resultado)
    }
    
    if (parseFloat(resultado) > 999999999) {
      setOperador('')
      setInput('ERROR')
      setAntes('')
      setAhora('ERROR')
    } else if (parseFloat(resultado) < 0) {
      setOperador('')
      setInput('ERROR')
      setAntes('')
      setAhora('ERROR')
    }else if(resultado.length > 9) {
      setOperador('')
      setInput('ERROR')
      setAntes('')
      setAhora('ERROR')
    }else {
      setInput('')
      setAntes(resultado)
      setResult(resultado)
      setAhora('')
    }

    setTotal(false)
  }

  const reset = () => {
    setAntes('')
    setAhora('0')
    setInput('0')
    setOperador('')
  }

  useEffect(() => {
    console.log('ANTES', antes, 'AHORA', ahora, 'INPUT', input, 'OPERADOR', operador, 'RESULT', result)
    setInput(ahora)
  }, [ahora])

  useEffect(() => {
    console.log('ANTES', antes, 'AHORA', ahora, 'INPUT', input, 'OPERADOR', operador, 'RESULT', result)
    setInput(result)
  }, [result])

  useEffect(() => {
    setInput('0')
  }, [])

  return (
    <div className="App">
      <div className="Contenedor">
        <div className="Calculadora">{input}</div>
        <div className="boton Light" onClick={reset}>AC</div>
        <div className="Fake Light2">+/-</div>
        <div className="boton Light" onClick={operacion}>%</div>
        <div className="boton Orange" onClick={operacion}>/</div>

        <div className="boton Number" onClick={numero}>7</div>
        <div className="boton Number" onClick={numero}>8</div>
        <div className="boton Number" onClick={numero}>9</div>
        <div className="boton Orange" onClick={operacion}>*</div>

        <div className="boton Number" onClick={numero}>4</div>
        <div className="boton Number" onClick={numero}>5</div>
        <div className="boton Number" onClick={numero}>6</div>
        <div className="boton Orange" onClick={operacion}>-</div>

        <div className="boton Number" onClick={numero}>1</div>
        <div className="boton Number" onClick={numero}>2</div>
        <div className="boton Number" onClick={numero}>3</div>
        <div className="boton Orange" onClick={operacion}>+</div>

        <div className="boton Number" onClick={numero}>0</div>
        <div className="boton Number" onClick={numero}>.</div>
        <div className="Fake" />
        <div className="boton Orange" onClick={calcular}>=</div>
      </div>
    </div>
  )
}

export default App
