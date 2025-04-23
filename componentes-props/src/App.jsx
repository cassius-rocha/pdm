import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOK = "Já chegou!"
  const textoNOK = "Ainda não chegou!"
  const funcaoOK = () => alert("Agradecemos o feedback!")
  const funcaoNOK = () => alert("Verificaremos o que aconteceu!")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />)

  return (
    <div className="container border rounded mt-2">
      <div className="row">
        
        <div className="col-sm-12 col-md-6 col-xxl-3">

          <Cartao cabecalho="22/04/2024">
            <Pedido 
              icone="headset"
              titulo="Headset"
              descricao="Headset falsificado"
            />
            {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">

          <Cartao cabecalho="22/04/2024">
            <Pedido 
                icone="hippo"
                titulo="Hipopótamo"
                descricao="Hipopótamo falsificado"
            />
            {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          
          <Cartao cabecalho="22/04/2024">
            <Pedido 
                icone="gamepad"
                titulo="Gamepad"
                descricao="Gamepad falsificado"
            />
            {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          
          <Cartao cabecalho="22/04/2024">
            <Pedido 
                icone="snowman"
                titulo="Boneco de Neve"
                descricao="Boneco de neve falsificado"
            />
            {componenteFeedback}    
          </Cartao>

        </div>

      </div>
    </div>
  )
}

export default App  