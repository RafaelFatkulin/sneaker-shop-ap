export function ZodErrors({ error }: { error: string[] }) {
    if (!error) return null;
    return error.map((err: string, index: number) => (
      <div key={index} className="text-pink-500 text-xs mt-1">
        {err}
      </div>
    ));
  }