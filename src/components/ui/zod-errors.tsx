export function ZodErrors({ error }: { error: string[] }) {
  if (!error || !error.length) return null; // Проверяем, что ошибки существуют и их больше нуля

  return (
    <>
      {error.map((err: string, index: number) => (
        <div
          key={index}
          className="text-pink-500 text-xs mt-1"
        >
          {err}
        </div>
      ))}
    </>
  );
}
