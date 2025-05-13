export default function NavigationEditor() {
  return (
    <>
      <div className="border rounded p-2 d-flex flex-column" style={{ height: '100%' }}>
        <div className="text-center mb-2">
          <small className="text-muted">navigation dans le formulaire</small>
        </div>

        <div className="text-center mb-2">
          <span className="text-muted">↑</span>
        </div>

        <div className="border rounded p-2 mb-2 text-center">
          <span>question 1</span>
          <div className="text-center">
            <small>...</small>
          </div>
          <div className="text-center">
            <span className="text-muted">↑</span>
          </div>
        </div>

        <div className="border rounded p-2 mb-2 text-center">
          <span>question 2</span>
        </div>

        <div className="border rounded p-2 mb-2 text-center">
          <span>question3</span>
        </div>

        <div className="text-center mb-2">
          <span className="text-muted">↓</span>
        </div>

        <div className="border rounded p-2 text-center mt-auto">
          <span>new</span>
        </div>
      </div>
    </>

    
    
  );
};