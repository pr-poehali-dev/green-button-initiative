
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Нажмите на красивую зеленую кнопку ниже
        </p>
        
        <Button 
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          onClick={() => alert('Вы нажали на зеленую кнопку!')}
        >
          Нажми меня
        </Button>
      </div>
    </div>
  );
};

export default Index;
