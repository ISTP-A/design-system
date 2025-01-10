import './globals.css'
import { Button } from "./components/ui/Button"

function App() {

  return (
    <div className="font-pretendard space-y-2">
      <div><Button variant="primary" size='sm'>저장하기</Button></div>
      <div><Button variant="primary" size='md'>저장하기</Button></div>
      <div><Button variant='primary' size='lg'>저장하기</Button></div>
      <div><Button variant="secondary" size='sm'>취소하기</Button></div>
      <div><Button variant="secondary" size='md' >취소하기</Button></div>
      <div><Button variant='secondary' size='lg'>취소하기</Button></div>
      <div><Button variant="text">더보기</Button></div>
      <div><Button variant="text" disabled>더보기</Button></div>
    </div>
  )
}

export default App