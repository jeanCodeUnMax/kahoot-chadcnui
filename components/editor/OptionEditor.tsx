

export default function OptionEditor() {


  return (
    <>
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-grid gap-2 mb-3">
          <button className="btn btn-primary w-100 m-2">
            <i className="bi bi-list-check me-2"></i>Simple/Multi
          </button>

          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-clock me-2"></i>Timer
          </button>

          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-star me-2"></i>Point
          </button>
        </div>

       
      </div>
      </div>
    </>
  );
}