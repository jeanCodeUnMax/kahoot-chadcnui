

export default function QuestionEditor() {

  return (
    <>
    <div className="border rounded p-3 d-flex flex-column" style={{ height: '100%' }}>
      <div className="border rounded p-2 mb-3">
        <span className="d-block text-center">question</span>
      </div>
      
      <div className="border rounded p-3 mb-3" style={{ minHeight: '150px' }}>
        <div className="text-center">
          <p>un media(un bout de code)</p>
          <p>pour bien illustrer la question</p>
        </div>
      </div>
      
      <div>
        <div className="border rounded p-2 mb-2">
          <span className="d-block text-center">reponses</span>
        </div>
        
        <div className="d-flex">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="border rounded p-2 text-center">a</div>
              </div>
              <div className="col-6">
                <div className="border rounded p-2 text-center">c</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="border rounded p-2 text-center position-relative">
                  b
                  <div className="position-absolute" style={{ bottom: '0', right: '10px' }}>
                    <small>○</small>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="border rounded p-2 text-center">d</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};