import { Button } from "@/components/ui/button";

const Index = () => {
  const buttons = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    label: `Кнопка ${index + 1}`,
    onClick: () => alert(`Вы нажали на кнопку ${index + 1}!`),
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Выберите одну из красных кнопок ниже
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {buttons.map((button) => (
            <Button
              key={button.id}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 min-h-16"
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
