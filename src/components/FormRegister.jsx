function FormRegister() {
  return (
    <form className="form-register">
      {/* <label htmlFor="description" className="form-label mb-0">Descrição</label> */}
      <input
        type="text"
        id="description"
        className="form-control"
        placeholder="Descrição"
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" className="form-text mb-3 mt-0">
        Ex: Salário, Aluguel, Mercado.
      </div>

      {/* <label htmlFor="value" className="form-label mb-0">Valor</label> */}
      <input
        type="number"
        id="value"
        className="form-control"
        placeholder="Valor"
        aria-describedby="valueHelpBlock"
      />
      <div id="valueHelpBlock" className="form-text mb-3 mt-0">
        Ex: Números positivos.
      </div>

      {/* <label htmlFor="paymentMethod" className="form-label mb-0">Método de pagamento</label> */}
      <select className="form-select mb-3" aria-label="Default select example">
        <option defaultValue>Selecione um método de pagamento</option>
        <option value="1">Dinheiro</option>
        <option value="2">Cartão de crédito</option>
        <option value="3">Cartão de débito</option>
        <option value="4">Pix</option>
      </select>

      {/* <label htmlFor="category" className="form-label">Categoria</label> */}
      <select className="form-select mb-3" aria-label="Default select example">
        <option defaultValue>Selecione uma categoria</option>
        <option value="1">Alimentação</option>
        <option value="2">Educação</option>
        <option value="3">Lazer</option>
        <option value="4">Saúde</option>
        <option value="5">Transporte</option>
      </select>

      <input
        type="text"
        id="payer"
        className="form-control payer"
        placeholder="Pagador"
        aria-describedby="payerHelpBlock"
      />
      <div id="payerHelpBlock" className="form-text mt-0 mb-3">
        Ex: Seu nome, nome da empresa.
      </div>

      <input
        type="text"
        id="receiver"
        className="form-control"
        placeholder="Beneficiário"
        aria-describedby="receiverHelpBlock"
      />
      <div id="receiverHelpBlock" className="form-text mt-0 mb-3">
        Ex: Seu nome, nome da empresa.
      </div>

      <label htmlFor="date" className="form-label mb-0 text-white">Data</label>
      <input type="date" id="date" className="form-control date" />
    </form>
  );
}

export default FormRegister;
