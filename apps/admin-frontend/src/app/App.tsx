import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";

/* ============================================
   CONTEXT
============================================ */

import { AuthProvider } from "@/context/AuthContext";

/* ============================================
   GUARDS
============================================ */

import ProtectedRoute from "@/components/ProtectedRoute";

/* ============================================
   LAYOUT
============================================ */

import AdminLayout from "@/layout/AdminLayout";

/* ============================================
   AUTH
============================================ */

import LoginPage from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";

/* ============================================
   DASHBOARD
============================================ */

import Dashboard from "@/pages/dashboard/Dashboard";

/* ============================================
   PRODUCTS
============================================ */

import LaptopsPage from "@/pages/products/laptops";
import PCsPage from "@/pages/products/pc-parts";

/* ============================================
   PHONE WORKSPACE
============================================ */

import BrandsPage from "@/pages/products/phones/brands";
import ModelsPage from "@/pages/products/phones/models";
import CreatePhoneWizardPage from "@/pages/products/phones/create";
import PhoneEditorPage from "@/pages/products/phones/editor";
import BasicInfoPage from "@/pages/products/phones/basic-info";
import SpecOrganizerPage from "@/pages/products/phones/spec-organizer";
import PhoneCardImagePage from "@/pages/products/phones/card-image";
import PhoneMedia from "@/pages/products/phones/media/PhoneMedia";
import AffiliateManager from "@/pages/products/phones/affiliates/AffiliateManager";

/* ============================================
   SETTINGS
============================================ */

import AccountProfile from "@/pages/settings/account";
import SecuritySettings from "@/pages/settings/SecuritySettings";
import DatabaseSettings from "@/pages/settings/DatabaseSettings";

/* ============================================
   APP
============================================ */

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors />

      <Routes>
        {/* ROOT */}

        <Route
          path="/"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        {/* AUTH */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* DASHBOARD */}

          <Route path="dashboard" element={<Dashboard />} />

          {/* ============================================
              PHONE MODULE
          ============================================ */}

          <Route
            path="products/phones"
            element={<BrandsPage />}
          />

          <Route
            path="products/phones/models"
            element={<ModelsPage />}
          />

          <Route
            path="products/phones/create"
            element={<CreatePhoneWizardPage />}
          />

          <Route
            path="products/phones/editor/:modelId"
            element={<PhoneEditorPage />}
          />

          <Route
            path="products/phones/basic-info/:modelId"
            element={<BasicInfoPage />}
          />

          <Route
            path="products/phones/spec-organizer/:modelId"
            element={<SpecOrganizerPage />}
          />

          <Route
            path="products/phones/card-image/:modelId"
            element={<PhoneCardImagePage />}
          />

          <Route
            path="products/phones/model/:modelId/media"
            element={<PhoneMedia />}
          />

          <Route
            path="products/phones/model/:modelId/affiliates"
            element={<AffiliateManager />}
          />

          {/* ============================================
              OTHER PRODUCTS
          ============================================ */}

          <Route
            path="products/laptops"
            element={<LaptopsPage />}
          />

          <Route
            path="products/pcs"
            element={<PCsPage />}
          />

          {/* ============================================
              SETTINGS
          ============================================ */}

          <Route
            path="settings/account"
            element={<AccountProfile />}
          />

          <Route
            path="settings/security"
            element={<SecuritySettings />}
          />

          <Route
            path="settings/database"
            element={<DatabaseSettings />}
          />
        </Route>

        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Routes>
    </AuthProvider>
  );
}