import { Routes, Route, Navigate, useParams } from "react-router-dom";

/* ===============================
   CONTEXT & GUARDS
=============================== */
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

/* ===============================
   AUTH PAGES
=============================== */
import LoginPage from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

/* ===============================
   LAYOUT
=============================== */
import AdminLayout from "./layout/AdminLayout";

/* ===============================
   DASHBOARD
=============================== */
import Dashboard from "./pages/dashboard/Dashboard";

/* ===============================
   PRODUCTS (LIST PAGES)
=============================== */
import PhonesPage from "./pages/products/phones";
import LaptopsPage from "./pages/products/laptops";
import PCsPage from "./pages/products/pcs";

/* ===============================
   PHONE MODELS (CREATE / EDIT)
=============================== */
import NewPhoneModel from "./pages/products/phones/new/NewPhoneModel";
import PhoneModelEditor from "./pages/products/phones/PhoneModelEditor";

/* ===============================
   PHONE MEDIA
=============================== */
import PhoneMedia from "./pages/products/phones/media/PhoneMedia";
import PhoneCardImage from "./pages/products/phones/card-image/PhoneCardImage";

/* ===============================
   PHONE AFFILIATES (🔥 FIXED)
=============================== */
import AffiliateManager from "./pages/products/phones/affiliates/AffiliateManager";

/* ===============================
   TABLES (ADMIN DATA)
=============================== */
import PhoneModelsTable from "./pages/tables/phone-models";
import PhoneMediaTable from "./pages/tables/phone-media";
import BrandsTable from "./pages/tables/brands";
import SpecsTable from "./pages/tables/specs";
import AffiliateLinksTable from "./pages/tables/affiliate-links";

/* ===============================
   SETTINGS
=============================== */
import AccountProfile from "./pages/settings/account";
import SecuritySettings from "./pages/settings/SecuritySettings";
import DatabaseSettings from "./pages/settings/DatabaseSettings";

/* ===============================
   LEGACY REDIRECTS
=============================== */
function LegacyMediaRedirect() {
  const { modelId } = useParams();

  return (
    <Navigate
      to={`/admin/products/phones/model/${modelId}/media`}
      replace
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* ================= ROOT ================= */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* -------- Dashboard -------- */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* -------- Products -------- */}
          <Route path="products/phones" element={<PhonesPage />} />
          <Route path="products/phones/new" element={<NewPhoneModel />} />

          <Route
            path="products/phones/model/:modelId"
            element={<PhoneModelEditor />}
          />

          <Route
            path="products/phones/model/:modelId/media"
            element={<PhoneMedia />}
          />

          <Route
            path="products/phones/model/:modelId/card-image"
            element={<PhoneCardImage />}
          />

          {/* 🔥 NEW AFFILIATE ROUTE */}
          <Route
            path="products/phones/model/:modelId/affiliates"
            element={<AffiliateManager />}
          />

          <Route path="products/laptops" element={<LaptopsPage />} />
          <Route path="products/pcs" element={<PCsPage />} />

          {/* -------- Tables (Master Data) -------- */}
          <Route path="tables/phone-models" element={<PhoneModelsTable />} />
          <Route path="tables/phone-media" element={<PhoneMediaTable />} />
          <Route path="tables/brands" element={<BrandsTable />} />
          <Route path="tables/specs" element={<SpecsTable />} />
          <Route
            path="tables/affiliate-links"
            element={<AffiliateLinksTable />}
          />

          {/* -------- Settings -------- */}
          <Route path="settings/account" element={<AccountProfile />} />
          <Route path="settings/security" element={<SecuritySettings />} />
          <Route path="settings/database" element={<DatabaseSettings />} />

          {/* -------- Legacy -------- */}
          <Route
            path="models/:modelId/media"
            element={<LegacyMediaRedirect />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
