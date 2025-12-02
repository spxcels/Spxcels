import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Public
import LoginPage from "./pages/Login";

// Admin Layout
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";

// Auto Admin Pages
import TableList from "./pages/tables/TableList";
import TableForm from "./pages/tables/TableForm";

// Settings Pages
import DatabaseSettings from "./pages/settings/DatabaseSettings";
import AccountSettings from "./pages/settings/AccountSettings";  // ✅ NEW

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* =====================================
              ADMIN PROTECTED ROUTES (Nested)
             ===================================== */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Dashboard */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* Auto Admin Tables */}
            <Route path="tables/:table" element={<TableList />} />
            <Route path="tables/:table/create" element={<TableForm />} />
            <Route path="tables/:table/edit/:id" element={<TableForm />} />

            {/* Settings */}
            <Route path="settings/database" element={<DatabaseSettings />} />
            <Route path="settings/account" element={<AccountSettings />} /> {/* ✅ NEW */}
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
