import { useState } from "react"

function randomElements(qtdElements) {
  const elements = ['0','1','2','3','4','5','6','7','8','9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

  let password = ''
  
  for (let i = 0; i < qtdElements; i++) {
    let element = Math.floor(Math.random() * 94)
    password += elements[element]
  }
  
  return password
}


export default function App() {
  const [qtd, setQtd] = useState(12)
  const [password, setPassword] = useState()
  const [copy, setCopy] = useState('Copiar')

  function qtdChange() {
    setQtd(Number(document.getElementById('qtd').value))
  }

  function generatePassword() {
    setCopy('Copiar')
    document.getElementById('copy').style.color = ''
    document.getElementById('copy').style.borderColor = ''

    let newPassword = randomElements(qtd)
    setPassword(newPassword)
  }

  function copyToClipboard() {
    try {
      if (password.length != 0) {
        setCopy('Copiado')
        document.getElementById('copy').style.color = '#00ff80'
        document.getElementById('copy').style.borderColor = '#00ff80'
        navigator.clipboard.writeText(password)
      }
    } catch {
      console.error('Gere um senha para copiar!')
    }
  }

  return (
    <div className="App">
      <h1>Gerador de senhas</h1>
      <div>
        <button
        className={`btn btn-dark`}
        style={{marginRight: '15px'}}
        onClick={() => generatePassword()}
        >Gerar!
        </button>
        <button
        className={`btn btn-dark`} id="copy"
        onClick={() => copyToClipboard()}
        >{copy}
        </button>
      </div>

      <div id="form">
        <input type="range" name="qtd" id="qtd" onInput={qtdChange} min={1} max={50} step={1} value={qtd}/>
        <label htmlFor="qtd">Qtd: {qtd}</label>
      </div>
        <span>
          {password}
        </span>
    </div>
  )
}