// app/backoffice/editor/page.tsx
import NavigationEditor from '@/components/editor/NavigationEditor'
import QuestionEditor from '@/components/editor/QuestionEditor'
import OptionEditor from '@/components/editor/OptionEditor'

export default function EditorPage() {
  return (
    <>
      <h2 className="mb-4">Édition du quiz</h2>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-3"><NavigationEditor /></div>
          <div className="col-md-6"><QuestionEditor /></div>
          <div className="col-md-3"><OptionEditor /></div>
        </div>
      </div>
    </>
  )
}