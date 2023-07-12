const MagicButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="bg-slate-100 rounded-md text-zinc-900">
      {children}
    </button>
  );
};

export { MagicButton };
