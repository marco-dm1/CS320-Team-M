import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Ticket Trading App</h1>
        <p className="text-xl text-gray-600">Buy, sell, and trade tickets easily!</p>
      </header>

      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Buy Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Find the tickets you want at great prices.</p>
              <Button className="w-full">Browse Tickets</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sell Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">List your tickets and reach thousands of buyers.</p>
              <Button className="w-full">List Tickets</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Trade Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Exchange tickets with other users securely.</p>
              <Button className="w-full">Start Trading</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2024 Ticket Trading App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;