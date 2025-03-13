import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import App from "./App.tsx";
import Copyright from "./components/Copyright.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import "./index.css";
import WhatsAppIcon from "./components/WhatsAppIcon.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Toaster />
        <App />
        <Footer />
        <Copyright />
        <WhatsAppIcon />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
