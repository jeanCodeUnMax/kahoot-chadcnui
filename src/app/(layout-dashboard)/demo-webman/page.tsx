export default function ColoredZoningPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* HEADER - Rouge */}
      <div className="border-2 border-red-500 bg-red-100 p-4 mb-4 rounded">
        <div className="text-xs text-red-800 font-bold mb-2">HEADER</div>
        <div className="h-10"></div>
      </div>
      
      {/* LAYOUT PRINCIPAL */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* SIDEBAR - Vert */}
        <div className="border-2 border-green-500 bg-green-100 p-4 rounded md:w-1/4">
          <div className="text-xs text-green-800 font-bold mb-2">SIDEBAR</div>
          <div className="h-40"></div>
        </div>
        
        {/* CONTENU PRINCIPAL - Bleu */}
        <div className="border-2 border-blue-500 bg-blue-100 p-4 rounded md:w-3/4">
          <div className="text-xs text-blue-800 font-bold mb-2">CONTENU PRINCIPAL</div>
          
          {/* Sous-sections dans le contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-blue-400 bg-blue-50 p-3 rounded">
              <div className="text-xs text-blue-700 mb-2">SECTION 1</div>
              <div className="h-20"></div>
            </div>
            <div className="border border-blue-400 bg-blue-50 p-3 rounded">
              <div className="text-xs text-blue-700 mb-2">SECTION 2</div>
              <div className="h-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FOOTER - Gris */}
      <div className="border-2 border-gray-500 bg-gray-100 p-4 rounded">
        <div className="text-xs text-gray-800 font-bold mb-2">FOOTER</div>
        <div className="h-10"></div>
      </div>
    </div>
  );
}