import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Paket from "@/pages/Paket";
import PaketDetail from "@/pages/PaketDetail";
import Daftar from "@/pages/Daftar";
import Tentang from "@/pages/Tentang";
import Hubungi from "@/pages/Hubungi";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/paket" component={Paket} />
      <Route path="/paket/:id" component={PaketDetail} />
      <Route path="/daftar/:id" component={Daftar} />
      <Route path="/tentang" component={Tentang} />
      <Route path="/hubungi" component={Hubungi} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
