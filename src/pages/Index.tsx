import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [greenButtonId, setGreenButtonId] = useState<number | null>(null);

  const buttons = Array.from({ length: 9 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      label: `Кнопка ${id}`,
      onClick: () => {
        const nextGreenId = id === 9 ? 1 : id + 1;
        setGreenButtonId(nextGreenId);
        alert(
          `Вы нажали на кнопку ${id}! Кнопка ${nextGreenId} теперь красная.`,
        );
      },
    };
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Нажмите на кнопку, и следующая станет красной
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {buttons.map((button) => {
            const isActive = button.id === greenButtonId;
            const bgColor = isActive
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600";
            return (
              <Button
                key={button.id}
                className={`${bgColor} text-white font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 min-h-16`}
                onClick={button.onClick}
              >
                {button.label}
                {isActive && (
                  <span className="block text-xs mt-1">Я красная!</span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
