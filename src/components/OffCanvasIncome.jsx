function OffCanvasRegister() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      style={ { width: '100vw', height: '100vh' } }
    >
      <div className="offcanvas-header bg-primary text-white">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Receita</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control bg-secondary text-white"
            id="floatingInput"
            placeholder="valor"
          />
          <label htmlFor="floatingInput">Valor</label>
        </div>

      </div>
    </div>
  );
}

export default OffCanvasRegister;
