import { Component } from 'react'
// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from "./pages/Dashboard";
import ThemeProvider from "./ThemeProvider";
import './index.css'

const queryClient = new QueryClient();

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>⚠️ Something broke. Try refreshing or check the console.</h1>
    }

    return this.props.children
  }
}

const App = () => (
  <ErrorBoundary>
    {/* <ThemeProvider> */}
      {/* <QueryClientProvider client={queryClient}> */}
        <TooltipProvider>
          {/* <Toaster /> */}
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      {/* </QueryClientProvider> */}
    {/* </ThemeProvider> */}
  </ErrorBoundary>
);

export default App;
