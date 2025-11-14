import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import EmployeePage from '@/pages/employee'
import ProjectPage from '@/pages/project'
import ListPage from '@/pages/list'
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex bg-bg min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/list" replace />} />
              <Route path="/list" element={<ListPage />} />
              <Route path="/employee" element={<EmployeePage />} />
              <Route path="/project" element={<ProjectPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
